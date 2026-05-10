#!/bin/bash

# 🎬 عيافة الأعرابي - Project Setup Script
# This script helps set up the project structure

echo "🎨 Setting up عيافة الأعرابي project..."
echo ""

# Create public directories for assets
echo "📁 Creating asset directories..."
mkdir -p public/assets/video
mkdir -p public/assets/images

echo "✅ Directories created:"
echo "   - public/assets/video/"
echo "   - public/assets/images/"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "📋 Next steps:"
echo "1. Copy your video to: public/assets/video/story-video.mp4"
echo "2. Copy your images to: public/assets/images/"
echo "   - scene1.jpg (الأعرابي في الصحراء)"
echo "   - scene2.jpg (قلق الوزير)"
echo "   - scene3.jpg (الإشارة الأولى)"
echo "   - scene4.jpg (لحظة المكافأة)"
echo ""
echo "3. Run development server:"
echo "   npm run dev"
echo ""
echo "4. Edit content in ArabicLitWebsite.jsx"
echo ""
echo "📚 For more info, read SETUP_GUIDE.md or README.md"
echo ""
echo "🚀 Ready to go!"
