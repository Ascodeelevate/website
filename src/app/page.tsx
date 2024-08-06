import Image from "next/image";
import { AppHeader, HeroSection, ProductSection,ServicesSection } from "../components";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
       <AppHeader />
        <HeroSection />
        <ProductSection />
        <ServicesSection />

   </main>
  );
}
