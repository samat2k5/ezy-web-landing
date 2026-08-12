import os
from PIL import Image, ImageDraw, ImageFont

base_dir = r"c:\Users\mathi\Desktop\AntiGravity Demos\ezyHR.sg - Landing Page R1\DOCUMENTATION\R4_1_VISUAL_REVIEW"

img_1440_path = os.path.join(base_dir, "ezyhr_r4_1_1440x900.png")
img_1280_path = os.path.join(base_dir, "ezyhr_r4_1_1280x800.png")
img_390_path = os.path.join(base_dir, "ezyhr_r4_1_390x844.png")
img_full_path = os.path.join(base_dir, "ezyhr_r4_1_full_page.png")

img_1440 = Image.open(img_1440_path)
img_1280 = Image.open(img_1280_path)
img_390 = Image.open(img_390_path)
img_full = Image.open(img_full_path)

# Normalize width for two-column grid layout
target_w = 1200
target_h_1440 = int(img_1440.height * (target_w / img_1440.width))
target_h_1280 = int(img_1280.height * (target_w / img_1280.width))

# Rescale images
i_1440 = img_1440.resize((target_w, target_h_1440), Image.Resampling.LANCZOS)
i_1280 = img_1280.resize((target_w, target_h_1280), Image.Resampling.LANCZOS)

# Scale mobile
m_w = 400
m_h = int(img_390.height * (m_w / img_390.width))
i_390 = img_390.resize((m_w, m_h), Image.Resampling.LANCZOS)

# Scale full page to 760 width
f_w = 760
f_h = int(img_full.height * (f_w / img_full.width))
i_full = img_full.resize((f_w, f_h), Image.Resampling.LANCZOS)

# Create contact sheet canvas
canvas_width = 2500
header_height = 80
margin = 40
bg_color = (15, 23, 42) # Slate-900

# Compute layout heights
row1_h = max(target_h_1440, target_h_1280) + header_height + 40
row2_h = max(m_h, f_h) + header_height + 40
total_height = margin + row1_h + row2_h + margin

sheet = Image.new("RGB", (canvas_width, total_height), bg_color)
draw = ImageDraw.Draw(sheet)

# Try font
try:
    font_title = ImageFont.truetype("arial.ttf", 26)
    font_banner = ImageFont.truetype("arialbd.ttf", 36)
except:
    font_title = ImageFont.load_default()
    font_banner = ImageFont.load_default()

# 1. Desktop 1440x900
x1 = margin
y1 = margin + header_height
draw.rectangle([x1, margin, x1 + target_w, margin + header_height - 10], fill=(30, 41, 59))
draw.text((x1 + 20, margin + 15), "DESKTOP 1440×900", fill=(52, 211, 153), font=font_title)
sheet.paste(i_1440, (x1, y1))

# 2. Laptop 1280x800
x2 = margin + target_w + margin
y2 = margin + header_height
draw.rectangle([x2, margin, x2 + target_w, margin + header_height - 10], fill=(30, 41, 59))
draw.text((x2 + 20, margin + 15), "LAPTOP 1280×800", fill=(56, 189, 248), font=font_title)
sheet.paste(i_1280, (x2, y2))

# Row 2 Y start
row2_y = margin + row1_h + margin

# 3. Mobile 390x844
x3 = margin
y3 = row2_y + header_height
draw.rectangle([x3, row2_y, x3 + m_w, row2_y + header_height - 10], fill=(30, 41, 59))
draw.text((x3 + 20, row2_y + 15), "MOBILE 390×844", fill=(251, 191, 36), font=font_title)
sheet.paste(i_390, (x3, y3))

# 4. Full Page Screenshot
x4 = margin + m_w + margin
y4 = row2_y + header_height
draw.rectangle([x4, row2_y, x4 + f_w, row2_y + header_height - 10], fill=(30, 41, 59))
draw.text((x4 + 20, row2_y + 15), "FULL PAGE SCREENSHOT", fill=(192, 132, 252), font=font_title)
sheet.paste(i_full, (x4, y4))

output_path = os.path.join(base_dir, "R4_1_VISUAL_CONTACT_SHEET.png")
sheet.save(output_path, "PNG")
print(f"Contact sheet saved to: {output_path}")
