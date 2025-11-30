import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Logo from './components/Logo';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col overflow-hidden bg-stone-50 selection:bg-gold-400 selection:text-white relative">
      {/* Global Noise Overlay */}
      {/* Global Noise Overlay */}
      <div
        className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay hidden md:block"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Scroll Progress Bar - Changed to Gold */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold-500 origin-left z-[60] hidden md:block"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
          ? 'bg-transparent border-transparent py-0 md:py-2'
          : 'bg-transparent border-transparent py-0 md:py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-2 md:px-6 flex items-center justify-between transition-all duration-500 relative">
          <div className="flex items-center gap-2 z-50">
            {/* Logo Component - Dynamic Size with mobile optimization, fades out on scroll */}
            <a href="#hero" className="block md:relative absolute -top-3 -left-5 md:top-0 md:left-0">
              <Logo
                className={`transition-all duration-500 ease-in-out w-auto ${isScrolled
                  ? 'h-10 md:h-14 brightness-100 opacity-0 scale-90' // Scrolled: Small (mobile: 40px, desktop: 56px), invisible & scaled down
                  : 'h-[8.82rem] md:h-[12.6rem] brightness-0 invert drop-shadow-xl opacity-100 scale-100' // Top: mobile: 141px (30% smaller), desktop: 202px & White & visible
                  }`}
              />
            </a>
            {/* Spacer for mobile to maintain layout */}
            <div className="w-20 md:w-0"></div>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gold-500 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 border bg-gold-400 text-white border-gold-400 hover:bg-gold-500 hover:border-gold-500"
            >
              Get in Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-stone-500 transition-transform active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-stone-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-40 bg-stone-50 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-serif text-stone-800">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-gold-400 text-white border border-gold-400 rounded-full hover:bg-gold-500 transition-colors"
              >
                Get in Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;