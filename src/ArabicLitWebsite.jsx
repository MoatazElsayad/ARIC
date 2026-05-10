import React, { useState, useEffect } from 'react';
import aricVideo from '../assets/ARIC.mp4';
import heroImage from '../assets/hero.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import { ChevronDown, X, ArrowUp } from 'lucide-react';

const ArabicLitWebsite = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [counters, setCounters] = useState({ hours: 0, scenes: 0, team: 0 });

  // Handle scroll for parallax and back-to-top
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (isVisible['stats']) {
      const animateCounter = (target, duration = 2000) => {
        const frames = 60;
        const increment = Math.ceil(target / frames);
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          setCounters((prev) => {
            if (target === 156) return { ...prev, hours: current };
            if (target === 45) return { ...prev, scenes: current };
            if (target === 12) return { ...prev, team: current };
            return prev;
          });
        }, duration / frames);
      };

      animateCounter(156);
      setTimeout(() => animateCounter(45), 200);
      setTimeout(() => animateCounter(12), 400);
    }
  }, [isVisible['stats']]);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const galleryImages = [
    { img: heroImage, caption: 'الأعرابي في الصحراء' },
    { img: img2, caption: 'قلق الوزير' },
    { img: img3, caption: 'الإشارة الأولى' },
    { img: img4, caption: 'لحظة المكافأة' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white" dir="rtl">
      {/* ============ HEADER ============ */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md shadow-2xl z-50 border-b border-yellow-600/30">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-yellow-500 font-['Amiri']">
            عيافة الأعرابي
          </div>
          <div className="flex gap-8 text-sm">
            <button
              onClick={() => scrollToSection('video')}
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              الفيديو
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              القصة
            </button>
            <button
              onClick={() => scrollToSection('author')}
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              التنوخي
            </button>
          </div>
        </nav>
      </header>

      {/* ============ BACK TO TOP BUTTON ============ */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-yellow-600 hover:bg-yellow-500 text-slate-900 p-3 rounded-full shadow-lg z-40 transition-all duration-300 transform hover:scale-110 animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* ============ IMAGE LIGHTBOX MODAL ============ */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-yellow-600 hover:bg-yellow-500 p-2 rounded-full text-slate-900 z-10 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.img}
              alt={selectedImage.caption}
              className="w-full rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.src =
                  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%23374151%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%22400%22 y=%22300%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EImage not found%3C/text%3E%3C/svg%3E';
              }}
            />
            <div className="mt-4 text-center">
              <p className="text-yellow-300 font-['Cairo'] text-lg font-semibold">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============ HERO SECTION ============ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden"
      >
        {/* Hero background image (provided) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.45) saturate(0.9)',
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        {/* Decorative faint pattern over the image */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.18'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        {/* Decorative patterns */}
        <div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-yellow-600/20 rounded-full opacity-30"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-32 left-10 w-24 h-24 border-2 border-yellow-600/20 opacity-20"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1
            className="text-7xl md:text-8xl font-bold text-yellow-400 font-['Amiri'] mb-4 drop-shadow-lg animate-fade-in-up"
            data-animate
          >
            عيافة الأعرابي
          </h1>

          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 mx-auto mb-8 rounded-full shadow-lg" />

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-yellow-300 font-['Cairo'] mb-6 font-light">
            إعادة سرد فنية لقصة من نشوار المحاضرة للتنوخي
          </p>

          {/* Intro Text */}
          <p className="text-lg md:text-xl text-gray-300 font-['Cairo'] mb-12 leading-relaxed max-w-2xl mx-auto">
            مشروع أدبي بصري يعيد تقديم قصة تراثية بأسلوب غنائي وسينمائي معاصر
          </p>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('video')}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-slate-900 px-10 py-4 rounded-full font-['Cairo'] font-semibold text-lg hover:shadow-2xl hover:from-yellow-500 hover:to-yellow-400 transition duration-300 transform hover:scale-105"
          >
            شاهد الفيديو
          </button>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center">
            <ChevronDown className="w-8 h-8 text-yellow-500 animate-bounce" />
          </div>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-yellow-500/50" />
        <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-yellow-500/50" />
      </section>

      {/* ============ DIVIDER ============ */}
      <div className="flex justify-center py-8">
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </div>

      {/* ============ VIDEO SECTION ============ */}
      <section
        id="video"
        data-animate
        className={`relative py-20 px-6 max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible['video'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 font-['Amiri'] text-center mb-4">
          الفيديو الغنائي
        </h2>
        <p className="text-center text-yellow-300 font-['Cairo'] mb-12 text-lg">
          تجربة بصرية وسمعية من إعادة تقديم قصة التنوخي
        </p>

        {/* Video Container with parallax */}
        <div
          className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border-8 border-yellow-600/30"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="relative w-full bg-slate-900 aspect-video flex items-center justify-center">
            <video
              width="100%"
              height="100%"
              controls
              className="w-full h-full"
              poster={heroImage}
            >
              <source src={aricVideo} type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </div>

        {/* Video Note */}
        <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border-r-4 border-yellow-600">
          <p className="text-gray-300 font-['Cairo'] text-center">
            تم بناء الفيديو من مشاهد بصرية مولّدة تعكس لحظات القصة الأساسية
          </p>
        </div>
      </section>

      {/* ============ DIVIDER ============ */}
      <div className="flex justify-center py-8">
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </div>

      {/* ============ STORY OVERVIEW SECTION ============ */}
      <section
        id="story"
        data-animate
        className={`relative py-20 px-6 max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible['story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 font-['Amiri'] text-center mb-12">
          عن القصة
        </h2>

        {/* Story Description */}
        <div className="mb-12 p-8 bg-slate-800/70 rounded-xl shadow-lg border-r-4 border-yellow-600">
          <p className="text-gray-200 font-['Cairo'] text-lg leading-relaxed text-justify">
            تدور القصة حول أعرابي يتميز بالفراسة وقوة الملاحظة، ويستطيع من خلال علامات بسيطة أن يستنتج ما يخفيه الموقف.
            تجمع القصة بين الطرافة والحكمة، وتبرز قيمة العقل والفطنة في التراث العربي. يقدم التنوخي هذه الحكاية بأسلوب ساحر
            يجمع بين التشويق والعمق الأدبي.
          </p>
        </div>

        {/* Story Themes Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'الفراسة', desc: 'القدرة على الاستنتاج من الإشارات البسيطة' },
            { title: 'الحكمة', desc: 'العمق الفكري والنضج العقلي' },
            { title: 'الطرافة', desc: 'السرور والمتعة الأدبية' },
          ].map((theme, idx) => (
            <div
              key={idx}
              className={`p-6 bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl shadow-lg border-t-4 border-yellow-600 hover:shadow-2xl hover:scale-105 transition duration-300 transform ${
                isVisible['story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-yellow-400 font-['Amiri'] mb-3 text-center">
                {theme.title}
              </h3>
              <p className="text-gray-300 font-['Cairo'] text-center text-sm">
                {theme.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ DIVIDER ============ */}
      <div className="flex justify-center py-8">
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </div>

      {/* ============ BIOGRAPHY SECTION ============ */}
      <section
        id="author"
        data-animate
        className={`relative py-20 px-6 max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible['author'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 font-['Amiri'] text-center mb-12">
          عن التنوخي
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="p-8 bg-slate-800/70 rounded-xl shadow-lg border-r-4 border-yellow-600">
            <p className="text-gray-200 font-['Cairo'] text-lg leading-relaxed text-justify mb-6">
              وُلد بالبصرة في شعبان سنة 365 هـ، ونشأ في ظل الدولة البويهية، وتقلد قضاء المدائن. وهو القاضي أبو علي المحسن بن علي التنوخي: كاتب وقاضٍ وأديب من أعلام عصر الخلافة في القرن الرابع الهجري.
              عُرف بتحفّظه وصدقه في القول، وروى كتاب <strong className="text-yellow-400">الأشربة</strong> لأحمد بن حنبل، وصنّف
              <strong className="text-yellow-400"> نشوار المحاضرة</strong> و<strong className="text-yellow-400"> الفرج بعد الشدة</strong> وغيرها من الكتب التي تجمع بين الأدب والحكمة.
            </p>
            <p className="text-gray-300 font-['Cairo'] text-base leading-relaxed text-justify">
              تميّزت شهادته وأعماله برقة الأسلوب وعمق الفكرة وطرافة الحكاية، فكان شاهدًا على أحداث عصره وترجمانًا لروح الحضارة الإسلامية. توفي في الثاني من محرم سنة 447 هـ،
              وتقدم هذه الصفحة لمحةً تُخلّد اسمه وتحفظ أثره بوصفه من أبرز المفكرين في عصره.
            </p>
          </div>

          {/* Author Info Card */}
          <div className="bg-gradient-to-b from-slate-800 to-slate-700 p-8 rounded-xl shadow-lg border-t-4 border-yellow-600">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-slate-900 font-['Amiri']">ت</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 font-['Amiri'] mb-2">
                المحسن بن علي التنوخي
              </h3>
              <p className="text-yellow-300 font-['Cairo'] mb-4">
                القرن الرابع الهجري
              </p>
              <div className="space-y-2 text-sm text-gray-300 font-['Cairo']">
                <p>✦ كاتب وقاضٍ وأديب</p>
                <p>✦ مؤلف نشوار المحاضرة</p>
                <p>✦ معاصر الخلافة الفاطمية والعباسية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DIVIDER ============ */}
      <div className="flex justify-center py-8">
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </div>

      {/* ============ VISUAL GALLERY SECTION ============ */}
      <section
        id="gallery"
        data-animate
        className={`relative py-20 px-6 max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible['gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 font-['Amiri'] text-center mb-12">
          مشاهد من العمل
        </h2>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((scene, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                isVisible['gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setSelectedImage(scene)}
            >
              {/* Gallery Image */}
              <div className="w-full aspect-video bg-gradient-to-br from-yellow-700 to-slate-800 flex items-center justify-center overflow-hidden relative">
                <img
                  src={scene.img}
                  alt={scene.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-sm font-['Cairo']">اضغط للتكبير</p>
                  </div>
                </div>
                {/* Fallback if image doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-['Cairo'] text-center px-4 bg-slate-900/70">
                  <span>صورة المشهد</span>
                </div>
              </div>

              {/* Caption */}
              <div className="bg-gradient-to-t from-slate-900 to-transparent p-4 absolute bottom-0 w-full">
                <p className="text-yellow-300 font-['Cairo'] font-semibold text-center">
                  {scene.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 font-['Cairo'] mt-8 text-sm">
          💡 اضغط على أي صورة لتكبيرها | جميع الصور مولّدة بتقنيات الذكاء الاصطناعي
        </p>
      </section>

      {/* ============ DIVIDER ============ */}
      <div className="flex justify-center py-8">
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </div>

      {/* ============ REFLECTION SECTION ============ */}
      <section
        id="reflection"
        data-animate
        className={`relative py-20 px-6 max-w-4xl mx-auto transition-all duration-1000 transform ${
          isVisible['reflection'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 font-['Amiri'] text-center mb-12">
          فكرة المشروع
        </h2>

        <div className="p-10 bg-gradient-to-b from-slate-800 to-slate-700 rounded-2xl shadow-xl border-t-4 border-yellow-600">
          <p className="text-gray-200 font-['Cairo'] text-lg leading-relaxed text-justify mb-6">
            يهدف هذا المشروع إلى تقريب الأدب العربي الكلاسيكي من المتلقي المعاصر من خلال الجمع بين النص التراثي، والغناء،
            والصورة، والتصميم الرقمي.
          </p>
          <p className="text-gray-300 font-['Cairo'] text-base leading-relaxed text-justify">
            في عصر يسوده الفن البصري والوسائط المتعددة، نسعى إلى إعادة اكتشاف كنوز تراثنا الأدبي بأشكال تحاور الجمهور الحديث،
            محافظين على جوهر النص وعمقه، بينما نسلطه بأضواء تقنية وفنية معاصرة.
          </p>
        </div>
      </section>

      {/* ============ DIVIDER ============ */}
      <div className="flex justify-center py-8">
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      </div>

      {/* ============ FOOTER ============ */}
      <footer className="bg-slate-950 text-white py-16 px-6 border-t border-yellow-600/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Project Info */}
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold font-['Amiri'] mb-3 text-yellow-400">مشروع مقرر</h3>
              <p className="font-['Cairo'] text-yellow-300">
                الأدب العربي الكلاسيكي
              </p>
            </div>

            {/* Creator */}
            <div className="text-center">
              <h3 className="text-lg font-bold font-['Cairo'] mb-3 text-yellow-400">إعداد</h3>
              <p className="font-['Cairo'] text-yellow-300">
                Moataz Badawy <br /> Ahmed Bayyoumi
              </p>
            </div>

            {/* University */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold font-['Cairo'] mb-3 text-yellow-400">الجامعة</h3>
              <p className="font-['Cairo'] text-yellow-300">
                The American University in Cairo
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div className="border-t border-yellow-600/30 pt-8">
            <p className="text-center font-['Cairo'] text-gray-500 text-sm">
              © 2024 جميع الحقوق محفوظة | مشروع أدبي بصري
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArabicLitWebsite;
