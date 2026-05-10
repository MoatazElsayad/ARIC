# 🎬 عيافة الأعرابي - Quick Setup Guide

## 5-Minute Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Prepare Your Media Files
```bash
# Create directories (if not exist)
mkdir -p public/assets/video
mkdir -p public/assets/images

# Copy your video:
# Place your video at: public/assets/video/story-video.mp4

# Copy your images:
# Place images at:
# - public/assets/images/scene1.jpg
# - public/assets/images/scene2.jpg
# - public/assets/images/scene3.jpg
# - public/assets/images/scene4.jpg
```

### Step 3: Run Development Server
```bash
npm run dev
```

Your website will open at `http://localhost:3000`

---

## 📋 Key Files to Edit

### 1. Hero Section
**File:** `ArabicLitWebsite.jsx` (Lines ~70-120)
```jsx
<h1 className="...">عيافة الأعرابي</h1>  // Main title
<p>إعادة سرد فنية...</p>                  // Subtitle
```

### 2. Video
**File:** `ArabicLitWebsite.jsx` (Lines ~150-165)
```jsx
<source src="assets/video/story-video.mp4" type="video/mp4" />
// ↑ Replace with your video path
```

### 3. Story Section
**File:** `ArabicLitWebsite.jsx` (Lines ~220-245)
```jsx
<p className="text-slate-700 font-['Cairo']...">
  تدور القصة حول أعرابي...  // Edit story description
</p>
```

### 4. Biography
**File:** `ArabicLitWebsite.jsx` (Lines ~290-310)
```jsx
<p className="text-slate-700 font-['Cairo']...">
  أبو علي المحسن بن علي التنوخي...  // Edit biography
</p>
// Look for: "EDIT THIS SECTION" comment
```

### 5. Images
**File:** `ArabicLitWebsite.jsx` (Lines ~380-410)
```jsx
{ img: 'assets/images/scene1.jpg', caption: 'الأعرابي في الصحراء' },
// ↑ Replace image path and caption
```

### 6. Footer
**File:** `ArabicLitWebsite.jsx` (Lines ~520-545)
```jsx
<p className="font-['Cairo']">Moataz Badawy</p>  // Your name
<p className="font-['Cairo']">The American University in Cairo</p>  // Your university
```

---

## 🎨 Customization Shortcuts

### Change Primary Color (Gold)
In `ArabicLitWebsite.jsx`, search and replace:
- `from-amber-700` → `from-blue-700` (for example)
- `to-amber-600` → `to-blue-600`
- `border-amber-700` → `border-blue-700`

Or edit `tailwind.config.js` for global color changes.

### Change Font
In `globals.css`, update the @import:
```css
@import url('https://fonts.googleapis.com/css2?family=NewFont:wght@400;700&display=swap');
```

### Add More Gallery Images
In `ArabicLitWebsite.jsx`, find the gallery grid and add:
```jsx
{
  img: 'assets/images/scene5.jpg',
  caption: 'Your caption here',
}
```

### Disable Scroll Animations
In `ArabicLitWebsite.jsx`, comment out lines 7-27 (the useEffect hook).

---

## 📱 Testing Responsiveness

### Mobile View
```bash
# In Chrome DevTools: Ctrl+Shift+M (or Cmd+Shift+M on Mac)
```

Responsive sizes to test:
- iPhone 12: 390px
- iPad: 768px
- Desktop: 1024px+

---

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```
Output: `dist/` folder (ready to upload)

### Preview Build Locally
```bash
npm run preview
```

### Deploy Options:
- **Vercel:** `vercel deploy`
- **Netlify:** Connect GitHub repo
- **GitHub Pages:** Push `dist/` folder
- **Any Web Server:** Upload `dist/` folder

---

## 🔍 Common Edits

### Edit Header Navigation
**File:** `ArabicLitWebsite.jsx` (Lines ~35-50)

### Edit Section Titles
Search for `className="text-4xl md:text-5xl font-bold"` and edit the text.

### Edit Any Arabic Text
Use Find & Replace (Ctrl+H):
- Search: Old Arabic text
- Replace: New Arabic text

### Change Accent Color Globally
Edit `tailwind.config.js`:
```javascript
colors: {
  'manuscript-gold': '#YOUR_HEX_COLOR',  // e.g., #FF6B6B for red
}
```

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Videos/images not showing | Check `public/assets/` folder structure |
| Text not RTL | Ensure `dir="rtl"` is on root div (already set) |
| Fonts not loading | Clear browser cache (Ctrl+Shift+Delete) |
| Layout looks wrong | Open DevTools (F12) and check for errors |
| Slow performance | Check image file sizes (compress if needed) |

---

## 📞 Need Help?

1. Check the comments in `ArabicLitWebsite.jsx` (marked with `// IMPORTANT` or `// EDIT`)
2. Read the main `README.md` for detailed documentation
3. Check the error console in browser (F12 → Console tab)

---

## ✅ Deployment Checklist

- [ ] Video file placed at `public/assets/video/story-video.mp4`
- [ ] All images placed in `public/assets/images/`
- [ ] All Arabic text edited
- [ ] Footer information updated
- [ ] Colors customized (if needed)
- [ ] Tested on mobile device
- [ ] Run `npm run build` successfully
- [ ] Deployed to hosting service

---

**Good luck! Your website is ready! 🎉**
