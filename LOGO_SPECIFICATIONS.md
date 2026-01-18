# Logo & Favicon Specifications

## Current Setup
The logo is configured to be used as both the site logo and favicon. The code is set up to use `/public/images/logo.jpg`.

## Image Requirements

To ensure the logo displays clearly without pixelation, please provide/update the logo image with these specifications:

### Logo File (`/public/images/logo.jpg`)
- **Format**: PNG or JPG (PNG recommended for transparency if needed)
- **Minimum Size**: 512x512 pixels (square)
- **Recommended Size**: 1024x1024 pixels or higher
- **Aspect Ratio**: 1:1 (square)
- **Background**: White circle as per design
- **Quality**: High resolution, no compression artifacts

### Favicon Files (Optional - for better browser support)

For optimal favicon support across all browsers and devices, you can create these additional files:

1. **`/app/icon.png`** (Next.js 13+ automatic favicon)
   - Size: 512x512 pixels
   - Format: PNG
   - Transparent background recommended

2. **`/app/apple-icon.png`** (iOS home screen icon)
   - Size: 180x180 pixels
   - Format: PNG
   - Transparent background recommended

3. **`/public/favicon.ico`** (Legacy browser support)
   - Sizes: 16x16, 32x32, 48x48 pixels
   - Format: ICO (multi-size)

## Current Implementation

- ✅ Logo is used in the header navigation
- ✅ Logo is configured as favicon in `app/layout.tsx`
- ✅ Logo uses Next.js Image component for optimization
- ✅ Logo has proper sizing and responsive behavior

## Next Steps

1. Replace `/public/images/logo.jpg` with a high-resolution version (1024x1024px minimum)
2. (Optional) Create the additional favicon files listed above for better cross-browser support
3. Test the logo display at different sizes to ensure clarity

## Notes

- The logo should be a clear, high-resolution image to avoid pixelation
- The current code will automatically optimize the image using Next.js Image component
- For best results, use a vector-based source (SVG, AI, etc.) exported at high resolution

