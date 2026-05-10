@echo off
REM 🎬 عيافة الأعرابي - Project Setup Script (Windows)

echo.
echo 🎨 Setting up عيافة الأعرابي project...
echo.

REM Create public directories for assets
echo 📁 Creating asset directories...
if not exist "public\assets\video" mkdir public\assets\video
if not exist "public\assets\images" mkdir public\assets\images

echo ✅ Directories created:
echo    - public\assets\video\
echo    - public\assets\images\
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
    echo ✅ Dependencies installed
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 📋 Next steps:
echo 1. Copy your video to: public\assets\video\story-video.mp4
echo 2. Copy your images to: public\assets\images\
echo    - scene1.jpg (الأعرابي في الصحراء)
echo    - scene2.jpg (قلق الوزير)
echo    - scene3.jpg (الإشارة الأولى)
echo    - scene4.jpg (لحظة المكافأة)
echo.
echo 3. Run development server:
echo    npm run dev
echo.
echo 4. Edit content in ArabicLitWebsite.jsx
echo.
echo 📚 For more info, read SETUP_GUIDE.md or README.md
echo.
echo 🚀 Ready to go!
echo.

pause
