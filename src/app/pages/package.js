'use client';
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/Portfolio';
import ConstructionPackages from '@/components/ConstructionPackages';
import CustomerReviews from '@/components/CustomerReviews';
import BankingPartners from '@/components/BankingPartners';
import ContactUsSection from '@/components/ContactUsSection';
import ContactDialog from '@/components/ContactDialog';
import Footer from '@/components/Footer';
import { Toast } from '@/components/ui/toast';
import { useDialog } from '@/components/DialogProvider';
import { usePathname } from 'next/navigation';
export default function Package() {
  const { isDialogOpen, closeDialog } = useDialog();
  let pathname=usePathname();

  // Scroll to section when loaded
useEffect(() => {

  const scrollIntoView = () => {
    const el = document.getElementById('package');
    if (el) {
      const yOffset = -80; // if navbar is fixed
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Retry a few times for mobile layout delays
  const timeouts = [
    setTimeout(scrollIntoView, 200),
    setTimeout(scrollIntoView, 600),
    setTimeout(scrollIntoView, 1000),
  ];

  window.addEventListener("load", scrollIntoView);

  return () => {
    timeouts.forEach(clearTimeout);
    window.removeEventListener("load", scrollIntoView);
  };
}, [pathname]);


  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <ConstructionPackages />
        {/* SEO Hidden Text for Packages */}
<div className="sr-only">
  <p>
    Varghese Construction offers affordable and premium construction packages in Nagercoil tailored for every budget and home type. 
    Choose from Basic, Classic, Premium, and Royal packages to build villas, duplexes, apartments, or luxury homes. 
  </p>
  <p>
    Our packages include high-quality materials, branded steel and cement, floor tiles, teak wood doors and windows, 
    modern kitchen and bathroom fittings, smart home readiness, and eco-friendly finishes. 
  </p>
  <p>
    Additional services include structural engineering consultation, turnkey solutions, modular kitchens, 
    custom architectural designs, landscaping, plumbing, electrical work, and full project management. 
    We ensure timely delivery, premium craftsmanship, and transparent pricing for every construction project.
  </p>
</div>

        <CustomerReviews />
        <BankingPartners />
        <ContactUsSection />
        <ContactDialog isOpen={isDialogOpen} onClose={closeDialog} />
        <Toast />
      </main>
      <Footer />
    </div>
  );
}
