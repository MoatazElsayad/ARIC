# عيافة الأعرابي - Arabic Literature Website

## 📖 About the Project

A beautiful, responsive one-page website for a Classical Arabic Literature course project. The site showcases a modern artistic retelling of "The Bedouin's Insight" (عيافة الأعرابي) from Al-Tanoukhi's "Nishwar Al-Muhadara" as a sung storytelling video.

**Features:**
- ✨ Elegant Arabic-themed design inspired by Abbasid manuscripts
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 RTL layout with Arabic typography (Amiri, Cairo, Noto Naskh Arabic)
- 🎬 Video player integration
- 🖼️ Image gallery with captions
- ⚡ Smooth scrolling and scroll animations
- 🎭 Decorative Islamic patterns and geometric designs
- 🌓 Warm color palette (gold, beige, brown, navy)

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will open automatically at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled files will be in the `dist/` folder.

---

## 📁 Project Structure

```
├── ArabicLitWebsite.jsx      # Main React component (all sections included)
├── App.jsx                    # Entry point component
├── globals.css                # Global styles, fonts, custom animations
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite build configuration
├── index.html                 # HTML template
├── package.json               # Dependencies
└── assets/                    # Media files (create manually)
    ├── video/
    │   └── story-video.mp4    # Your video file
    └── images/
        ├── scene1.jpg         # Gallery images
        ├── scene2.jpg
        ├── scene3.jpg
        └── scene4.jpg
```

---

## 🎬 How to Add Your Video

1. Create a folder structure:
   ```bash
   mkdir -p public/assets/video
   mkdir -p public/assets/images
   ```

2. Place your video file at: `public/assets/video/story-video.mp4`

3. In `ArabicLitWebsite.jsx`, locate the video section and verify the path:
   ```jsx
   <source src="assets/video/story-video.mp4" type="video/mp4" />
   ```

**Note:** The video path is already set in the component with a helpful comment. Just replace the file at that location.

---

## 🖼️ How to Add Gallery Images

1. Place your images in: `public/assets/images/`

2. Name them as:
   - `scene1.jpg` - "الأعرابي في الصحراء" (The Bedouin in the Desert)
   - `scene2.jpg` - "قلق الوزير" (The Minister's Anxiety)
   - `scene3.jpg` - "الإشارة الأولى" (The First Sign)
   - `scene4.jpg` - "لحظة المكافأة" (The Moment of Reward)

3. The component will automatically display them. If images don't load, a fallback color and text will show.

---

## 🎨 Sections Overview

### 1. **Hero Section**
- Main title: عيافة الأعرابي
- Subtitle and intro text
- Call-to-action button that scrolls to video
- Decorative corners

### 2. **Video Section**
- Embedded video player with controls
- Note about the AI-generated visuals

### 3. **Story Overview**
- Story description
- 3 theme cards (الفراسة, الحكمة, الطرافة)

### 4. **Biography Section**
- Al-Tanoukhi's biography
- Author info card with initials
- EDIT: You can add more biographical details here

### 5. **Visual Gallery**
- 4-image grid with captions
- Hover animations
- Mobile-responsive layout

### 6. **Reflection Section**
- Project goals and vision
- Academic and artistic context

### 7. **Footer**
- Course information
- Creator name
- University name

---

## 🎯 Customization Guide

### Edit Arabic Text
All Arabic text is easily editable in `ArabicLitWebsite.jsx`. Search for the text you want to change:

Example: To edit the author biography, find this section:
```jsx
<p className="text-slate-700 font-['Cairo'] text-lg leading-relaxed text-justify mb-6">
  أبو علي المحسن بن علي التنوخي كاتب وقاضٍ وأديب من أعلام القرن الرابع الهجري...
</p>
```

### Change Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'manuscript-beige': '#F5E6D3',      // Change to your color
  'manuscript-gold': '#D4A574',       // Change to your color
  'manuscript-brown': '#6B4423',
  'manuscript-navy': '#1a2942',
  'manuscript-parchment': '#FAF6F0',
}
```

Then update the component to use these colors in `className`.

### Change Fonts
The fonts are loaded in `globals.css`. Currently using:
- **Amiri** - for titles (Arabic serif)
- **Cairo** - for body text (Arabic sans-serif)
- **Noto Naskh Arabic** - alternative option

To change, edit `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

Then update `tailwind.config.js` to reference the new font.

### Adjust Animations
Scroll animations are controlled by the Intersection Observer in `ArabicLitWebsite.jsx`. To disable them:

```jsx
// Comment out or remove useEffect block starting at line 7
```

---

## 📱 Responsive Breakpoints

The design is optimized for:
- **Mobile:** 320px and up
- **Tablet:** 768px (md) and up
- **Desktop:** 1024px (lg) and up

Tailwind breakpoints used: `md`, `lg`

---

## 🔤 Typography

- **Titles:** `font-['Amiri']` - Elegant serif font
- **Body Text:** `font-['Cairo']` - Clean, readable sans-serif
- **RTL Support:** All text uses `dir="rtl"` for proper Arabic alignment

---

## 🎭 Design Features

### Color Palette
- **Primary Gold:** #D4A574 (accent, borders)
- **Warm Beige:** #F5E6D3 (backgrounds)
- **Dark Brown:** #6B4423 (text, borders)
- **Navy:** #1a2942 (footer, dark sections)
- **Parchment:** #FAF6F0 (light background)

### Visual Elements
- Geometric Islamic patterns (subtle background)
- Soft shadows on cards
- Decorative borders (top, right, bottom, left)
- Elegant corner decorations in hero section
- Hover animations on interactive elements

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages
```bash
npm run build
# Then push the dist folder to gh-pages branch
```

---

## 🔧 Troubleshooting

### Videos/Images Not Loading
1. Check the file paths in `public/assets/`
2. Verify the `<source>` tag has the correct path
3. Check browser console for 404 errors
4. Ensure files are in the correct format (mp4 for video, jpg/png for images)

### RTL Not Working
- Ensure `dir="rtl"` is in the root div
- Some components automatically inherit RTL direction
- If needed, add `dir="rtl"` to specific elements

### Fonts Not Loading
- Check Google Fonts import in `globals.css`
- Verify font names match Tailwind config
- Check browser console for font loading errors
- Clear browser cache and reload

---

## 📝 License & Credits

- **Project:** عيافة الأعرابي (The Bedouin's Insight)
- **Original Author:** Al-Tanoukhi (التنوخي)
- **Source:** Nishwar Al-Muhadara (نشوار المحاضرة)
- **Modern Adaptation & Video:** Moataz Badawy
- **Institution:** The American University in Cairo

---

## 📧 Support & Editing

For any questions or edits:
1. Refer to the `EDIT THIS SECTION` comments in `ArabicLitWebsite.jsx`
2. Check the Customization Guide above
3. All components are clearly labeled with section markers

---

## ✨ Future Enhancements (Optional)

- [ ] Add a lightbox/modal for full-screen gallery images
- [ ] Add background music or audio narration
- [ ] Add a comments or feedback section
- [ ] Implement email subscription
- [ ] Add a blog section for more stories
- [ ] Multi-language support (English version)
- [ ] Dark mode toggle

---

**Created with ❤️ for Arabic Literature**
# ARIC
