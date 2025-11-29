import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-50/95 backdrop-blur-xl p-8 md:p-12 rounded-sm border border-stone-100 shadow-xl text-left relative overflow-hidden"
          >
            {/* Background Texture (Kare-sansui style ripples) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.735-5.197-1.575-8.244-2.629-6.234-2.16-11.967-4.174-18.232-4.785-5.91-.576-11.23.477-16.535 1.829-4.788 1.219-9.664 2.481-15.32 2.481-5.69 0-10.39-1.39-15.01-2.906C4.698 12.378.573 11 0 11v-2c2.81 0 5.483.567 8.167 1.416 5.257 1.663 10.378 3.584 16.833 3.584 5.38 0 10.13-1.072 14.832-2.274 6.13-1.564 12.87-2.915 20.217-2.193 7.07.695 13.568 2.894 19.95 5.103 2.656.919 5.08 1.69 7.23 2.155l3.243-1.22c-.672-.258-1.38-.521-2.12-.797-6.234-2.323-11.66-3.79-16.657-3.79-6.91 0-13.793 2.062-21.246 4.64C39.462 18.96 33.568 20 28.663 20h-7.48zM0 8c3.27 0 7.425.86 12.636 2.51 5.378 1.701 10.198 3.49 15.73 3.49 4.988 0 9.538-.973 14.075-2.13C48.91 10.175 56.402 8.718 64.833 9.48c7.875.71 15.093 3.125 22.19 5.582 4.14 1.433 7.82 2.221 10.977 2.45V16c-2.355-.226-5.127-.852-8.35-1.967-6.524-2.257-13.16-4.47-20.29-5.113-7.584-.686-14.53 1.055-20.354 2.538-4.99 1.272-10.428 2.542-16.638 2.542-6.108 0-11.458-1.898-17.37-3.768C9.577 9.555 4.962 8 0 8z' fill='%23d4af37' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
            />

            {/* Decorative Gold Line */}
            <div className="absolute left-0 top-12 h-20 w-1 bg-gold-400 rounded-r-full hidden md:block"></div>

            <h2 className="text-xs font-bold tracking-[0.2em] text-gold-600 uppercase mb-6 pl-2 relative z-10">Our Mission</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight relative z-10">
              About GreenGold
            </h3>

            <div className="prose prose-lg text-stone-600 space-y-6 relative z-10">
              <p className="leading-loose font-light text-lg">
                The most reliable way to ensure fair and transparent sourcing is to purchase directly from the producers themselves. We can directly reach more than 250 tea farmers and producers across Japan, enabling you to source the right products for your brand without intermediaries.
              </p>
              <p className="leading-loose font-light">
                There's no need to travel to Japan for procurement, and no need to spend time visiting trade shows to find suppliers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;