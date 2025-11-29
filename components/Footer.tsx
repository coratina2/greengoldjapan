import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-stone-100 py-9">
            <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">

                {/* Left: Navigation */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                    <a href="#hero" className="opacity-90 hover:opacity-100 transition-opacity">
                        <Logo className="h-[14.7rem] w-auto" />
                    </a>
                    <nav className="flex items-center gap-8 text-sm font-medium text-stone-500">
                        <a href="#hero" className="hover:text-gold-500 transition-colors relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#about" className="hover:text-gold-500 transition-colors relative group">
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#products" className="hover:text-gold-500 transition-colors relative group">
                            Products
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#contact" className="hover:text-gold-500 transition-colors relative group">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all group-hover:w-full"></span>
                        </a>
                    </nav>
                </div>

                {/* Right: Creative Tagline & Copyright */}
                <div className="flex flex-col md:items-end gap-6 text-center md:text-right">

                    {/* Creative Tagline Typography */}
                    <div className="relative group cursor-default">
                        <h5 className="font-serif text-2xl md:text-3xl text-stone-800 leading-none mb-2">
                            Direct <span className="italic text-gold-500 font-medium">Matcha</span> <span className="text-stone-300 font-light">&</span> Japanese Tea
                        </h5>
                        <div className="flex items-center justify-center md:justify-end gap-3">
                            <div className="h-px w-8 bg-gold-500/30"></div>
                            <p className="font-sans text-[10px] md:text-xs font-bold tracking-[0.35em] text-stone-400 uppercase">
                                Sourcing for Global Cafés
                            </p>
                        </div>
                    </div>

                    <p className="text-stone-300 text-[10px] uppercase tracking-wide font-medium leading-relaxed">
                        Copyright © {new Date().getFullYear()} GREEN GOLD JAPAN LLC.<br />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;