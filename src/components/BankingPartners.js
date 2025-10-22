'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BankingPartners() {
  const partners = [
    '/bank-logos/hdfc.png',
    '/bank-logos/sbi.png',
    '/bank-logos/icici.png',
    '/bank-logos/kotak.png',
    '/bank-logos/pnb.png',
    '/bank-logos/axis.png',
    '/bank-logos/idbi.png',
  ];

  const containerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const scrollSpeed = 1; // pixels per frame
    let animationFrame;

    const scrollCarousel = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth } = containerRef.current;
        if (scrollLeft >= scrollWidth / 2) {
          containerRef.current.scrollLeft = 0;
        } else {
          containerRef.current.scrollLeft += scrollSpeed;
        }
      }
      animationFrame = requestAnimationFrame(scrollCarousel);
    };

    animationFrame = requestAnimationFrame(scrollCarousel);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full py-20 bg-gradient-to-r from-gray-200 to-gray-100" id='partners'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Heading for seo */}
          {pathname === "/partners" && (<div className="sr-only">
   <h1 className="sr-only">Our Partners - Varghese Construction</h1>
  <p>
    Varghese Construction works with trusted partners across Nagercoil and Kanyakumari, including top banking institutions, material suppliers, architecture firms, and engineering consultants. 
    Our collaborators ensure timely project delivery, premium construction quality, and seamless client experiences.
  </p>
  <p>
    Our banking partners like HDFC, SBI, ICICI, Kotak, PNB, Axis, and IDBI provide smooth financial transactions for our clients. 
    We carefully select architecture and engineering partners to maintain high standards in design, structural safety, and project management.
  </p>
  <p>
    These strategic collaborations help us deliver luxury homes, commercial buildings, and turnkey construction projects efficiently, meeting every client’s expectations with professionalism and precision.
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
              <Link href="/portfolio">
               Partners
              </Link>
            </li>
          </ul>

</div>
          ) }
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 animate-gradient-x">
            Our Banking Partners
          </h2>
          <p className="text-gray-500 md:text-lg max-w-2xl mx-auto inter">
            Partnered with leading financial institutions to ensure smooth transactions for our clients.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-hidden whitespace-nowrap py-4 no-scrollbar"
        >
          {partners.concat(partners).map((logo, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 rounded-lg flex items-center justify-center  transition-all duration-500 cursor-pointer shadow-lg hover:scale-110 bg-white"
              whileHover={{ scale: 1.1, rotate: 2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <Image
                src={logo}
                alt={`Partner ${idx}`}
                width={160}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
       
      `}</style>
    </section>
  );
}
