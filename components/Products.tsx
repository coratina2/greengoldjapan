import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ProductCategory {
  title: string;
  regions: string[];
  description?: string;
  image: string;
}

const products: ProductCategory[] = [
  {
    title: "Matcha Powder",
    regions: ["Kagoshima", "Fukuoka", "Kyoto", "Mie", "Aichi", "Shizuoka"],
    description: "Premium ceremonial and culinary grades for authentic lattes. Several grades are available.",
    image: "/matcha.png"
  },
  {
    title: "Hojicha Powder",
    regions: ["Kyoto", "Mie", "Aichi", "Shizuoka"],
    description: "Roasted green tea powder with a nutty, caramel-like flavor. Several grades are available.",
    image: "/hojicha-powder.png"
  },
  {
    title: "Matcha Paste",
    regions: ["Kagoshima", "Kyoto"],
    description: "Highly concentrated paste ideal for bakery fillings and sauces.",
    image: "/matcha-paste.png"
  },
  {
    title: "Sencha",
    regions: ["Kagoshima", "Fukuoka", "Kyoto", "Mie", "Aichi"],
    description: "The classic steamed green tea of Japan. Refreshing and grassy.",
    image: "/sencha.png"
  },
  {
    title: "Flavored Sencha",
    regions: ["Kagoshima", "Fukuoka", "Kyoto"],
    description: "Traditional tea blended with yuzu, sakura, or other botanicals.",
    image: "/flavored-sencha.png"
  },
  {
    title: "Genmaicha",
    regions: ["Fukuoka", "Kyoto", "Mie", "Aichi"],
    description: "Green tea mixed with roasted popped brown rice.",
    image: "/genmaicha.png"
  }
];

const Products: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      nextSlide();
    } else if (info.offset.x > 50) {
      prevSlide();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-4">Sourced for Cafés</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Our Products</h3>
            <p className="text-xl text-stone-600 font-light max-w-lg">
              Authentic Japanese tea, sourced across multiple regions and tailored to café menus.
            </p>
          </div>

          {/* Navigation Controls (Desktop) */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-4 rounded-full border border-stone-200 transition-all ${currentIndex === 0
                ? 'text-stone-300 cursor-not-allowed'
                : 'text-stone-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 shadow-sm hover:shadow-md'
                }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`p-4 rounded-full border border-stone-200 transition-all ${currentIndex === maxIndex
                ? 'text-stone-300 cursor-not-allowed'
                : 'text-stone-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 shadow-sm hover:shadow-md'
                }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="relative mb-12">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }} // We handle movement via state, drag is just for gesture detection
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 px-4 cursor-grab active:cursor-grabbing`}
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="group h-full flex flex-col">
                  <div className="overflow-hidden rounded-xl mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 bg-stone-200">
                    <div className="aspect-[4/3] w-full relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        draggable="false"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gold-900/0 group-hover:bg-gold-900/5 transition-colors duration-500" />
                    </div>
                  </div>

                  <div className="space-y-3 flex-grow">
                    <h4 className="font-serif text-2xl font-bold text-stone-800 group-hover:text-gold-600 transition-colors">
                      {product.title}
                    </h4>

                    {product.description && (
                      <p className="text-stone-500 text-sm italic border-l-2 border-gold-200 pl-3 leading-relaxed">
                        {product.description}
                      </p>
                    )}

                    <div className="pt-3 mt-auto">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 block">Regions</span>
                      <div className="flex flex-wrap gap-2">
                        {product.regions.map((region, rIndex) => (
                          <span
                            key={rIndex}
                            className="text-[11px] px-2 py-1 bg-stone-50 text-stone-600 rounded-sm border border-stone-200 hover:border-gold-300 transition-colors"
                          >
                            {region}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Navigation Controls (Bottom) */}
          <div className="flex md:hidden justify-between mt-8 px-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border border-stone-200 transition-all ${currentIndex === 0 ? 'opacity-30' : 'active:bg-stone-100'
                }`}
            >
              <ChevronLeft className="w-5 h-5 text-stone-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-gold-500 w-4' : 'bg-stone-300'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`p-3 rounded-full border border-stone-200 transition-all ${currentIndex === maxIndex ? 'opacity-30' : 'active:bg-stone-100'
                }`}
            >
              <ChevronRight className="w-5 h-5 text-stone-600" />
            </button>
          </div>
        </div>

        {/* CTA Button at Bottom */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
          <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Looking for specific cultivars?</span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-stone-50 border border-stone-200 rounded-full text-stone-700 font-serif text-lg hover:bg-white hover:border-gold-400 hover:text-gold-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Inquire for More
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Products;