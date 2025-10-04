'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useDialog } from './DialogProvider';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { openDialog } = useDialog();
  const pathname = usePathname();

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => {
      window.removeEventListener('resize', checkDevice);
      obs.disconnect();
    };
  }, []);

  const sliderRef = useRef(null);
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    let rafId;
    let pos = 0;
    const speed = isMobile ? 0.3 : 0.4;

    const loop = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      rafId = requestAnimationFrame(loop);
    };

    const clone = el.innerHTML;
    el.innerHTML = el.innerHTML + clone;
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      el.innerHTML = el.innerHTML.slice(0, el.innerHTML.length / 2);
    };
  }, [isMobile]);

  const controls = useAnimation();
  useEffect(() => {
    if (visible) controls.start('visible');
  }, [visible, controls]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50/30"
      id="portfolio"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-amber-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-200/10 to-gray-100/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className={`relative z-10 max-w-7xl  mx-auto ${isMobile ? 'py-16 px-4' :
        isTablet ? 'py-20 px-6' :
          'py-28 px-6'
        }`}>

        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center relative"
        >
          {/* Premium Badge
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wide">Trusted Excellence</span>
            <Star className="w-4 h-4" />
          </motion.div> */}
          {/* heading for seo */}
          {pathname === "/portfolio" && (
            <h1 className="sr-only">About Varghese Construction Trusted Builders in Nagercoil</h1>
          ) }
          {/* Main Heading */}

          <h2 className={`mb-4 leading-tight ${isMobile ? 'text-3xl' : isTablet ? 'text-4xl' : 'text-5xl'}`}>
            {/* Main Text - Modern Professional */}
            <span className="text-gray-900 Montserrat font-bold">
              You Made the {' '}
            </span>

            {/* Accent Text - Elegant Script */}
            <span className="kaushan-script-regular text-amber-600">
              Right Choice
            </span>
          </h2>


          <p className={`text-gray-600 max-w-2xl mx-auto mt-4 ${isMobile ? 'text-base' : 'text-lg lg:text-xl'
            }`}>
            We don&apos;t just build homes; we build lasting relationships through trust, quality, and exceptional craftsmanship.
          </p>
        </motion.div>

        {/* Premium Stats Grid */}
      <motion.div
  className={`grid gap-6 ${
    isMobile ? 'grid-cols-1 mt-12' :
    isTablet ? 'grid-cols-2 mt-16' :
    'grid-cols-3 mt-20'
  }`}
  initial="hidden"
  animate={controls}
>
  {stats.map((stat, idx) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      className="relative rounded-xl bg-white/90 shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow">
        <stat.icon className="w-6 h-6" />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-900">
          {visible ? (
            <CountUp value={stat.value} suffix={stat.suffix} duration={1500} />
          ) : (
            '0'
          )}
        </span>
        <span className="text-gray-600 font-medium text-sm">
          {stat.label}
        </span>
      </div>
    </motion.div>
  ))}
</motion.div>



        {/* Premium Cities Section */}
    {/* Premium Cities Section */}
<div
  className={`grid gap-8 ${
    isMobile
      ? 'grid-cols-1 auto-rows-auto mt-16'
      : isTablet
      ? 'grid-cols-1 mt-20'
      : `grid-cols-5 mt-24`
  }`}
>
  {/* Left Banner */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={visible ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.2 }}
    className={`rounded-3xl overflow-hidden relative shadow-2xl ${
      isMobile || isTablet ? 'col-span-1' : 'col-span-3'
    }`}
    style={{ minHeight: isMobile ? '16rem' : undefined }} // mobile minimum height
  >
    <div
      className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ${
        isMobile ? 'min-h-[16rem]' : 'h-full'
      }`}
    >
      <Image
        src="/project-sample.jpg"
        alt="Project sample"
        fill
        className="object-cover opacity-70"
        sizes={isMobile ? '100vw' : isTablet ? '100vw' : '100%'}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
        <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 lg:p-8 max-w-2xl border border-white/20">
        <span
  className={`text-white font-semibold block ${
    isMobile ? 'text-xl' : 'text-2xl lg:text-3xl'
  }`}
>
  Building Dreams Across{' '}
  <span className="text-amber-300">10+ Cities</span>
</span>

          <p
            className={`text-gray-200 mt-2 ${
              isMobile ? 'text-sm' : 'text-base'
            }`}
          >
            Premium construction services with local expertise and global
            standards.
          </p>

          {/* Mini Stats */}
          <div className="flex gap-6 mt-4">
            <div className="text-amber-300">
              <div className={`font-bold ${isMobile ? 'text-lg' : 'text-xl'}`}>
                10+
              </div>
              <div className="text-white/80 text-xs">Cities</div>
            </div>
            <div className="text-amber-300">
              <div className={`font-bold ${isMobile ? 'text-lg' : 'text-xl'}`}>
                150+
              </div>
              <div className="text-white/80 text-xs">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>

  {/* Right Cities List */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={visible ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.4 }}
    className={`${
      isMobile || isTablet ? 'col-span-1 mt-8' : 'col-span-2'
    } flex flex-col h-full`}
  >
    <div
      className={`rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl h-full flex flex-col overflow-hidden ${
        isMobile ? 'p-6' : 'p-8'
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-gradient-to-br from-amber-400 to-amber-300 text-white">
          <MapPin className="w-5 h-5" />
        </div>
     <span
  className={`font-semibold text-gray-900 ${
    isMobile ? 'text-lg' : 'text-xl'
  }`}
>
  Our Service Areas
</span>

      </div>

      {/* Cities Grid */}
      <div
        className={`grid ${
          cities.length <= 4 ? 'grid-cols-1' : 'grid-cols-2'
        } gap-4 mb-6`}
      >
        {cities.map((city, i) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.05 * i }}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/30 text-gray-800 font-medium shadow-lg hover:shadow-xl transition-all max-w-full break-words"
          >
            <city.icon className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span className="text-xs font-semibold break-all break-words">
              {city.name}
            </span>
          </motion.div>
        ))}
      </div>

      <div className={`text-gray-600 mt-auto ${isMobile ? 'text-sm' : 'text-base'}`}>
        <p>
          Local expertise meets global standards across coastal and inland cities.
          Trusted for residential, commercial, and luxury projects.
        </p>
      </div>
    </div>
  </motion.div>
</div>


        {/* Premium CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`rounded-3xl overflow-hidden relative shadow-2xl mt-16 ${isMobile ? 'mt-12' : 'mt-20'
            }`}
        >
          {/* Background with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900/30"></div>

          {/* Background Image */}
          <Image
            src="/cta-project.jpg"
            alt="Start your project"
            fill
            className="object-cover opacity-40"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority={false}
          />

          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

          {/* Animated Orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-300/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className={`relative z-10 flex flex-col items-center justify-between gap-6 ${isMobile ? 'p-8' : 'p-12 lg:p-16'
            } ${isTablet || isMobile ? 'text-center' : 'lg:flex-row'}`}>

            <div className="flex-1">
           <span className={`font-bold text-white ${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'}`}>
  Ready to Build Your{' '}
  <span className="bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent">
    Dream Project?
  </span>
</span>
              <p className={`text-gray-200 mt-3 ${isMobile ? 'text-base' : 'text-lg'
                } ${isMobile ? 'max-w-sm' : 'max-w-2xl'}`}>
                Schedule a complimentary consultation and receive a bespoke plan
                with detailed estimate for your vision.
              </p>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={openDialog}
              className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-white font-bold shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Button Shine Effect */}
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

function CountUp({ value = 0, duration = 3000, suffix = '' }) {
  const [display, setDisplay] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (!isMounted) return;

    let start = 0;
    const end = Number(value);
    const range = end - start;
    if (range <= 0) {
      setDisplay(end);
      return;
    }
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const val = Math.floor(progress * range + start);
      setDisplay(val);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    const raf = window.requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, isMounted]);

  const formatted = display.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}