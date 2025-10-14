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
export default function Home({ scrollTo }) {
  const { isDialogOpen, closeDialog } = useDialog();
  let pathname=usePathname();

  // Scroll to section when loaded
useEffect(() => {
  if (!scrollTo) return;

  const scrollIntoView = () => {
    const el = document.getElementById(scrollTo);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Try once immediately
  scrollIntoView();

  // Retry after layout stabilizes
  const timeout1 = setTimeout(scrollIntoView, 400);
  const timeout2 = setTimeout(scrollIntoView, 800);

  // Extra fix for iOS Safari — scroll after images/fonts load
  window.addEventListener("load", scrollIntoView);

  return () => {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    window.removeEventListener("load", scrollIntoView);
  };
}, [scrollTo, pathname]);

  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <ConstructionPackages />
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
