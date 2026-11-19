import os
import subprocess
from concurrent.futures import ThreadPoolExecutor

EDGE_BIN = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
LOGOS_DIR = os.path.expanduser(r'~\Downloads\LOGOS 2')
BACKUP_DIR = r'D:\INSTALADOS\CODEX\Portfolio\assets\images\logos'
os.makedirs(BACKUP_DIR, exist_ok=True)

svg_files = [f for f in os.listdir(LOGOS_DIR) if f.endswith('.svg')]
svg_files.sort()

print(f"Found {len(svg_files)} SVG files to convert to PNG.")

def convert_svg_to_png(svg_name):
    svg_path = os.path.join(LOGOS_DIR, svg_name)
    png_name = svg_name.replace('.svg', '.png')
    png_path = os.path.join(LOGOS_DIR, png_name)
    
    cmd = [
        EDGE_BIN,
        '--headless',
        '--disable-gpu',
        f'--screenshot={png_path}',
        '--window-size=800,600',
        f'file:///{svg_path}'
    ]
    
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0 and os.path.exists(png_path):
        # Also copy to backup dir
        backup_png = os.path.join(BACKUP_DIR, png_name)
        with open(png_path, 'rb') as f_src, open(backup_png, 'wb') as f_dst:
            f_dst.write(f_src.read())
        return f"OK: {png_name} ({os.path.getsize(png_path)} bytes)"
    else:
        return f"ERROR: {png_name} - {res.stderr}"

# Run with 6 parallel threads for fast rendering
with ThreadPoolExecutor(max_workers=6) as executor:
    results = list(executor.map(convert_svg_to_png, svg_files))

for r in results:
    if "ERROR" in r:
        print(r)

ok_count = sum(1 for r in results if "OK" in r)
print(f"\nSuccessfully converted {ok_count}/{len(svg_files)} logos to high-resolution PNG (800x600)!")
