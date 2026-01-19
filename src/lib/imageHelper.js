/**
 * Helper function to get the correct image source
 * Handles both string paths and Next.js imported image objects
 */
export function getImageSrc(img) {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (img.src) return img.src;
  if (img.default) return img.default;
  return img;
}

