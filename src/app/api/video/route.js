import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import cloudinary from '@/lib/cloudinary';
import { isAuthenticated } from '@/lib/auth';

// Increase max duration for large video uploads (5 minutes)
export const maxDuration = 300;

// Helper function to load video metadata
function loadVideoMetadata() {
  const metadataFile = path.join(process.cwd(), 'data', 'videos-metadata.json');
  
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
    console.error('Error reading video metadata file:', error);
    return {
      hero: null,
      footer: null
    };
  }
}

// Helper function to save video metadata
function saveVideoMetadata(section, videoUrl, publicId, fileName) {
  const dataDir = path.join(process.cwd(), 'data');
  const metadataFile = path.join(dataDir, 'videos-metadata.json');
  
  // Create data directory if it doesn't exist
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Read existing metadata or create new
  let metadata = loadVideoMetadata();

  // Add/update video metadata
  const videoData = {
    url: videoUrl,
    publicId: publicId,
    fileName: fileName,
    uploadedAt: new Date().toISOString(),
  };

  metadata[section] = videoData;

  // Save metadata
  fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
  return metadata;
}

// GET - Fetch videos
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

    const metadata = loadVideoMetadata();

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
    console.error('Error fetching videos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos', details: error.message },
      { status: 500 }
    );
  }
}

// POST - Upload video
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

    // Delete old video if exists
    const existingMetadata = loadVideoMetadata();
    if (existingMetadata[section]?.publicId) {
      try {
        await cloudinary.uploader.destroy(existingMetadata[section].publicId, {
          resource_type: 'video'
        });
      } catch (error) {
        console.error('Error deleting old video:', error);
      }
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Get file size in bytes
    const fileSize = buffer.length;
    const fileSizeMB = fileSize / (1024 * 1024);
    
    console.log(`Uploading video: ${file.name}, Size: ${fileSizeMB.toFixed(2)}MB`);

    // Upload to Cloudinary with optimized settings for large files
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `infinity-space/videos/${section}`,
          resource_type: 'video',
          chunk_size: 20000000, // 20MB chunks for large videos (max 20MB per chunk)
          timeout: 600000, // 10 minutes timeout
          eager: [], // Don't generate transformations during upload
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    // Save metadata
    saveVideoMetadata(section, result.secure_url, result.public_id, file.name);

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      section: section,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload video', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete video
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

    const metadata = loadVideoMetadata();
    const video = metadata[section];

    if (!video || !video.publicId) {
      return NextResponse.json(
        { error: 'No video found for this section' },
        { status: 404 }
      );
    }

    // Delete from Cloudinary
    const result = await cloudinary.uploader.destroy(video.publicId, {
      resource_type: 'video'
    });

    // Remove from metadata
    metadata[section] = null;
    const metadataFile = path.join(process.cwd(), 'data', 'videos-metadata.json');
    fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));

    return NextResponse.json({
      success: true,
      result: result,
    });
  } catch (error) {
    console.error('Error deleting video:', error);
    return NextResponse.json(
      { error: 'Failed to delete video', details: error.message },
      { status: 500 }
    );
  }
}

