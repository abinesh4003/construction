'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useDialog } from './DialogProvider';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Building2,
  FileText,
  Users,
  Ruler,
  Award,
  Smile,
  MapPin,
  Sparkles,
  Star,
  ArrowRight,
} from 'lucide-react';

export default function WhyChooseUs() {
  const stats = [
    { label: 'Total Projects', value: 150, suffix: '+', icon: Building2 },
    { label: 'Floor Plans', value: 1000, suffix: '+', icon: FileText },
    { label: 'Construction Workers', value: 100, suffix: '+', icon: Users },
    { label: 'sqft Total Build-up', value: 300000, suffix: '', icon: Ruler },
    { label: 'Years of Experience', value: 10, suffix: '+', icon: Award },
    { label: 'Happy Clients', value: 150, suffix: '+', icon: Smile },
  ];

  const cities = [
    { name: 'Kanyakumari', icon: MapPin },
    { name: 'Kavalkinaru', icon: MapPin },
    { name: 'Nagercoil', icon: MapPin },
    { name: 'Boothapandi', icon: MapPin },
    { name: 'Rajakkamangalam', icon: MapPin },
    { name: 'Muttom', icon: MapPin },
    { name: 'Colachal', icon: MapPin },
    { name: 'Thuckalay', icon: MapPin },
    { name: 'Marthandam', icon: MapPin },
    { name: 'Thiruvananthapuram', icon: MapPin },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { openDialog } = useDialog();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50/30" id="portfolio">
      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-amber-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-200/10 to-gray-100/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto ${isMobile ? 'py-16 px-4' : isTablet ? 'py-20 px-6' : 'py-28 px-6'}`}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center relative"
        >
          {pathname === "/portfolio" && (<div className="sr-only">
            <h1>About Varghese Construction Trusted Builders in Nagercoil</h1>
            <p>
              Varghese Construction Portfolio showcases our premium construction projects, including luxury villas, residential homes, and commercial buildings across Nagercoil and Tamil Nadu.
              Each project reflects our commitment to quality, safety, and timely delivery, ensuring client satisfaction at every stage.
            </p>
            <p>
              Our villa projects highlight elegant design, modern construction methods, and attention to detail, while our residential home projects offer customized solutions for individual client needs.
              Commercial building projects demonstrate our expertise in large-scale construction, project management, and adherence to industry standards.
            </p>
            <p>
              The portfolio includes over 150 completed projects, with floor plans, construction workers, and total build-up area documented to showcase our experience and capability.
              Our projects span multiple cities, including Nagercoil, Kanyakumari, Marthandam, Thuckalay, and nearby areas, delivering exceptional construction services across the region.
            </p>
            <p>
              Explore our Portfolio to witness the craftsmanship, innovation, and reliability that make Varghese Construction a trusted choice for building luxury homes, villas, and commercial spaces in Tamil Nadu.
            </p>
            
          <ul>
            <li >
              <Link href="/">
               Home Page
              </Link>
            </li>
            <li >
              <Link href="/service">
               Services
              </Link>
            </li>
            <li >
              <Link href="/package">
               Packages & Pricing
              </Link>
            </li>
            <li >
              <Link href="/reviews">
               Reviews
              </Link>
            </li>
            <li >
              <Link href="/partners">
               Partners
              </Link>
            </li>
          </ul>
      
          </div>

          )}
          <h2 className={`mb-4 leading-tight ${isMobile ? 'text-3xl' : isTablet ? 'text-4xl' : 'text-5xl'}`}>
            <span className="text-gray-900 Montserrat font-bold">You Made the </span>
            <span className="kaushan-script-regular text-amber-600">Right Choice</span>
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto mt-4 ${isMobile ? 'text-base' : 'text-lg lg:text-xl'}`}>
            We don&apos;t just build homes; we build lasting relationships through trust, quality, and exceptional craftsmanship.
          </p>
        </motion.div>

        {/* Stats */}
        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1 mt-12' : isTablet ? 'grid-cols-2 mt-16' : 'grid-cols-3 mt-20'}`}>
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="relative rounded-xl bg-white/90 shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">
                  <CountUp value={stat.value} suffix={stat.suffix} duration={1500} />
                </span>
                <span className="text-gray-600 font-medium text-sm">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cities Section */}
        <div className={`grid gap-8 ${isMobile ? 'grid-cols-1 mt-16' : isTablet ? 'grid-cols-1 mt-20' : 'grid-cols-5 mt-24'}`}>
          {/* Left Banner */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`rounded-3xl overflow-hidden relative shadow-2xl ${isMobile || isTablet ? 'col-span-1' : 'col-span-3'}`}
          >
            <div className="relative w-full h-64 md:h-96 lg:h-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/project-sample.jpg"
                alt="Project sample"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 lg:p-8 border border-white/20">
                  <span className="text-white font-semibold block text-2xl lg:text-3xl">
                    Building Dreams Across <span className="text-amber-300">10+ Cities</span>
                  </span>
                  <p className="text-gray-200 mt-2">Premium construction services with local expertise and global standards.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cities List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`${isMobile || isTablet ? 'col-span-1 mt-8' : 'col-span-2'} flex flex-col`}
          >
            <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-amber-400 to-amber-300 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-900 text-xl">Our Service Areas</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {cities.map((city, i) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/30 text-gray-800 font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    <city.icon className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-semibold">{city.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="rounded-3xl overflow-hidden relative shadow-2xl mt-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900/30"></div>
          <Image src="/cta-project.jpg" alt="Start your project" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

          <div className="relative z-10 flex flex-col items-center text-center p-12 gap-6">
            <div className="flex-1">
              <span className="font-bold text-white text-3xl lg:text-4xl">
                Ready to Build Your{' '}
                <span className="bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent">
                  Dream Project?
                </span>
              </span>
              <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
                Schedule a complimentary consultation and receive a bespoke plan with detailed estimate for your vision.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openDialog}
              className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-white font-bold shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Start Your Journey</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Fixed CountUp component
function CountUp({ value = 0, duration = 3000, suffix = '' }) {
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const end = Number(value);
          const range = end - start;
          const stepTime = 16; // ~60fps
          const steps = Math.ceil(duration / stepTime);
          let currentStep = 0;

          const interval = setInterval(() => {
            currentStep++;
            const progress = Math.min(currentStep / steps, 1);
            setDisplay(Math.floor(start + progress * range));
            if (progress === 1) clearInterval(interval);
          }, stepTime);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, duration, hasAnimated]);

  const formatted = display.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return <span ref={elementRef}>{formatted}{suffix}</span>;
} 