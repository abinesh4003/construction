"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useDialog } from "./DialogProvider";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function LuxuryNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const { openDialog } = useDialog();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Service", href: "#service" },
    { name: "Packages", href: "#package" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Partners", href: "#partners" },
    
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-2xl font-serif italic font-medium tracking-tight">
                VARGHESE
              </span>
              <span className="block text-xs tracking-widest text-[#F05A29]">
                CONSTRUCTION
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-light tracking-wider text-gray-700 hover:text-[#F05A29] transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-[#F05A29] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                href="#contact"
                className="flex items-center gap-2 bg-[#F05A29] text-white px-6 py-3 text-sm font-light tracking-wider hover:bg-[#e04a20] transition-colors rounded-none"
                onClick={openDialog}
             >
                <Phone className="h-4 w-4" />
                CONTACT US
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-[#F05A29] transition-colors py-2 border-b border-gray-100"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[#F05A29] text-white px-6 py-3 text-sm font-light tracking-wider hover:bg-[#e04a20] transition-colors mt-4 rounded-none"
                onClick={openDialog}
              >
                <Phone className="h-4 w-4" />
                CONTACT US
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}