import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xyzqawkk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        // Reset to idle after 4 seconds
        setTimeout(() => setFormStatus('idle'), 4000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('送信に失敗しました。もう一度お試しください。');
      setFormStatus('idle');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}
      />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Text Info */}
          <div className="lg:col-span-5 pt-8 lg:pt-10">
            <h2 className="text-xs font-bold tracking-[0.2em] text-gold-400 uppercase mb-6">Get Started</h2>
            <h3 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
              Start with <br /> <span className="text-gold-200 italic">Direct Connections</span>
            </h3>
            <p className="text-lg text-stone-400 font-light mb-10 max-w-md leading-relaxed">
              Tell us what you need, and we'll connect you with the right producers across Japan.
            </p>

            <div className="space-y-8 text-stone-400 text-sm">
              <div>
                <h4 className="text-white font-serif text-xl mb-1">HQ Office</h4>
                <p>Osaka, Japan</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-t-3xl rounded-bl-3xl p-8 md:p-12 shadow-2xl text-stone-800"
            >
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="space-y-2 relative">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-stone-400 transition-colors">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full py-3 bg-transparent border-b border-stone-200 focus:outline-none transition-all placeholder:text-stone-300 font-serif text-xl peer"
                        placeholder="John Doe"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-500 ease-out peer-focus:w-full" />
                    </div>
                  </div>
                  <div className="space-y-2 relative">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-stone-400 transition-colors">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full py-3 bg-transparent border-b border-stone-200 focus:outline-none transition-all placeholder:text-stone-300 font-serif text-xl peer"
                        placeholder="john@cafe.com"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-500 ease-out peer-focus:w-full" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-stone-400 transition-colors">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full py-3 bg-transparent border-b border-stone-200 focus:outline-none transition-all placeholder:text-stone-300 font-serif text-xl peer"
                      placeholder="+1 (555) 000-0000"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-500 ease-out peer-focus:w-full" />
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-stone-400 transition-colors">Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      className="w-full py-3 bg-transparent border-b border-stone-200 focus:outline-none transition-all placeholder:text-stone-300 font-serif text-xl resize-none peer"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-500 ease-out peer-focus:w-full" />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formStatus !== 'idle'}
                    className={`w-full py-5 font-bold tracking-widest uppercase text-xs rounded-sm transition-all shadow-lg flex justify-center items-center gap-2 ${formStatus === 'success'
                      ? 'bg-tea-500 text-white shadow-none'
                      : 'bg-gold-400 text-white hover:bg-gold-500 hover:shadow-xl transform active:scale-[0.99]'
                      }`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <Check className="w-5 h-5" />
                        Message Sent
                      </>
                    ) : (
                      'Send Request'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;