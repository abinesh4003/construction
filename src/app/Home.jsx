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

  const el = document.getElementById(scrollTo);

  if (el) {
    // Delay slightly to ensure layout is ready
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
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
