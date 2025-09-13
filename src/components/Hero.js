"use client";

import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useDialog } from "./DialogProvider";
import Link from "next/link";

// Luxury Hero Component
export default function LuxuryHero() {
  const containerRef = useRef(null);
  const { openDialog } = useDialog();

  // Parallax effect setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // Reduced for mobile

  // Floating elements animation
  const floatingVariants = {
    animate: {
      y: [0, -10, 0], // Reduced movement for mobile
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 -z-20"
      >
        <div className="absolute inset-0">
          {/* Desktop */}
          <Image
            src={"/hero/new2.jpg"}
            alt="Luxury construction"
            fill
            priority
            quality={100}
            className="hidden sm:block object-[center center] object-center"
          />
          {/* Mobile */}
          <Image
            src={"/hero/new.jpg"}
            alt="Luxury construction mobile"
            fill
            priority
            quality={100}
            className="block sm:hidden object-[center center] object-center"
          />
          {/* Gradient Overlay - Enhanced for mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-gray-900/30 to-gray-900/30 sm:from-gray-900/20 sm:via-gray-900/20 sm:to-gray-900/20"></div>
        </div>
      </motion.div>

      {/* Subtle floating shapes - Hidden on mobile for performance */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#F05A29]/10 blur-3xl -z-10 hidden lg:block"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gray-800/20 blur-3xl -z-10 hidden lg:block"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col justify-center items-center text-center pt-24 pb-20 sm:pt-32 sm:pb-28">
        <motion.div
          style={{ y: yText }}
          className=" mx-auto flex flex-col  items-center px-2 xs:px-0"
        >
          {/* Headline */}
          <div className="overflow-hidden mb-4 sm:mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl   lg:text-3xl text-white allerta-regular  uppercase mb-12 md:mb:0  my-2 sm:my-4 md:my-6"
              style={{fontFamily: "Times New Roman, Times, serif",letterSpacing: "1px",lineHeight: "1.2",fontWeight: "600"}}
            >
              Best Construction Company in <span className="block"> Kanyakumari & Thiruvananthapuram</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="kaushan-script-regular text-xl md:text-2xl block text-white"
            >
              Building Your Dreams Into Reality
            </motion.h2>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-sm sm:text-xl md:text-xl text-gray-200 alkatra mb-8 sm:mb-10 md:mb-14 max-w-md sm:max-w-xl font-light tracking-wide px-2 sm:px-0"
          >
            Excellence in construction with precision craftsmanship, innovative solutions, and unwavering commitment to quality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 w-full sm:w-auto px-4 xs:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px -5px rgba(240, 90, 41, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              onClick={openDialog}
              className="bg-gradient-to-r from-[#F05A29] to-orange-500 hover:from-orange-500 hover:to-[#F05A29] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 text-white text-sm sm:text-base md:text-lg font-medium transition-all duration-300 group flex items-center justify-center gap-2 sm:gap-3 shadow-lg w-full sm:w-auto"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <Link href="#service" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-transparent border border-white/30 hover:border-white/60 text-white px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-medium transition-all duration-300 group flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-sm w-full"
              >
                View Our Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>


      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-white text-xs font-light tracking-widest mb-2">SCROLL</span>
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}