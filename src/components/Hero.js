'use client';

import Slider from "react-slick";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDialog } from "./DialogProvider";

export default function HeroSection() {

  const { openDialog } = useDialog();

  const videos = [
    "hero/hero-bg.mp4",
    "hero/hero-bg1.mp4",
    "hero/hero-bg2.mp4",
  ];

  const texts = [
    {
      title: "Luxury Home & Villa Builders in Nagercoil",
      subtitle:
        "Crafting exceptional living spaces with unparalleled craftsmanship and attention to detail.",
    },
    {
      title: "Building Your Dreams Into Reality",
      subtitle:
        "Transforming visions into extraordinary homes with innovative design and superior quality.",
    },
    {
      title: "Excellence in Every Brick",
      subtitle:
        "Where luxury meets functionality, creating spaces that inspire and endure.",
    },
  ];

  const [textIndex, setTextIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => {
      const nextVideo = videoRefs.current[next];
      if (nextVideo) {
        nextVideo.currentTime = 0;
        nextVideo.play().catch(() => {});
      }
    },
  };

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden" id="home">
      {/* Video Slider */}
      <Slider {...sliderSettings} className="absolute top-0 left-0 w-full h-full z-0">
        {videos.map((src, i) => (
          <div key={i} className="w-full h-[100dvh] flex items-center justify-center relative">
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={src}
              muted
              loop
              playsInline
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10">
        <motion.h1
          key={texts[textIndex].title}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif mb-4 sm:mb-6 md:mb-8 leading-tight max-w-full sm:max-w-4xl"
        >
          {texts[textIndex].title}
        </motion.h1>

        <motion.p
          key={texts[textIndex].subtitle}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-full sm:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10"
        >
          {texts[textIndex].subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6"
        >
         <button
            className="px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#F5B041] to-[#FFD580] text-black text-sm sm:text-base font-semibold shadow-lg hover:scale-105 transition"
            onClick={openDialog}
          >
            Start Your Project
          </button>
          <Link
            href="/portfolio"
            className="px-5 sm:px-6 py-2 sm:py-3 rounded-full border border-white text-white text-sm sm:text-base font-medium hover:bg-white/10 transition"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
