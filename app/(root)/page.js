import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import EducatorProfile from "@/components/educatorProfile/EducatorProfile";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import PricingSection from "@/components/pricing/PricingSection";

export default function Home() {
  return (
    <div className="bg-[#020906]">
      <HeroSection />
      <EducatorProfile />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
}
