# 🎨 Design System Reference

## Color Palette

### Primary Colors
| Color | Hex | Usage | Variable |
|-------|-----|-------|----------|
| Manuscript Gold | #D4A574 | Accents, borders, highlights | `manuscript-gold` |
| Warm Beige | #F5E6D3 | Section backgrounds, cards | `manuscript-beige` |
| Dark Brown | #6B4423 | Text, borders, titles | `manuscript-brown` |
| Navy | #1a2942 | Footer, dark sections | `manuscript-navy` |
| Parchment | #FAF6F0 | Light backgrounds | `manuscript-parchment` |

### Extended Palette (Tailwind)
- **Amber**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Slate**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Yellow**: 50, 100, 200, 300, 400, 500, 600, 700

### Color Usage in Components

**Hero Section:**
- Background: `from-amber-50 via-slate-50 to-amber-50` (gradient)
- Title: `text-amber-900`
- Accents: `border-amber-700`, `bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300`

**Cards:**
- Background: `bg-gradient-to-b from-amber-50 to-yellow-50`
- Border: `border-t-4 border-amber-700`
- Shadow: `shadow-md hover:shadow-lg`

**Buttons:**
- Background: `from-amber-700 to-amber-600`
- Hover: `hover:from-amber-800 hover:to-amber-700`
- Text: `text-white`

**Footer:**
- Background: `bg-slate-900`
- Text: `text-white`
- Accents: `text-amber-200`

---

## Typography System

### Fonts
All fonts imported from Google Fonts via `globals.css`

#### 1. **Amiri** (Serif)
```css
@import url('https://fonts.googleapis.com/css2?family=Amiri:ital@0;1&display=swap');
```
- **Use:** Titles, headings, aesthetic displays
- **Sizes:** 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl
- **Weight:** Regular (400), Italic (400i)
- **Example:** 
  - `<h1 className="text-7xl font-['Amiri']">عيافة الأعرابي</h1>`

#### 2. **Cairo** (Sans-serif)
```css
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap');
```
- **Use:** Body text, paragraphs, descriptions
- **Sizes:** sm, base, lg, xl, 2xl, 3xl
- **Weights:** 200, 300, 400, 500, 600, 700, 800, 900
- **Example:**
  - `<p className="text-lg font-['Cairo']">نص وصفي</p>`

#### 3. **Noto Naskh Arabic** (Alternative Serif)
```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
```
- **Use:** Alternative for classical aesthetic
- **Not currently used** but available in config

### Typography Hierarchy

| Level | Element | Tailwind | Font | Size | Weight | Color |
|-------|---------|----------|------|------|--------|-------|
| H1 | Main Title | `text-8xl` | Amiri | 96px | 700 | amber-900 |
| H2 | Section Title | `text-5xl` | Amiri | 48px | 700 | amber-900 |
| H3 | Subtitle | `text-3xl` | Cairo | 30px | 600 | amber-900 |
| Body | Paragraph | `text-lg` | Cairo | 18px | 400 | slate-700 |
| Caption | Image/Card | `text-sm` | Cairo | 14px | 400 | white/slate-700 |
| Accent | Strong | `font-bold` | Cairo | varies | 700 | amber-700 |

### Text Styling Examples

```jsx
// Main Title (Hero)
<h1 className="text-7xl md:text-8xl font-bold text-amber-900 font-['Amiri']">
  عيافة الأعرابي
</h1>

// Section Title
<h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-['Amiri']">
  عن القصة
</h2>

// Body Text
<p className="text-slate-700 font-['Cairo'] text-lg leading-relaxed">
  تدور القصة حول أعرابي...
</p>

// Accent Text
<strong className="text-amber-700 font-['Cairo']">نشوار المحاضرة</strong>

// Small Caption
<p className="text-white font-['Cairo'] font-semibold text-center">
  الأعرابي في الصحراء
</p>
```

---

## Spacing System

### Padding
- **Small sections:** `px-6` (24px)
- **Medium sections:** `px-8` (32px)
- **Large sections:** `px-10` (40px)

### Margins
- **Section gap:** `mb-12` (48px)
- **Subsection gap:** `mb-8` (32px)
- **Item gap:** `mb-4` (16px)

### Section Heights
- **Hero section:** `min-h-screen` (viewport height)
- **Regular sections:** `py-20` (80px top/bottom)
- **Compact sections:** `py-8` (32px top/bottom)

---

## Border & Shadow System

### Borders
```css
/* Decorative borders */
border-r-4 border-amber-700           /* Right border (for Arabic RTL) */
border-t-4 border-amber-700           /* Top border on cards */
border-t-2 border-r-2 border-amber-700  /* Decorative corners */
border-b-2 border-l-2 border-amber-700  /* Decorative corners */

/* Subtle borders */
border-8 border-amber-100             /* Thick light border (video) */
border-2 border-amber-700             /* Thin dark border */
```

### Shadows
```css
shadow-md       /* Subtle shadow on cards */
shadow-lg       /* Medium shadow on sections */
shadow-xl       /* Large shadow on important elements */
shadow-2xl      /* Extra large shadow on hover */
```

### Shadow Transitions
```css
hover:shadow-lg hover:scale-105 transition duration-300
/* Lift effect on hover */
```

---

## Component Styling Reference

### Card Component
```jsx
<div className="p-6 bg-gradient-to-b from-amber-50 to-yellow-50 rounded-xl shadow-md border-t-4 border-amber-700 hover:shadow-lg hover:scale-105 transition duration-300">
  {/* Content */}
</div>
```

### Button Component
```jsx
<button className="bg-gradient-to-r from-amber-700 to-amber-600 text-white px-10 py-4 rounded-full font-['Cairo'] font-semibold text-lg hover:shadow-lg hover:from-amber-800 hover:to-amber-700 transition duration-300 transform hover:scale-105">
  شاهد الفيديو
</button>
```

### Section Container
```jsx
<section className="relative py-20 px-6 max-w-6xl mx-auto">
  {/* Content */}
</section>
```

### Decorative Line
```jsx
<div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
```

---

## Responsive Breakpoints

### Tailwind Breakpoints Used
| Breakpoint | Size | Usage |
|------------|------|-------|
| sm | 640px | Not used (default mobile) |
| md | 768px | Tablets and larger |
| lg | 1024px | Desktop screens |

### Responsive Classes

```jsx
/* Stack on mobile, grid on tablet+ */
<div className="grid md:grid-cols-3 gap-6">

/* Text scaling */
<h1 className="text-6xl md:text-8xl">

/* Hide/show elements */
<div className="hidden md:block">

/* Padding adjustments */
<div className="px-4 md:px-8">

/* Width constraints */
<div className="max-w-4xl md:max-w-6xl">
```

---

## Animation System

### CSS Animations (from globals.css)

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Tailwind Animations
```css
animate-bounce    /* Scroll indicator */
animate-fade-in   /* Fade in */
animate-pulse     /* Subtle pulse */
```

### Transition Classes
```css
transition              /* Default transition */
transition-all          /* All properties */
duration-300            /* 300ms duration */
duration-1000           /* 1000ms duration */
transform               /* Enable transform */
hover:scale-105         /* Scale on hover */
```

### Scroll Animation Implementation

```jsx
// In component: Uses Intersection Observer
const [isVisible, setIsVisible] = useState({});

// Trigger on scroll into view
className={`transition-all duration-1000 transform ${
  isVisible['sectionId'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}`}
```

---

## RTL (Right-to-Left) Layout

### Root Container
```jsx
<div className="min-h-screen..." dir="rtl">
```

### Text Alignment
```css
dir="rtl"               /* Automatic RTL layout */
text-right             /* Right align text */
text-center            /* Center regardless */
text-justify           /* Justified text */
```

### Flex/Grid Alignment
```jsx
justify-between        /* Works with RTL automatically */
items-center          /* Works with RTL automatically */
```

### Borders (adjusted for RTL)
```jsx
border-r-4            /* Right border (left in LTR) */
border-l-4            /* Left border (right in LTR) */
```

---

## Islamic Pattern Background

### SVG Pattern
```jsx
backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60'...")`
opacity-5             /* Very subtle */
pointer-events-none   /* Not interactive */
```

---

## Custom CSS Classes (from globals.css)

### Utility Classes
```css
.animate-fade-in-up       /* Fade and slide up */
.animate-fade-in-down     /* Fade and slide down */
.animate-pulse-subtle     /* Subtle pulse effect */
.shadow-manuscript        /* Custom manuscript shadow */
.border-manuscript        /* Custom manuscript border color */
```

---

## Design Token Summary

### The Complete Palette
- **5 Core Colors:** Gold, Beige, Brown, Navy, Parchment
- **3 Arabic Fonts:** Amiri, Cairo, Noto Naskh Arabic
- **7 Shadow Levels:** md, lg, xl, 2xl
- **Responsive:** 3 breakpoints (mobile, tablet, desktop)
- **Animations:** 5+ entrance, hover, scroll animations

### Most Used Combinations
1. **Gold + Beige:** Cards, highlights
2. **Brown + Parchment:** Body text + light backgrounds
3. **Navy + Gold:** Footer + accents
4. **Amber gradient:** Buttons, decorative elements

---

**This design system maintains consistency across the entire website while providing enough flexibility for customization.** 🎨
