import Image from "next/image";
import { 
  AppHeader, 
  HeroSection, 
  ProductSection,
  ServicesSection, 
  AboutUsSection, 
  Testimonials,
  Footer,
  CTA
} from "../components";

export default function Home() {
  return (
    <main className="min-h-screen bg-white"> 
        <HeroSection />
        <ProductSection />
        <ServicesSection />
        <AboutUsSection />
        <CTA />
        

   </main>
  );
}
