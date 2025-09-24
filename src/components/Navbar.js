"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Phone, Menu, X, Star } from "lucide-react";
import Link from "next/link";
import { useDialog } from "./DialogProvider";

export default function LuxuryNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  const { scrollY } = useScroll();
  const prevScrollY = useRef(0);
  const { openDialog } = useDialog();

  const SCROLL_THRESHOLD = 30;

  // Track scroll direction for hide/show
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollingDown = latest > prevScrollY.current;
    // Only hide if scrolling down and not at the very top, and mobile menu is closed
    setHidden(scrollingDown && latest > 80 && !isOpen);
    prevScrollY.current = latest;
  });

  // Track scroll for navbar style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service" },
    { name: "Packages", href: "/package" },
    { name: "Our Clients", href: "/reviews" },
    { name: "Partners", href: "/partners" },
  ];

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-3 border-b border-gray-200"
          : "bg-transparent py-4"
      }`}
    >
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 z-50 min-w-0"
            onClick={handleLinkClick}
          >
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg md:text-xl">V</span>
              </div>
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Star className="h-3 w-3 text-amber-400 fill-current" />
              </motion.div>
            </div>
            <div className="flex flex-col min-w-0">
              <p
                className={`font-bold text-xl md:text-2xl leading-tight whitespace-nowrap ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Varghese
              </p>
              <span
                className={`font-semibold text-xs md:text-sm uppercase tracking-widest whitespace-nowrap ${
                  isScrolled ? "text-amber-600" : "text-amber-300"
                }`}
              >
                CONSTRUCTION
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                onMouseEnter={() => setActiveHover(item.name)}
                onMouseLeave={() => setActiveHover(null)}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`relative font-medium uppercase text-sm transition-all duration-300 px-3 py-2 ${
                    isScrolled
                      ? "text-gray-700 hover:text-amber-600"
                      : "text-white hover:text-amber-300"
                  }`}
                >
                  <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                  <motion.div
                    className={`absolute bottom-0 left-3 right-3 h-0.5 ${
                      isScrolled ? "bg-amber-600" : "bg-amber-300"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: activeHover === item.name ? "calc(100% - 1.5rem)" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>
            ))}
            <motion.button
              onClick={openDialog}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 font-semibold uppercase rounded-lg shadow-lg hover:shadow-amber-500/25 transition-all text-sm whitespace-nowrap"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu & Contact */}
          <div className="flex lg:hidden items-center space-x-3">
            <motion.button
              onClick={openDialog}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-2.5 rounded-full shadow-lg"
              aria-label="Contact"
            >
              <Phone className="h-4 w-4" />
            </motion.button>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 rounded-full z-[60] transition-colors ${
                isScrolled ? "bg-amber-400" : "bg-amber-500"
              } backdrop-blur-sm`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="h-5 w-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="h-5 w-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-80 max-w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black z-[60] lg:hidden shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="px-6 py-4">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block text-white text-xl font-semibold py-4 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-4 border-transparent hover:border-amber-400"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-8 px-4"
                >
                  <button
                    onClick={() => {
                      openDialog();
                      handleLinkClick();
                    }}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 font-bold uppercase rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-lg"
                  >
                    Contact Us
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}