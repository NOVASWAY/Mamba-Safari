#!/usr/bin/env python3
"""
Script to resize and optimize gallery images for perfect fit
"""
try:
    from PIL import Image
    import os
    import shutil

    gallery_dir = 'public/images/gallery'
    
    # Image mapping with proper names and optimal sizes
    image_config = [
        {
            'current': 'safari-vehicle-sunset.jpg',
            'new': '01-safari-vehicle-sunset.jpg',
            'max_size': (1200, 800),  # Landscape
            'description': 'Safari vehicle at sunset'
        },
        {
            'current': 'lioness-closeup.jpg',
            'new': '02-lioness-closeup.jpg',
            'max_size': (800, 1000),  # Portrait
            'description': 'Lioness in savanna grass'
        },
        {
            'current': 'elephants-kilimanjaro.jpg',
            'new': '03-elephants-kilimanjaro.jpg',
            'max_size': (800, 1200),  # Portrait
            'description': 'Elephants with Mount Kilimanjaro'
        },
        {
            'current': 'lions-on-road.jpg',
            'new': '04-lions-on-road.jpg',
            'max_size': (1200, 900),  # Landscape
            'description': 'Lions walking on dirt road'
        },
        {
            'current': 'three-lionesses.jpg',
            'new': '05-three-lionesses-walking.jpg',
            'max_size': (900, 1200),  # Portrait
            'description': 'Three lionesses walking in line'
        },
        {
            'current': 'antelopes-savanna.jpg',
            'new': '06-topi-antelopes-savanna.jpg',
            'max_size': (1200, 800),  # Landscape
            'description': 'Topi antelopes in golden savanna'
        },
        {
            'current': 'rhinoceros-grazing.jpg',
            'new': '07-rhinoceros-grazing.jpg',
            'max_size': (1200, 900),  # Landscape
            'description': 'Rhinoceros grazing with white bird'
        },
        {
            'current': 'hot-air-balloons.jpg',
            'new': '08-hot-air-balloons-sunrise.jpg',
            'max_size': (1200, 800),  # Landscape
            'description': 'Hot air balloons at sunrise'
        },
        {
            'current': 'safari-elephant-kilimanjaro.jpg',
            'new': '09-safari-elephant-kilimanjaro.jpg',
            'max_size': (1200, 900),  # Landscape
            'description': 'Safari vehicle with elephant and Kilimanjaro'
        },
        {
            'current': 'jackal-grassland.jpg',
            'new': '10-black-backed-jackal.jpg',
            'max_size': (800, 1000),  # Portrait
            'description': 'Black-backed jackal in grassland'
        },
    ]

    if not os.path.exists(gallery_dir):
        print(f"Error: {gallery_dir} not found")
        exit(1)

    print("Optimizing gallery images...\n")
    
    for config in image_config:
        current_path = os.path.join(gallery_dir, config['current'])
        new_path = os.path.join(gallery_dir, config['new'])
        
        if not os.path.exists(current_path):
            print(f"⚠ Skipping {config['current']} - file not found")
            continue
        
        try:
            # Open and process image
            img = Image.open(current_path)
            
            # Convert to RGB if needed
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Calculate optimal size maintaining aspect ratio
            original_ratio = img.width / img.height
            target_ratio = config['max_size'][0] / config['max_size'][1]
            
            if original_ratio > target_ratio:
                # Image is wider - fit to width
                new_width = config['max_size'][0]
                new_height = int(config['max_size'][0] / original_ratio)
            else:
                # Image is taller - fit to height
                new_height = config['max_size'][1]
                new_width = int(config['max_size'][1] * original_ratio)
            
            # Resize with high quality
            resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Save optimized image
            resized.save(
                new_path,
                'JPEG',
                quality=85,
                optimize=True
            )
            
            # Get file sizes
            old_size = os.path.getsize(current_path) / 1024
            new_size = os.path.getsize(new_path) / 1024
            
            print(f"✓ {config['new']}")
            print(f"  Original: {img.size[0]}x{img.size[1]} ({old_size:.1f}KB)")
            print(f"  Resized: {new_width}x{new_height} ({new_size:.1f}KB)")
            print(f"  {config['description']}\n")
            
            # Remove old file if different name
            if config['current'] != config['new']:
                os.remove(current_path)
                
        except Exception as e:
            print(f"✗ Error processing {config['current']}: {e}\n")
    
    print("✓ Gallery images optimized successfully!")

except ImportError:
    print("PIL/Pillow not available. Install with: pip install Pillow")
    exit(1)
except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
    exit(1)

