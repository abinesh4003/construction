"use client";

import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Link } from "lucide-react";
import { useDialog } from "./DialogProvider";
import NextLink from "next/link";

const luxuryBackgrounds = [
  // Your high-end project image
  "/construction-hero-2.jpg",
// Luxury interior detail
];

export default function LuxuryHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);
  const { openDialog } = useDialog();
  
  // Parallax effect setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === luxuryBackgrounds.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background Image Carousel with Parallax */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 -z-10"
      >
        <AnimatePresence mode="wait">
          {luxuryBackgrounds.map((src, index) => (
            index === currentImageIndex && (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { duration: 1.5, ease: [0.6, 0.01, 0.05, 0.9] }
                }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <Image
                  src={src}
                  alt="Luxury construction"
                  fill
                  priority
                  className="object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-px bg-[#F05A29]" />
            <span className="text-[#F05A29] tracking-widest ">VARGHESE CONSTRUCTION</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-white">
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Building Your Dreams
            </motion.span>
            <motion.span 
              className="font-serif italic font-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Into Reality
            </motion.span>
          </h1>

          <motion.p
            className="text-xl text-gray-200 mb-12 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            From residential to commercial projects, we deliver top-notch construction services with precision, quality, and trust.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <button className="bg-[#F05A29] hover:bg-[#e04a20] px-8 py-4 rounded-sm text-lg font-medium transition-all group flex items-center gap-2"
            onClick={openDialog}>
              Get a Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <NextLink href="#projects">
              <button className="bg-transparent border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-sm text-lg font-medium transition-all group flex items-center gap-2">
                View Projects 
              </button>
            </NextLink>
          
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll</span>
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </motion.div>

    </section>
  );
}