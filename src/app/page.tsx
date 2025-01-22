import { 
  HeroSection, 
  ProductSection,
  ServicesSection, 
  AboutUsSection, 
  CTA,
  TrustedClients,
  Testimonial
} from "../components";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-white"> 
        <HeroSection />
        <ProductSection />
        <ServicesSection />
        <AboutUsSection />
        <Testimonial />
        <TrustedClients />
        <CTA />
   </main>
  );
}
