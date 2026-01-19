/**
 * Utility to get image paths with basePath prefix for GitHub Pages
 * This ensures images load correctly when deployed to GitHub Pages with a basePath
 */
const basePath = '/Mamba-Safari'

export function getImagePath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Return path with basePath prefix
  return `${basePath}/${cleanPath}`
}

