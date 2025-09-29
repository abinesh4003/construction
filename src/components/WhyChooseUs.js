"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "/whyus/time.jpg",
    title: "Timely Completion",
    description: "90% of projects delivered ahead of schedule",
    bgColor: "bg-amber-100",
  },
  {
    icon: "/whyus/price.jpg",
    title: "Cost Transparency",
    description: "Fixed-price contracts with no hidden fees",
    bgColor: "bg-green-100",
  },
  {
    icon: "/whyus/safety.jpg",
    title: "Safety First",
    description: "Zero accidents in the past 3 years",
    bgColor: "bg-red-100",
  },
  {
    icon: "/whyus/quality.jpg",
    title: "Quality Assurance",
    description: "5-year warranty on all structural work",
    bgColor: "bg-purple-100",
  },
  {
    icon: "/whyus/method.jpg",
    title: "Modern Methods",
    description: "BIM technology for precision planning",
    bgColor: "bg-amber-200",
  },
  {
    icon: "/whyus/trofy.jpg",
    title: "Industry Recognition",
    description: "2023 Best Commercial Builder Award",
    bgColor: "bg-orange-100",
  },
];

export default function LuxuryWhyChooseUs() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="montserrat text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
              Why Choose
            </span>{" "}
            <span className="text-gray-900">Our Construction</span>
          </h2>
          <p className="inter mt-4 text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
            Discover why clients trust us to deliver exceptional construction projects with quality, safety, and innovation.
          </p>
        </motion.div>

        {/* Animated Floating Grid */}
        <div className="relative flex flex-wrap justify-center gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ scale: 1.05, rotate: 1, y: -5, boxShadow: "0 25px 40px rgba(0,0,0,0.15)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative w-72 bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`${feature.bgColor} p-6 rounded-full mb-6 shadow-md`}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </motion.div>

              {/* Title */}
              <h3 className="montserrat text-xl md:text-2xl font-bold mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="inter text-gray-600 text-base md:text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
