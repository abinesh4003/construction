'use client';

import Image from 'next/image';
import { Clock, BadgeDollarSign, ShieldCheck, BadgeCheck, Cpu, Award } from 'lucide-react';
import { useDialog } from './DialogProvider';


const features = [
  { title: 'Timely Completion', description: '90% of projects delivered ahead of schedule', icon: Clock },
  { title: 'Cost Transparency', description: 'Fixed-price contracts with no hidden fees', icon: BadgeDollarSign },
  { title: 'Safety First', description: 'Zero accidents in the past 3 years', icon: ShieldCheck },
  { title: 'Quality Assurance', description: '5-year warranty on all structural work', icon: BadgeCheck },
  { title: 'Modern Methods', description: 'BIM technology for precision planning', icon: Cpu },
  { title: 'Industry Recognition', description: '2023 Best Commercial Builder Award', icon: Award },
];

export default function WhyChooseConstructionPremium() {
  
  const { openDialog } = useDialog();
  return (
    <section className="relative w-full overflow-hidden">
       <div className="absolute inset-0 bg-black/10"></div>
       <div className="hidden lg:block py-16 text-center z-10 relative">
        <h2 className="text-4xl p-3  font-bold montserrat text-white">
            <span className="kaushan-script-regular text-amber-400">Why Choose</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
              Our Construction
            </span>
          </h2>
          <p className="text-gray inter text-xl mt-2">
            Discover why clients trust us to deliver exceptional construction projects with quality, safety, and innovation.
          </p>
       </div>
      {/* Desktop Layout */}
      <div className="hidden lg:flex  gap-12 px-6 lg:px-20 pb-24">
        {/* Left Side: Features */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-3xl bg-white/70 backdrop-blur-lg border border-gray-200/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all p-6 flex items-start gap-4"
            >
              <div className="p-4 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-200 text-black shadow-inner">
                <f.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg montserrat font-semibold text-gray-900">{f.title}</h3>
                <p className="text-gray-600 inter text-sm">{f.description}</p>
              </div>
            </div>
          ))}
          {/* CTA Button */}
          <button
            className="mt-6 sm:col-span-2 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black montserrat font-semibold shadow-lg hover:scale-105 transform transition text-center"
             onClick={openDialog}
          >
            Book Free Consultation →
          </button>
        </div>

        {/* Right Side: Hero Image */}
        <div className="flex-1 relative w-full rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/whyus/banner.jpg"
            alt="Luxury interior background"
            fill
            className="object-cover scale-105 min-h-[400px]"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative w-full">
        <Image
          src="/whyus/banner.jpg"
          alt="Luxury interior background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-12 space-y-6">
          <h2 className="text-3xl font-bold montserrat text-white">
            <span className="kaushan-script-regular text-amber-400">Why Choose</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
              Our Construction
            </span>
          </h2>
          <p className="text-white inter max-w-md">
            Discover why clients trust us to deliver exceptional construction projects with quality, safety, and innovation.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 w-full max-w-md">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 bg-white/30 backdrop-blur-md rounded-xl p-4 text-left"
              >
                <div className="p-2 rounded-xl bg-amber-400 text-black">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold montserrat text-sm">{f.title}</h3>
                  <p className="text-white text-xs inter">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black montserrat font-semibold shadow-lg hover:scale-105 transform transition"
          >
            Book Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
