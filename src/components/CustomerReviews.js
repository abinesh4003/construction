"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Monica",
    role: "Homeowner, Bangalore",
    rating: 5,
    content: "The team delivered our dream home ahead of schedule with exceptional quality. Their attention to detail was impressive throughout the construction process.",
    avatar: "/avatars/1.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner, Delhi",
    rating: 4,
    content: "Our commercial space was built exactly to specifications. The project management was professional and they handled all municipal approvals seamlessly.",
    avatar: "/avatars/2.jpg"
  },
  {
    id: 3,
    name: "shreya",
    role: "Real Estate Developer, Mumbai",
    rating: 5,
    content: "We've partnered with them on three projects now. Consistent quality, on-time delivery, and transparent pricing make them our go-to construction partner.",
    avatar: "/avatars/3.jpg"
  },
];

export default function LuxuryCustomerReviews() {
  return (
    <section id="reviews" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#F05A29] px-4 py-2 text-sm font-medium mb-6">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            What Our <span className="font-serif italic">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from homeowners and businesses who've experienced our quality craftsmanship firsthand.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? 'text-[#F05A29] fill-[#F05A29]' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#F05A29] opacity-20" />
              </div>
              
              <p className="text-gray-600 mb-8 italic relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-[#F05A29]">
                "{review.content}"
              </p>
              
              <div className="flex items-center">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-[#F05A29]">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}