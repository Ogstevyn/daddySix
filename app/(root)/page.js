import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import EducatorProfile from "@/components/educatorProfile/EducatorProfile";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EducatorProfile />
      <TestimonialsSection />
    </>
  );
}
