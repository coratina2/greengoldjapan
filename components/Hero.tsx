import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative w-full h-[85svh] min-h-[600px] md:h-[100vh] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-tea-900">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/hero-bg-new.png"
            alt="Various Japanese Teas"
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="relative z-10 container max-w-6xl mx-auto px-6 text-center text-white pt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          {/* Gold Accent Tag */}
          <span className="py-1.5 px-5 border border-gold-400/50 rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase bg-black/20 backdrop-blur-md text-gold-400 shadow-lg ring-1 ring-gold-400/20">
            Direct Sourcing Platform
          </span>
        </motion.div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8 tracking-tight drop-shadow-lg">
          {["Platform", "To"].map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-3 md:mr-5"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <span className="italic text-tea-100 relative inline-block mr-3 md:mr-5">
            <motion.span
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              Source Directly
            </motion.span>
            {/* Gold Underline */}
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
              viewBox="0 0 300 12"
              className="absolute -bottom-1 md:-bottom-2 left-0 w-full text-gold-400 opacity-90"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M2 10C50 2 150 2 298 10" />
            </motion.svg>
          </span>
          <motion.span
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            From
          </motion.span>
          <br />
          {["Japan's", "Tea", "Producers"].map((word, i) => (
            <motion.span
              key={i}
              custom={i + 4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-3 md:mr-5"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-stone-200 leading-relaxed mb-12 font-light tracking-wide mix-blend-lighten drop-shadow-md"
        >
          Connect your café with authentic Japanese tea farmers and producers — in a simple, fair, and transparent way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-10 py-5 bg-tea-900 text-white rounded-full font-serif text-lg overflow-hidden shadow-2xl shadow-tea-900/50 transition-all hover:-translate-y-1 border border-gold-500/30"
          >
            <span className="relative z-10 flex items-center gap-3">
              Get in Contact
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gold-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-100/60 flex flex-col items-center gap-3 z-20 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span className="text-[10px] uppercase tracking-widest font-light text-gold-200">Scroll</span>
        <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative">
          <motion.div
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-gold-400"
          />
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;