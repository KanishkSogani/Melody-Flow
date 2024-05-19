import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className=" min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
