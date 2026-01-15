#!/usr/bin/env python3
"""Update TravelMate logo in all HTML files"""

import os
import glob

files_to_update = [
    'index.html',
    'student-housing.html',
    'short-term-stays.html',
    'budget-hotels.html'
]

old_logo = '<div class="logo">TravelMate</div>'
new_logo = '<div class="logo"><div class="logo-icon">✈️</div><span>TravelMate</span></div>'

for filename in files_to_update:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if old_logo in content:
            content = content.replace(old_logo, new_logo)
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Updated {filename}")
        else:
            print(f"~ {filename} already has new logo format")

print("\n✅ All navbar logos updated!")
