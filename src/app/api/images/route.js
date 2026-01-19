import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import cloudinary from '@/lib/cloudinary';
import { isAuthenticated } from '@/lib/auth';

// Helper function to load image metadata
function loadImageMetadata(folder = null) {
  const metadataFile = path.join(process.cwd(), 'data', 'images-metadata.json');
  
  if (!fs.existsSync(metadataFile)) {
    return {};
  }

  try {
    const fileData = fs.readFileSync(metadataFile, 'utf8');
    const metadata = JSON.parse(fileData);
    
    if (folder) {
      return { [folder]: metadata[folder] || [] };
    }
    
    return metadata;
  } catch (error) {
    console.error('Error reading metadata file:', error);
    return {};
  }
}

// GET - Fetch images by folder
export async function GET(request) {
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
    const folder = searchParams.get('folder');

    const metadata = loadImageMetadata(folder);

    return NextResponse.json({
      success: true,
      data: metadata,
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete image from Cloudinary and metadata
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
    const publicId = searchParams.get('publicId');
    const folder = searchParams.get('folder');

    if (!publicId) {
      return NextResponse.json(
        { error: 'No publicId provided' },
        { status: 400 }
      );
    }

    // Delete from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    // Remove from metadata
    const metadataFile = path.join(process.cwd(), 'data', 'images-metadata.json');
    if (fs.existsSync(metadataFile)) {
      const fileData = fs.readFileSync(metadataFile, 'utf8');
      const metadata = JSON.parse(fileData);

      if (metadata[folder]) {
        metadata[folder] = metadata[folder].filter(img => img.publicId !== publicId);
        fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
      }
    }

    return NextResponse.json({
      success: true,
      result: result,
    });
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json(
      { error: 'Failed to delete image', details: error.message },
      { status: 500 }
    );
  }
}

