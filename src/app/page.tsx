import Image from "next/image";
import { AppHeader } from "@/components/app-header";
import { HeroSection } from "@/components/hero-section";
import { ProductSection } from "@/components/product-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
       <AppHeader />
        <HeroSection />
        <ProductSection />

   </main>
  );
}
