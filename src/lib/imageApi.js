/**
 * Utility functions for fetching images from API (reads from metadata JSON)
 * Note: These are primarily used by the admin panel. 
 * For manual URL usage in components, copy URLs directly from the admin panel.
 */

/**
 * Fetch all images for a specific folder/page
 * @param {string} folder - The folder/page name (e.g., 'hero', 'about', 'exterior-residential')
 * @returns {Promise<Array>} Array of image objects with url, publicId, fileName, etc.
 */
export async function getImagesByFolder(folder) {
  try {
    const response = await fetch(`/api/images?folder=${folder}`, {
      cache: 'no-store', // Always fetch fresh data
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.data[folder]) {
      return data.data[folder];
    }
    
    return [];
  } catch (error) {
    console.error(`Error fetching images for folder "${folder}":`, error);
    return [];
  }
}

/**
 * Fetch all images across all folders
 * @returns {Promise<Object>} Object with folder names as keys and arrays of images as values
 */
export async function getAllImages() {
  try {
    const response = await fetch('/api/images', {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      return data.data;
    }
    
    return {};
  } catch (error) {
    console.error('Error fetching all images:', error);
    return {};
  }
}

