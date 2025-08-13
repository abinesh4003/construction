import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerReviews from "@/components/CustomerReviews";
import ConstructionPackages from "@/components/ConstructionPackages";
import CompetitiveAdvantage from "@/components/competitiveAdvantage";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="max-w-screen relative overflow-hidden">
      <Navbar/>
      <main className="">
        <Hero/>
        <WhyChooseUs/>
        <Portfolio/>
        <CustomerReviews/>
        <CompetitiveAdvantage/>
        <ConstructionPackages/>
        <ContactUsSection/>
      </main>
      <Footer/>
    </div>
  );
}
