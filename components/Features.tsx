import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Users, Scale, Globe, TrendingUp, LucideIcon } from 'lucide-react';

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

const features: FeatureItem[] = [
  {
    icon: Users,
    title: "Access 250+ Producers",
    text: "Instantly connect with a nationwide network of export-ready tea producers — from small family farms to established manufacturers."
  },
  {
    icon: Scale,
    title: "Transparent Pricing",
    text: "Eliminate unnecessary middlemen and gain clear visibility on pricing, quality grades, and supply conditions."
  },
  {
    icon: Globe,
    title: "Easy Sourcing",
    text: "No need to visit Japan or manage complex back-and-forth in Japanese — we coordinate sourcing, samples, and communication for you."
  },
  {
    icon: TrendingUp,
    title: "Consistent Supply",
    text: "Secure predictable volumes with annual agreements and demand-based planning that match your café’s growth."
  }
];

// 3D Tilt Card Component
const TiltCard: React.FC<{ feature: FeatureItem; index: number }> = ({ feature, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (isMobile) return; // Disable on mobile
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, (value) => `${value / -20}deg`);
  const rotateY = useTransform(mouseX, (value) => `${value / 20}deg`);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={isMobile ? {} : {
        transformStyle: "preserve-3d",
        rotateX,
        rotateY
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative h-full bg-white p-8 lg:p-10 rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 border border-stone-100 group"
    >
      <div style={{ transform: "translateZ(30px)" }} className="transition-transform duration-300 ease-out">
        {/* Gold accent on hover */}
        <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500">
          <feature.icon className="w-6 h-6 text-tea-700 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
        </div>
        <h4 className="font-serif text-xl font-bold text-stone-900 mb-4 group-hover:text-tea-900 transition-colors">{feature.title}</h4>
        <p className="text-stone-500 leading-loose text-sm font-light group-hover:text-stone-600">
          {feature.text}
        </p>
      </div>

      {/* Subtle Gold Gradient Shine - Disabled on mobile */}
      {!isMobile && (
        <motion.div
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(212, 175, 55, 0.08), transparent 80%)`,
          }}
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      )}
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden md:perspective-[1000px]">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase mb-4"
            >
              Why GreenGold
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-none"
            >
              Features
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-500 font-light max-w-md"
          >
            High-quality Japanese tea, sourced directly from farmers and producers and tailored for modern café brands.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <TiltCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;