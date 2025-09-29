'use client';

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const HeroPremium = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [slideDirection, setSlideDirection] = useState(1);

  // Check mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Floating bubbles
  useEffect(() => {
    const count = isMobile ? 8 : 15;
    const generated = Array.from({ length: count }, () => ({
      width: Math.random() * (isMobile ? 4 : 6) + 2,
      height: Math.random() * (isMobile ? 4 : 6) + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setBubbles(generated);
  }, [isMobile]);

  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: isMobile ? 800 : 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: isMobile ? 6000 : 8000,
    fade: false,
    pauseOnHover: false,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    beforeChange: (current, next) => {
      setSlideDirection(next > current ? 1 : -1);
      setCurrentSlide(next);
    },
  };

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Home & Villa Builders in Nagercoil",
      desc: "Crafting exceptional living spaces with unparalleled craftsmanship and attention to detail.",
      mobileDesc: "Crafting exceptional living spaces with superior craftsmanship.",
      primaryBtn: { label: "Explore Services", link: "/service" },
      secondaryBtn: { label: "Get Free Quote", link: "/contact" },
      features: ["20+ Years Experience", "Premium Materials", "Timely Delivery"],
    },
    {
      img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80",
      title: "Building Your Dreams Into Reality",
      desc: "Transforming visions into extraordinary homes with innovative design and superior quality.",
      mobileDesc: "Transforming visions into extraordinary homes with innovative design.",
      primaryBtn: { label: "See Packages", link: "/package" },
      secondaryBtn: { label: "Book Consultation", link: "/contact" },
      features: ["Custom Designs", "Quality Assurance", "Transparent Pricing"],
    },
    {
      img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Excellence in Every Brick",
      desc: "Where luxury meets functionality, creating spaces that inspire and endure.",
      mobileDesc: "Where luxury meets functionality, creating inspiring spaces.",
      primaryBtn: { label: "About Us", link: "/portfolio" },
      secondaryBtn: { label: "Start Project", link: "/contact" },
      features: ["Luxury Finishes", "Smart Homes", "Sustainable Design"],
    },
  ];

  // Animations
  const textVariants = {
    initial: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 50 : -50,
      scale: 0.95,
    }),
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -50 : 50,
      scale: 1.05,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const featuresVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.6 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  const buttonsVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-0">
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-400/20"
            animate={{
              y: [0, isMobile ? -20 : -30, 0],
              x: [0, Math.sin(i) * (isMobile ? 10 : 20), 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: `${b.width}px`,
              height: `${b.height}px`,
              left: `${b.left}%`,
              top: `${b.top}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Slider */}
      <Slider {...sliderSettings} className="h-screen">
        {slides.map((slide, idx) => (
          <div key={idx} className="h-screen relative overflow-hidden">
            {/* Background Image */}
            <motion.div
              className="parallax-bg w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
              animate={{ scale: isMobile ? [1.1, 1.15] : [1.1, 1.05] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center z-10">
              <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <AnimatePresence mode="wait" custom={slideDirection}>
                  {currentSlide === idx && (
                    <motion.div
                      key={idx}
                      custom={slideDirection}
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="max-w-2xl lg:max-w-4xl xl:max-w-5xl"
                    >
                      {/* Main Heading (only once as h1 for SEO) */}
                      {idx === 0 ? (
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                          <span className="block bg-gradient-to-r from-amber-300 via-white to-amber-200 bg-clip-text text-transparent">
                            Luxury Home & Villa
                          </span>
                          <span className="block text-white mt-2">
                            Builders in Nagercoil
                          </span>
                        </h1>
                      ) : (
                        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white">
                          {slide.title}
                        </span>
                      )}

                      {/* Description */}
                      <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-2xl lg:max-w-3xl">
                        {isMobile ? slide.mobileDesc : slide.desc}
                      </p>

                      {/* Features */}
                      <motion.div
                        className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10"
                        variants={featuresVariants}
                      >
                        {slide.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                          >
                            <Star className="h-3 w-3 text-amber-400 fill-current" />
                            <span className="text-white/80 text-xs sm:text-sm font-medium">
                              {isMobile && feature.length > 15
                                ? `${feature.substring(0, 12)}...`
                                : feature}
                            </span>
                          </div>
                        ))}
                      </motion.div>

                      {/* Buttons */}
                      <motion.div
                        className="mt-8 flex flex-col sm:flex-row gap-4 md:gap-6"
                        variants={buttonsVariants}
                      >
                        <Link href={slide.primaryBtn.link}>
                          <button className="relative px-8 py-4 rounded-xl font-bold tracking-wide uppercase bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            {isMobile
                              ? slide.primaryBtn.label.replace("Explore", "View")
                              : slide.primaryBtn.label}
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </Link>
                        <Link href={slide.secondaryBtn.link}>
                          <button className="relative px-8 py-4 rounded-xl font-bold tracking-wide uppercase border border-amber-400/50 text-white hover:bg-amber-400/10 transition-all duration-300">
                            {isMobile
                              ? slide.secondaryBtn.label.replace("Free ", "")
                              : slide.secondaryBtn.label}
                          </button>
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Scroll Indicator */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/70 text-xs font-light tracking-widest">
              SCROLL
            </span>
            <div className="w-px h-6 bg-gradient-to-b from-amber-400 to-transparent" />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroPremium;
