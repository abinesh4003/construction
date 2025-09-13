"use client";

import { motion, useTransform, useScroll, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Phone, Menu, X } from "lucide-react";
import { useDialog } from "./DialogProvider";
import Link from "next/link";

// Luxury Navbar Component
export default function LuxuryNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { openDialog } = useDialog();

const SCROLL_THRESHOLD = 100; // Set this to the scrollY value where you want color to change

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#service" },
    { name: "Packages", href: "#package" },
    { name: "Our Clients", href: "#reviews" },
    { name: "Partners", href: "#partners" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex items-center z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-start justify-center"
            >
              <p className={`text-2xl font-serif font-bold tracking-wider ${
                isScrolled ? isOpen?"text-white":"text-black" : "text-white uppercase"
              }`}>
                Varghese
              </p>
              <span className={`text-xs font-sans font-medium uppercase tracking-[0.35em] ${
                isScrolled ? "text-[#F05A29]" : "text-white"
              } mt-0.5`}>
                CONSTRUCTION
              </span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium tracking-wide ${
                    isScrolled 
                      ? "text-gray-700 hover:text-[#F05A29]" 
                      : "text-white hover:text-[#F05A29]"
                  } transition-colors duration-300 relative group`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F05A29] to-orange-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={openDialog}
                className="flex items-center gap-2 bg-gradient-to-r from-[#F05A29] to-orange-400 text-white px-6 py-3 text-sm font-medium tracking-wide hover:shadow-lg transition-all duration-300  group"
              >
                <Phone className="h-4 w-4" />
                CONTACT US
                <div className="w-0 group-hover:w-2 transition-all duration-300"></div>
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden focus:outline-none z-50 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="h-7 w-7 text-white" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg lg:hidden flex items-center justify-center z-40"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col items-center space-y-8 mt-20">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-medium text-white hover:text-[#F05A29] transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6"
                >
                  <button
                    onClick={() => {
                      openDialog();
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#F05A29] to-orange-400 text-white px-8 py-4 text-base font-medium tracking-wide rounded-full"
                  >
                    <Phone className="h-5 w-5" />
                    CONTACT US
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}