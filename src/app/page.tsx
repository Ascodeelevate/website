import Image from "next/image";
import { AppHeader, HeroSection, ProductSection,ServicesSection, AboutUsSection } from "../components";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
       <AppHeader />
        <HeroSection />
        <ProductSection />
        <ServicesSection />
        <AboutUsSection />

   </main>
  );
}
