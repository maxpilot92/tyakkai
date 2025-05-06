import Navbar from "@/components/Navbar";
import HeroSection from "./_components/HeroSection";
import { getServices } from "@/utils/getServices";
import { getCategories } from "@/utils/getCategories";
import { getPortfolio } from "@/utils/getPortfolio";
import { getTestimonials } from "@/utils/getTestimonial";

export default async function Home() {
  const services = await getServices();
  const serviceCategories = await getCategories("service");
  const portfolio = await getPortfolio();
  const testimonials = await getTestimonials();
  console.log("Testimonial response:", testimonials);

  return (
    <div>
      <Navbar />
      <div className="relative">
        <HeroSection
          services={services}
          serviceCategories={serviceCategories}
          portfolio={portfolio}
          testimonials={testimonials}
        />
        {/* <ImageScroll /> */}
      </div>
      {/* <MarqueeLogo /> */}
    </div>
  );
}
