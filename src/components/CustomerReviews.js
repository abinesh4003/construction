"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LuxuryCustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const reviews = [
    { id: 1, name: "Sudarson", role: "Scientist – ISRO, Siomon Nagar", rating: 5, content: "From planning to execution, their precision and commitment were outstanding. My home was completed ahead of schedule with flawless detailing and uncompromising quality.", avatar: "/avatars/0.jpg" },
    { id: 2, name: "Selvam", role: "Export/Import, Kurusady", rating: 5, content: "Our commercial project was executed seamlessly with excellent coordination. They managed approvals effortlessly while maintaining top-notch quality throughout.", avatar: "/avatars/0.jpg" },
    { id: 3, name: "Predheesh Kumar", role: "ISRO, Asaripallam", rating: 5, content: "Having worked with them on multiple projects, I can confidently say they excel in timely delivery, superior quality, and absolute transparency in pricing.", avatar: "/avatars/0.jpg" },
    { id: 4, name: "Dr. Jagan Jascut", role: "MBBS, Punnainagar", rating: 5, content: "They translated my design ideas into reality with remarkable precision. Every detail was executed with care, making the entire journey stress-free and satisfying.", avatar: "/avatars/0.jpg" },
    { id: 5, name: "Nandhakumar", role: "ISRO, Vallankumaranvilai", rating: 5, content: "Our resort project was handled with exceptional professionalism. Despite regulatory challenges, they delivered world-class craftsmanship beyond expectations.", avatar: "/avatars/0.jpg" }
  ];

  // Detect mobile screen
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const visibleReviews = isMobile
    ? [reviews[currentIndex % reviews.length]]
    : [
        reviews[currentIndex % reviews.length],
        reviews[(currentIndex + 1) % reviews.length],
        reviews[(currentIndex + 2) % reviews.length],
      ];

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 8000);
    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const sliderVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0.8 }),
    center: { x: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0.8, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } })
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
          <h2 className="text-3xl md:text-5xl font-bold text-amber-400 font-playfair mb-4 md:mb-6">
            <span className="font-inter text-gray-900">Our Happy </span> Customers
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-4 inter">
            Hear from homeowners and businesses who have experienced our quality craftsmanship firsthand.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md transition-all z-10 hover:bg-amber-100"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md transition-all z-10 hover:bg-amber-100"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
          </button> */}

          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-6 md:gap-8`}
            >
              {visibleReviews.map((review) => (
                <motion.div
                  key={review.id}
                  className="bg-white p-6 md:p-8 border border-gray-200 rounded-3xl flex flex-col h-full shadow-lg hover:shadow-2xl transition-transform"
                  whileHover={{ scale: isMobile ? 1 : 1.03 }}
                >
                  {/* Rating + Quote */}
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="flex mr-3 md:mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 md:h-5 md:w-5 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 md:h-8 md:w-8 text-amber-400 opacity-25" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow mb-4 md:mb-6">
                    <p className="text-gray-800 italic text-sm md:text-base inter relative pl-4 md:pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-amber-400">
                      &quot;{review.content}&quot;
                    </p>
                  </div>

                  {/* Reviewer */}
                  <div className="flex items-center mt-auto">
                    <div className="relative h-10 w-10 md:h-14 md:w-14 rounded-full overflow-hidden mr-3 md:mr-4 border-2 border-amber-400">
                      <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="montserrat font-semibold text-gray-900 text-base md:text-lg truncate">
                        {review.name}
                      </h4>
                      <p className="inter text-gray-500 text-xs md:text-sm truncate">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-8 md:mt-12 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all ${currentIndex === index ? "bg-amber-400 md:w-6 w-4" : "bg-gray-300"}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
