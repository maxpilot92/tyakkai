import Navbar from "@/components/Navbar";
import HeroSection from "./_components/HeroSection";
import { getServices } from "@/utils/getServices";
import { getCategories } from "@/utils/getCategories";

export default async function Home() {
  const services = await getServices();
  const serviceCategories = await getCategories("service");
  return (
    <div>
      <Navbar />
      <div className="relative">
        <HeroSection
          services={services}
          serviceCategories={serviceCategories}
        />
        {/* <ImageScroll /> */}
      </div>
      {/* <MarqueeLogo /> */}
    </div>
  );
}
