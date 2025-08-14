"use client"
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerReviews from "@/components/CustomerReviews";
import ConstructionPackages from "@/components/ConstructionPackages";
import CompetitiveAdvantage from "@/components/competitiveAdvantage";
import ContactUsSection from "@/components/ContactUsSection";
import ContactDialog from "@/components/ContactDialog";
import Footer from "@/components/Footer";
import { useDialog } from "@/components/DialogProvider";
import Services from "@/components/Services";
import BankingPartners from "@/components/BankingPartners";
import { Toast } from "@/components/ui/toast";
export default function Home() {
    const { isDialogOpen, closeDialog } = useDialog();

  return (
    <div className="max-w-screen relative overflow-hidden">
      <Navbar/>
      <main className="">   
        <Hero/>
        <Services/>
        <WhyChooseUs/>
        <Portfolio/>
         <ConstructionPackages/>
         <CustomerReviews/>
         <BankingPartners/>
        <ContactUsSection/>
        <ContactDialog isOpen={isDialogOpen} onClose={closeDialog} />
        <Toast />
      </main>
      <Footer/>
    </div>
  );
}
