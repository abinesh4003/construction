"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LuxuryCustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const reviews = [
    {
      id: 1,
      name: "Rajesh",
      role: "Homeowner, Kanyakumari",
      rating: 5,
      content: "The team delivered our dream home ahead of schedule with exceptional quality. Their attention to detail was impressive throughout the construction process.",
      avatar: "/avatars/1.jpg"
    },
    {
      id: 2,
      name: "Suresh",
      role: "Business Owner, Thiruvananthapuram",
      rating: 4,
      content: "Our commercial space was built exactly to specifications. The project management was professional and they handled all municipal approvals seamlessly.",
      avatar: "/avatars/2.jpg"
    },
    {
      id: 3,
      name: "Manikandan",
      role: "Homeowner, Nagercoil",
      rating: 5,
      content: "We have partnered with them on three projects now. Consistent quality, on-time delivery, and transparent pricing make them our go-to construction partner.",
      avatar: "/avatars/3.jpg"
    },
    {
      id: 4,
      name: "Priya",
      role: "Architect, Chennai",
      rating: 5,
      content: "Working with Varghese Construction was a pleasure. They understood our design vision perfectly and executed it with precision.",
      avatar: "/avatars/4.jpg"
    },
    {
      id: 5,
      name: "Vijay",
      role: "Hotel Owner, Kanyakumari",
      rating: 5,
      content: "Our beach resort construction was completed with excellent craftsmanship. They handled all the coastal regulation challenges professionally.",
      avatar: "/avatars/5.jpg"
    }
  ];

  // Get current set of 3 reviews
  const visibleReviews = [
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
<section id="reviews" className="py-28 bg-white relative">
  <div className="container mx-auto px-4 sm:px-6">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 md:mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-light mb-6">
        <span className="font-serif italic">Our</span> Happy Customers
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Hear from homeowners and businesses who have experienced our quality craftsmanship firsthand.
      </p>
    </motion.div>

    {/* Reviews Slider */}
    <div className="relative h-[550px] md:h-[450px] overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
        aria-label="Previous review"
      >
        <ChevronLeft className="h-6 w-6 text-[#F05A29]" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
        aria-label="Next review"
      >
        <ChevronRight className="h-6 w-6 text-[#F05A29]" />
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
          className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {visibleReviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-gray-50 p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              {/* Rating and Quote */}
              <div className="flex items-center mb-6">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating
                          ? "text-[#F05A29] fill-[#F05A29]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#F05A29] opacity-20" />
              </div>

              {/* Review Content */}
              <div className="flex-grow mb-6">
                <p className="text-gray-600 italic relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-[#F05A29]">
                  &quot;{review.content}&quot;
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center mt-auto">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-[#F05A29]">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Dots Indicator */}
    <div className="flex justify-center mt-12 gap-2">
      {reviews.map((_, index) => (
        <button
          key={index}
          onClick={() => goToReview(index)}
          className={`h-3 w-3 rounded-full transition-all ${
            currentIndex === index ? "bg-[#F05A29] w-6" : "bg-gray-300"
          }`}
          aria-label={`Go to review ${index + 1}`}
        />
      ))}
    </div>
  </div>
</section>

  );
}