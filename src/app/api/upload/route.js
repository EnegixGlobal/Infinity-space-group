import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import { isAuthenticated } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

// Helper function to save image metadata
function saveImageMetadata(folder, imageUrl, publicId, fileName) {
  const dataDir = path.join(process.cwd(), 'data');
  const metadataFile = path.join(dataDir, 'images-metadata.json');
  
  // Create data directory if it doesn't exist
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Read existing metadata or create new
  let metadata = {};
  if (fs.existsSync(metadataFile)) {
    try {
      const fileData = fs.readFileSync(metadataFile, 'utf8');
      metadata = JSON.parse(fileData);
    } catch (error) {
      console.error('Error reading metadata file:', error);
      metadata = {};
    }
  }

  // Initialize folder if it doesn't exist
  if (!metadata[folder]) {
    metadata[folder] = [];
  }

  // Add new image metadata
  const imageData = {
    url: imageUrl,
    publicId: publicId,
    fileName: fileName,
    uploadedAt: new Date().toISOString(),
  };

  // Check if image already exists (by publicId)
  const existingIndex = metadata[folder].findIndex(img => img.publicId === publicId);
  if (existingIndex !== -1) {
    metadata[folder][existingIndex] = imageData;
  } else {
    metadata[folder].push(imageData);
  }

  // Save metadata
  fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
  return metadata;
}

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
    const folder = formData.get('folder') || 'general';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `infinity-space/${folder}`,
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
    saveImageMetadata(folder, result.secure_url, result.public_id, file.name);

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      folder: folder,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload image', details: error.message },
      { status: 500 }
    );
  }
}

