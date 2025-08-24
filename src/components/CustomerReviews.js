"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LuxuryCustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isMobile, setIsMobile] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Sudarson",
      role: "Scientist – ISRO, Siomon Nagar",
      rating: 5,
      content: "From planning to execution, their precision and commitment were outstanding. My home was completed ahead of schedule with flawless detailing and uncompromising quality.",
      avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      id: 2,
      name: "Selvam",
      role: "Export/Import, Kurusady",
      rating: 5,
      content: "Our commercial project was executed seamlessly with excellent coordination. They managed approvals effortlessly while maintaining top-notch quality throughout.",
       avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
      id: 3,
      name: "Predheesh Kumar",
      role: "ISRO, Asaripallam",
      rating: 5,
      content: "Having worked with them on multiple projects, I can confidently say they excel in timely delivery, superior quality, and absolute transparency in pricing.",
       avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      id: 4,
      name: "Dr. Jagan Jascut",
      role: "MBBS, Punnainagar",
      rating: 5,
      content: "They translated my design ideas into reality with remarkable precision. Every detail was executed with care, making the entire journey stress-free and satisfying.",
      
      avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    },
    {
      id: 5,
      name: "Nandhakumar",
      role: "ISRO, Vallankumaranvilai",
      rating: 5,
      content: "Our resort project was handled with exceptional professionalism. Despite regulatory challenges, they delivered world-class craftsmanship beyond expectations.",
       avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      id: 6,
      name: "Mervin Alexandar",
      role: "IPS, Beach House",
      rating: 5,
      content: "The team exceeded every expectation, delivering my home early with unmatched quality. Their meticulous attention to detail truly set them apart.",
       avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
    },
    {
      id: 7,
      name: "Benito",
      role: "Bank Manager, Maravankudieruppu",
      rating: 5,
      content: "My project was completed right on schedule and within budget. The craftsmanship was outstanding, and their professionalism was truly remarkable.",
       avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      id: 8,
      name: "Sornam",
      role: "ISRO, Suchindram",
      rating: 5,
      content: "Our commercial facility was delivered exactly to our specifications. The team managed every detail smoothly, ensuring a flawless execution process.",
       avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
    },
    {
      id: 9,
      name: "Sitharaman",
      role: "District Tourism Officer, Gansahapuram",
      rating: 5,
      content: "We have collaborated on several projects, and their consistency in delivering quality, punctuality, and transparency makes them our trusted construction partner.",
       avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    },
    {
      id: 10,
      name: "Shajan",
      role: "ISRO, Vettunimadam",
      rating: 5,
      content: "They understood our architectural vision perfectly and executed it with excellence. The result was beyond our expectations and truly impressive.",
       avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
      id: 11,
      name: "Kumar",
      role: "NRI, Nagercoil Town",
      rating: 5,
      content: "Entrusting them with my project was the best decision. They combined modern design with quality execution, delivering a flawless and elegant result.",
      avatar: "/avatars/0.jpg",
      // avatar: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg"
    }
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Get current set of reviews (1 for mobile, 3 for desktop)
  const visibleReviews = isMobile 
    ? [reviews[currentIndex % reviews.length]]
    : [
        reviews[currentIndex % reviews.length],
        reviews[(currentIndex + 1) % reviews.length],
        reviews[(currentIndex + 2) % reviews.length]
      ];

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + (isMobile ? 1 : 1)) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - (isMobile ? 1 : 1) + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants for smooth sliding
  const sliderVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0.8
    }),
    center: {
      x: '0%',
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1] 
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0.8,
      transition: { 
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1] 
      }
    })
  };

  return (
    <section id="reviews" className="py-16 md:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-4 md:mb-6">
            <span className="font-serif italic">Our</span> Happy Customers
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Hear from homeowners and businesses who have experienced our quality craftsmanship firsthand.
          </p>
        </motion.div>

        {/* Reviews Slider */}
        <div className="relative overflow-hidden">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-[#F05A29]" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-[#F05A29]" />
            </button>

            {/* Animated Reviews Container */}
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-6 md:gap-8 items-stretch`}
              >
                {visibleReviews.map((review) => (
                  <motion.div
                    key={review.id}
                    className="bg-gray-50 p-5 md:p-8 border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full"
                    whileHover={{ scale: isMobile ? 1 : 1.02 }}
                  >
                    {/* Rating and Quote */}
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="flex mr-3 md:mr-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 md:h-5 md:w-5 ${
                              i < review.rating
                                ? "text-[#F05A29] fill-[#F05A29]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 md:h-8 md:w-8 text-[#F05A29] opacity-20" />
                    </div>

                    {/* Review Content */}
                    <div className="flex-grow mb-4 md:mb-6">
                      <p className="text-sm md:text-base text-gray-600 italic relative pl-4 md:pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-[#F05A29]">
                        &quot;{review.content}&quot;
                      </p>
                    </div>

                    {/* Reviewer Info */}
                    <div className="flex items-center mt-auto">
                      <div className="relative h-10 w-10 md:h-14 md:w-14 rounded-full overflow-hidden mr-3 md:mr-4 border-2 border-[#F05A29]">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80px, 112px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm md:text-base truncate">{review.name}</h4>
                        <p className="text-xs md:text-sm text-gray-500 truncate">{review.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 md:mt-12 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-[#F05A29] md:w-6 w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}