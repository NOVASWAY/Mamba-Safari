#!/usr/bin/env python3
"""
Script to optimize the 4 gallery images
"""
try:
    from PIL import Image
    import os

    gallery_dir = 'public/images/gallery'
    
    # The 4 images to optimize
    images_config = [
        {
            'file': '01-hot-air-balloons-safari.jpg',
            'max_size': (1200, 900),  # Landscape for balloons
        },
        {
            'file': '02-kilimanjaro-starry-night.jpg',
            'max_size': (800, 1200),  # Portrait for mountain
        },
        {
            'file': '03-lions-safari-vehicle.jpg',
            'max_size': (800, 1200),  # Portrait for lions
        },
        {
            'file': '04-rhinoceros-bridge.jpg',
            'max_size': (800, 1200),  # Portrait for rhino
        },
    ]
    
    print("Optimizing gallery images...\n")
    
    for config in images_config:
        img_path = os.path.join(gallery_dir, config['file'])
        if not os.path.exists(img_path):
            print(f"⚠ {config['file']} not found, skipping")
            continue
        
        img = Image.open(img_path)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Calculate optimal size maintaining aspect ratio
        original_ratio = img.width / img.height
        target_ratio = config['max_size'][0] / config['max_size'][1]
        
        if original_ratio > target_ratio:
            new_width = config['max_size'][0]
            new_height = int(config['max_size'][0] / original_ratio)
        else:
            new_height = config['max_size'][1]
            new_width = int(config['max_size'][1] * original_ratio)
        
        # Resize with high quality
        resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Save optimized
        resized.save(img_path, 'JPEG', quality=85, optimize=True)
        
        new_size = os.path.getsize(img_path) / 1024
        orientation = 'Portrait' if original_ratio < 0.9 else 'Landscape' if original_ratio > 1.1 else 'Square'
        print(f"✓ {config['file']}")
        print(f"  Resized: {new_width}x{new_height} ({orientation}, {new_size:.1f}KB)\n")
    
    print("✓ Optimization complete!")

except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()

