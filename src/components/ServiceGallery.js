"use client";
import { useState, useEffect } from "react";
import { hover, motion } from "framer-motion";
import Image from "next/image";
import { useDialog } from "./DialogProvider";
import Link from "next/link";
import Slider from "react-slick";

// Slick Carousel CSS (required)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

// Services data
const services = [
  {
    title: "Luxury Villa Construction",
    image: "/gallery/villa.jpg",
    description:
      "Custom-designed villas with premium finishes and elegant architecture tailored to your lifestyle.",
    tags: ["Custom Design", "Premium Finish", "Luxury Homes"],
  },
  {
    title: "Commercial Complexes",
    image: "/gallery/complex.jpg",
    description:
      "State-of-the-art commercial spaces designed for productivity and business success.",
    tags: ["Offices", "Business Centers", "Modern Design"],
  },
  {
    title: "Interior Design",
    image: "/gallery/interior.jpg",
    description:
      "Transform your space with bespoke interior solutions that reflect your personality.",
    tags: ["Furniture", "Lighting", "Color Schemes"],
  },
  {
    title: "Eco-Friendly Construction",
    image: "/gallery/eco.jpg",
    description:
      "Sustainable building solutions that respect the environment while delivering comfort.",
    tags: ["Solar Energy", "Sustainability", "Green Materials"],
  },
  {
    title: "Residential Projects",
    image: "/gallery/residential.jpg",
    description:
      "Modern apartments and duplexes designed for contemporary urban living.",
    tags: ["Apartments", "Duplex", "Urban Living"],
  },
  {
    title: "Hospitality Projects",
    image: "/gallery/hoispitality.jpg",
    description:
      "Create memorable experiences with our hospitality construction expertise.",
    tags: ["Hotels", "Resorts", "Restaurants"],
  },
  {
    title: "Architectural Planning",
    image: "/gallery/arcitech.jpg",
    description:
      "Comprehensive 2D & 3D planning to bring your vision to life before construction.",
    tags: ["3D Design", "Visualization", "Blueprints"],
  },
  {
    title: "Renovation Services",
    image: "/gallery/renovation.jpg",
    description:
      "Breathe new life into existing spaces with our expert renovation services.",
    tags: ["Home Makeover", "Upgrades", "Restoration"],
  },
  {
    title: "Landscape Design",
    image: "/gallery/landscape.jpg",
    description:
      "Beautiful outdoor spaces that seamlessly integrate with your architecture.",
    tags: ["Gardens", "Hardscapes", "Outdoor Living"],
  },
  {
    title: "Smart Home Automation",
    image: "/gallery/smart.jpg",
    description:
      "Intelligent home systems for enhanced comfort, security, and energy efficiency.",
    tags: ["IoT", "Security", "Energy Management"],
  },
];

export default function ServicesSection() {
  const { openDialog } = useDialog();
  const [isMobile, setIsMobile] = useState(false);

  // Detect viewport width client-side
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <section id="services" className="py-10 sm:py-16 bg-slate-50">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-16 px-4">
        <h2 className="block barlow-condensed text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Specialized Construction Solutions
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Explore our expert services designed to elevate every stage of your
          construction journey from design to finishing touches.
        </motion.p>

      </div>

      {/* Conditionally Render Layout */}
      <div className="w-full px-3 sm:px-4">
        {isMobile ? (
          <div className="px-2">
            <Slider {...sliderSettings}>
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </Slider>
          </div>
        ) : (
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-2 sm:p-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center px-3 sm:px-6 pt-8 sm:pt-12 border-t border-slate-200/50"
        >
          <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-4">
            Ready to Build Your Vision?
          </h3>

          <p className="text-slate-600 text-sm sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss your project and bring your construction dreams
            to life with our expert team.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(217, 119, 6, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3 bg-[#F5B041] text-white text-sm sm:text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400/40"
              onClick={openDialog}
            >
              Get Free Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3 border border-slate-300 text-slate-700 text-sm sm:text-lg font-semibold rounded-lg hover:bg-slate-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300/40"
            >
              <Link href="/package">View Packages</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Individual Card Component
function ServiceCard({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md group cursor-pointer border border-slate-200/50 bg-white hover:shadow-xl hover:shadow-amber-100/40 transition-all duration-300 h-64 flex flex-col"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-500" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 p-5 flex flex-col justify-between h-full">
        <motion.h3
         initial={{ opacity: 0, x: 200 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: false }}
         duration={1}
         delay={0.9}
         
        className="text-lg sm:text-xl font-bold text-white leading-tight drop-shadow-md">
          {service.title}
        </motion.h3>
        <div>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            duration={1}
            delay={0.9}
            className="text-xs sm:text-sm text-slate-100 leading-relaxed mb-2 sm:mb-3">
            {service.description}
          </motion.p>
          <div className="flex flex-wrap gap-1">
            {service.tags.map((tag, i) => (
              <motion.span
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                duration={1}
                delay={0.9}
                key={i}
                className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/20 border border-white/30 rounded-full text-[10px] sm:text-xs text-white font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Border Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/40 transition-all duration-500 rounded-xl sm:rounded-2xl" />
    </motion.div>
  );
}
