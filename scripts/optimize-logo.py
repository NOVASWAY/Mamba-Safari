#!/usr/bin/env python3
"""
Script to optimize and resize logo for favicon and icon usage
"""
try:
    from PIL import Image
    import sys
    import os

    # Paths
    logo_path = 'public/images/logo.jpg'
    output_dir = 'public'
    app_dir = 'app'

    if not os.path.exists(logo_path):
        print(f"Error: {logo_path} not found")
        sys.exit(1)

    # Open the logo
    logo = Image.open(logo_path)
    
    # Convert to RGB if needed
    if logo.mode != 'RGB':
        logo = logo.convert('RGB')
    
    # Create square version (crop to center if needed)
    size = min(logo.width, logo.height)
    left = (logo.width - size) // 2
    top = (logo.height - size) // 2
    logo_square = logo.crop((left, top, left + size, top + size))
    
    # Generate different sizes with high quality
    sizes = {
        'favicon.ico': [(16, 16), (32, 32), (48, 48)],
        'icon.png': 32,
        'apple-icon.png': 180,
    }
    
    # Create favicon.ico with multiple sizes
    ico_sizes = []
    for size_tuple in sizes['favicon.ico']:
        # Use LANCZOS for best quality
        resized = logo_square.resize(size_tuple, Image.Resampling.LANCZOS)
        ico_sizes.append(resized)
    
    ico_path = os.path.join(output_dir, 'favicon.ico')
    # Save ICO with all sizes
    try:
        ico_sizes[0].save(
            ico_path, 
            format='ICO',
            sizes=[(s.width, s.height) for s in ico_sizes]
        )
    except:
        # Fallback: save as single size
        ico_sizes[0].save(ico_path, format='ICO')
    print(f"✓ Created {ico_path}")
    
    # Create icon.png (32x32) with high quality
    icon_32 = logo_square.resize((sizes['icon.png'], sizes['icon.png']), Image.Resampling.LANCZOS)
    icon_path = os.path.join(output_dir, 'icon.png')
    icon_32.save(icon_path, format='PNG', optimize=True)
    print(f"✓ Created {icon_path}")
    
    # Also save to app directory for Next.js
    app_icon_path = os.path.join(app_dir, 'icon.png')
    icon_32.save(app_icon_path, format='PNG', optimize=True)
    print(f"✓ Created {app_icon_path}")
    
    # Create apple-icon.png (180x180) with high quality
    apple_icon = logo_square.resize((sizes['apple-icon.png'], sizes['apple-icon.png']), Image.Resampling.LANCZOS)
    apple_path = os.path.join(output_dir, 'apple-icon.png')
    apple_icon.save(apple_path, format='PNG', optimize=True)
    print(f"✓ Created {apple_path}")
    
    # Also save to app directory
    app_apple_path = os.path.join(app_dir, 'apple-icon.png')
    apple_icon.save(app_apple_path, format='PNG', optimize=True)
    print(f"✓ Created {app_apple_path}")
    
    print(f"\n✓ Logo optimization complete!")
    print(f"  Original: {logo.size[0]}x{logo.size[1]}")
    print(f"  Square crop: {logo_square.size[0]}x{logo_square.size[0]}")
    
except ImportError:
    print("PIL/Pillow not available. Install with: pip install Pillow")
    print("For now, using the logo.jpg directly.")
    sys.exit(1)
except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)
