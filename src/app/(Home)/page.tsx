import Navbar from "@/components/Navbar";
import HeroSection from "./_components/HeroSection";
import { getServices } from "@/utils/getServices";
import { getCategories } from "@/utils/getCategories";
import { getPortfolio } from "@/utils/getPortfolio";

export default async function Home() {
  const services = await getServices();
  const serviceCategories = await getCategories("service");
  const portfolio = await getPortfolio();
  return (
    <div>
      <Navbar />
      <div className="relative">
        <HeroSection
          services={services}
          serviceCategories={serviceCategories}
          portfolio={portfolio}
        />
        {/* <ImageScroll /> */}
      </div>
      {/* <MarqueeLogo /> */}
    </div>
  );
}
