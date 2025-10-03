'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useDialog } from './DialogProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openDialog } = useDialog();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: 'service' },
    { name: 'Packages', href: 'package' },
    { name: 'Testimonials', href: 'reviews' },
    { name: 'Partners', href: 'partners' },
  ];

  // Dynamic logo/text color based on scroll
  const logoColor = scrolled ? '#F05A29' : 'white';
  const linkColor = scrolled
    ? 'text-gray-700 hover:text-[#F05A29]'
    : 'text-white hover:text-[#FFD580]';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center h-20">
        {/* Logo / Brand */}
        <Link
          href="/"
          className={`text-2xl md:text-3xl font-serif italic font-bold transition-colors duration-300`}
        >
          <Image
            src={scrolled ? '/logo.png' : '/logo1.png'}
            alt="Logo"
            width={100}
            height={100}
            className="h-14 w-48"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`${linkColor} transition-all font-medium`}
            >
              {item.name}
            </Link>
          ))}
          <button
                onClick={() => {
                  setIsOpen(false);
                  openDialog();
                }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-[#F5B041] to-[#FFD580] text-black font-semibold hover:scale-105 transition"
              >
                Contact Us
              </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} color={scrolled ? '#F05A29' : 'white'} />
            ) : (
              <Menu size={28} color={scrolled ? '#F05A29' : 'white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md w-full shadow-lg"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-[#F05A29] text-lg font-medium transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  openDialog();
                }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-[#F5B041] to-[#FFD580] text-black font-semibold hover:scale-105 transition"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
