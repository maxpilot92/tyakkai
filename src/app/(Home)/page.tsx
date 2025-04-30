import Navbar from "@/components/Navbar";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <HeroSection />
        {/* <ImageScroll /> */}
      </div>
      {/* <MarqueeLogo /> */}
    </div>
  );
}
