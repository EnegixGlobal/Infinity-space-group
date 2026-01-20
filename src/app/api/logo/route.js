import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import cloudinary from '@/lib/cloudinary';
import { isAuthenticated } from '@/lib/auth';

// Helper function to load logo metadata
function loadLogoMetadata() {
  const metadataFile = path.join(process.cwd(), 'data', 'logos-metadata.json');
  
  if (!fs.existsSync(metadataFile)) {
    return {
      hero: null,
      footer: null
    };
  }

  try {
    const fileData = fs.readFileSync(metadataFile, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading logo metadata file:', error);
    return {
      hero: null,
      footer: null
    };
  }
}

// Helper function to save logo metadata
function saveLogoMetadata(section, logoUrl, publicId, fileName) {
  const dataDir = path.join(process.cwd(), 'data');
  const metadataFile = path.join(dataDir, 'logos-metadata.json');
  
  // Create data directory if it doesn't exist
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Read existing metadata or create new
  let metadata = loadLogoMetadata();

  // Add/update logo metadata
  const logoData = {
    url: logoUrl,
    publicId: publicId,
    fileName: fileName,
    uploadedAt: new Date().toISOString(),
  };

  metadata[section] = logoData;

  // Save metadata
  fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
  return metadata;
}

// GET - Fetch logos
export async function GET(request) {
  // Check authentication for admin, but allow public access for frontend
  const { searchParams } = new URL(request.url);
  const publicAccess = searchParams.get('public') === 'true';

  if (!publicAccess) {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized. Please login to access this resource.' },
        { status: 401 }
      );
    }
  }

  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section'); // 'hero' or 'footer'

    const metadata = loadLogoMetadata();

    if (section) {
      return NextResponse.json({
        success: true,
        data: { [section]: metadata[section] || null },
      });
    }

    return NextResponse.json({
      success: true,
      data: metadata,
    });
  } catch (error) {
    console.error('Error fetching logos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch logos', details: error.message },
      { status: 500 }
    );
  }
}

// POST - Upload logo
export async function POST(request) {
  // Check authentication
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json(
      { error: 'Unauthorized. Please login to access this resource.' },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const section = formData.get('section'); // 'hero' or 'footer'

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!section || !['hero', 'footer'].includes(section)) {
      return NextResponse.json(
        { error: 'Invalid section. Must be "hero" or "footer"' },
        { status: 400 }
      );
    }

    // Delete old logo if exists
    const existingMetadata = loadLogoMetadata();
    if (existingMetadata[section]?.publicId) {
      try {
        await cloudinary.uploader.destroy(existingMetadata[section].publicId);
      } catch (error) {
        console.error('Error deleting old logo:', error);
      }
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `infinity-space/logos/${section}`,
          resource_type: 'image',
          transformation: [
            { quality: 'auto' },
            { fetch_format: 'auto' }
          ]
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    // Save metadata
    saveLogoMetadata(section, result.secure_url, result.public_id, file.name);

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      section: section,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload logo', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete logo
export async function DELETE(request) {
  // Check authentication
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json(
      { error: 'Unauthorized. Please login to access this resource.' },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section'); // 'hero' or 'footer'

    if (!section || !['hero', 'footer'].includes(section)) {
      return NextResponse.json(
        { error: 'Invalid section. Must be "hero" or "footer"' },
        { status: 400 }
      );
    }

    const metadata = loadLogoMetadata();
    const logo = metadata[section];

    if (!logo || !logo.publicId) {
      return NextResponse.json(
        { error: 'No logo found for this section' },
        { status: 404 }
      );
    }

    // Delete from Cloudinary
    const result = await cloudinary.uploader.destroy(logo.publicId);

    // Remove from metadata
    metadata[section] = null;
    const metadataFile = path.join(process.cwd(), 'data', 'logos-metadata.json');
    fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));

    return NextResponse.json({
      success: true,
      result: result,
    });
  } catch (error) {
    console.error('Error deleting logo:', error);
    return NextResponse.json(
      { error: 'Failed to delete logo', details: error.message },
      { status: 500 }
    );
  }
}

