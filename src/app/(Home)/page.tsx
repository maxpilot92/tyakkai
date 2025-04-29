import Navbar from "@/components/Navbar";
import HeroSection from "./_components/HeroSection";
import ImageScroll from "./_components/ContainerScroll";
import { MarqueeLogo } from "./_components/Marquee";
import ShortStory from "./_components/ShortStory";
import Offering from "./_components/Offering";
import { Services } from "./_components/Services";
import { HeroParallaxDemo } from "./_components/HeroParallax";
import { AnimatedTestimonialsDemo } from "./_components/Testimonial";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ImageScroll />
      <MarqueeLogo />
      <ShortStory />
      <Offering />
      <Services />
      <HeroParallaxDemo />
      <AnimatedTestimonialsDemo />

      <Footer />
    </div>
  );
}
