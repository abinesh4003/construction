'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import {
  Building2,
  FileText,
  Users,
  Ruler,
  Award,
  Smile,
  MapPin,
} from 'lucide-react';

// WhyChooseUs - Enhanced with luxury fonts & animations
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

  useEffect(() => {
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
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const sliderRef = useRef(null);
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let rafId;
    let pos = 0;
    const speed = 0.4;
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
  }, []);

  const controls = useAnimation();
  useEffect(() => {
    if (visible) controls.start('visible');
  }, [visible, controls]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 lg:py-24 px-6 lg:px-24 text-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl montserrat font-bold leading-tight text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-300">
              You Made the Right{' '}
              <span className="kaushan-script-regular text-amber-600">
                Choice
              </span>
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg inter">
            We don&apos;t just build homes, we build trust and quality.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          animate={controls}
          variants={{ visible: {}, hidden: {} }}
        >
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              className="rounded-2xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg p-6 flex flex-col items-start hover:-translate-y-1 transition-transform group animate-fade-in-up"
              initial={{ opacity: 0, y: 12 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * idx, duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-tr from-amber-100 to-amber-50 text-amber-600 shadow-inner group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl barlow-condensed font-bold text-amber-600">
                    {visible ? (
                      <CountUp
                        value={s.value}
                        suffix={s.suffix}
                        duration={1200}
                      />
                    ) : (
                      '0'
                    )}
                  </div>
                  <div className="text-sm inter text-gray-600 tracking-wide mt-1">
                    {s.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cities Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="col-span-1 lg:col-span-2 rounded-2xl overflow-hidden relative shadow-xl animate-fade-in-left"
          >
            <div className="relative h-64 lg:h-80 bg-gradient-to-tr from-gray-900 to-gray-700">
              <Image
                src="/project-sample.jpg"
                alt="Project sample"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-xl">
                  <h3 className="text-2xl text-white montserrat font-semibold">
                    We&apos;re Building Across 10+ Cities
                  </h3>
                  <p className="mt-1 text-sm text-gray-200 inter">
                    Reliable projects, local teams, trusted workmanship.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="col-span-1 animate-fade-in-right"
          >
            <div className="rounded-2xl bg-white p-6 shadow-md h-full flex flex-col">
              <h4 className="text-lg montserrat font-semibold mb-4">
                Our Cities
              </h4>
              <div
                ref={sliderRef}
                className="flex gap-3 overflow-hidden whitespace-nowrap py-2"
              >
                {cities.concat(cities).map((c, i) => (
                  <div
                    key={`${c.name}-${i}`}
                    className="inline-flex items-center gap-2 justify-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 text-gray-800 alkatra font-medium shadow-sm mr-2"
                    style={{ minWidth: 180 }}
                  >
                    <c.icon className="w-4 h-4 text-amber-600" /> {c.name}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-gray-600 inter">
                Local teams across coastal & inland cities — experienced in
                residential, commercial and infrastructure projects.
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden relative bg-gray-900 shadow-2xl animate-fade-in-up"
        >
          <div className="relative h-48 flex items-center">
            <Image
              src="/cta-project.jpg"
              alt="Start your project"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10"></div>
            <div className="relative z-10 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between w-full">
              <div className="text-white py-6">
                <h3 className="text-2xl lg:text-3xl montserrat font-semibold">
                  Start Your Project Today
                </h3>
                <p className="mt-2 text-gray-200 max-w-xl inter">
                  Schedule a free consultation and get a bespoke plan & estimate
                  for your dream build.
                </p>
              </div>
              <div className="py-6">
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black montserrat font-semibold shadow-lg hover:scale-105 transform transition"
                >
                  Start Now →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CountUp({ value = 0, duration = 3000, suffix = '' }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
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
  }, [value, duration]);

  const formatted = display.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}
