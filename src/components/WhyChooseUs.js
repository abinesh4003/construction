import React from "react";
import Image from "next/image";
import { Clock, BadgeDollarSign, ShieldCheck, BadgeCheck, Cpu, Award } from "lucide-react";
import { useDialog } from "./DialogProvider";

const features = [
  { title: "Timely Completion", description: "90% of projects delivered ahead of schedule", icon: Clock },
  { title: "Cost Transparency", description: "Fixed-price contracts with no hidden fees", icon: BadgeDollarSign },
  { title: "Safety First", description: "Zero accidents in the past 3 years", icon: ShieldCheck },
  { title: "Quality Assurance", description: "5-year warranty on all structural work", icon: BadgeCheck },
  { title: "Modern Methods", description: "BIM technology for precision planning", icon: Cpu },
  { title: "Industry Recognition", description: "2023 Best Commercial Builder Award", icon: Award },
];

export default function WhyChooseConstructionPremium() {
  const { openDialog } = useDialog();

  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="why-choose-heading">
      <h2 className="sr-only">
        Why Choose Our Construction | Varghese Construction
      </h2>
      <p className="sr-only">
        Discover why clients trust us to deliver exceptional construction projects with quality, safety, and innovation.
      </p>
      <div className="sr-only">
        {features.map((f) => (
          <div key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
        </div>
      <div className="absolute inset-0 bg-black/10" />

      {/* Desktop Heading */}
      <div className="hidden lg:block py-16 text-center relative z-10">
        <h2 id="why-choose-heading" className="text-4xl p-3 font-bold montserrat text-white" aria-hidden="true">
          <span className="kaushan-script-regular text-amber-400">Why Choose</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
            Our Construction
          </span>
        </h2>

        <p className="text-gray inter text-xl mt-2" aria-hidden="true">
          Discover why clients trust us to deliver exceptional construction projects with quality, safety, and innovation.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-12 px-6 lg:px-20 pb-24" aria-hidden="true">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-3xl bg-white/70 backdrop-blur-lg border border-gray-200/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all p-6 flex items-start gap-4"
            >
              <div className="p-4 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-200 text-black shadow-inner">
                <f.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <span className="text-lg montserrat font-semibold text-gray-900 block">
                  {f.title}
                </span>

                <p className="text-gray-600 inter text-sm">{f.description}</p>
              </div>
            </div>
          ))}

          <button
            className="mt-6 sm:col-span-2 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black montserrat font-semibold shadow-lg hover:scale-105 transform transition text-center"
            onClick={openDialog}
            aria-label="Book Free Consultation"
          >
            Book Free Consultation →
          </button>
        </div>

        <div className="flex-1 relative w-full rounded-3xl overflow-hidden shadow-2xl" >
          <Image
            src="/whyus/banner.jpg"
            alt="Luxury interior background of construction project"
            fill
            className="object-cover scale-105 min-h-[400px]"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative w-full" aria-hidden="true">
        <Image
          src="/whyus/banner.jpg"
          alt="Luxury interior background of construction project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-12 space-y-6">
          <h2 className="text-3xl font-bold montserrat text-white" aria-hidden="true">
            <span className="kaushan-script-regular text-amber-400">Why Choose</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
              Our Construction
            </span>
          </h2>
          <p className="text-white inter max-w-md" aria-hidden="true">
            Discover why clients trust us to deliver exceptional construction projects with quality, safety, and innovation.
          </p>

          <div className="grid grid-cols-1 gap-4 w-full max-w-md">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 bg-white/30 backdrop-blur-md rounded-xl p-4 text-left"
              >
                <div className="p-2 rounded-xl bg-amber-400 text-black">
                  <f.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-white font-semibold montserrat text-sm block">
                    {f.title}
                  </span>

                  <p className="text-white text-xs inter">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black montserrat font-semibold shadow-lg hover:scale-105 transform transition"
            aria-label="Book Free Consultation"
          >
            Book Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
