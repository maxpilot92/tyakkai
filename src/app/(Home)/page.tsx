import Navbar from "@/components/Navbar";
import HeroSection from "./_components/HeroSection";
import { getServices } from "@/utils/getServices";
import { getCategories } from "@/utils/getCategories";
import { getPortfolio } from "@/utils/getPortfolio";
import { getTestimonials } from "@/utils/getTestimonial";
import { getBlogs } from "@/utils/getBlogs";

export default async function Home() {
  const [services, serviceCategories, portfolio, testimonials, blog] =
    await Promise.all([
      getServices(),
      getCategories("service"),
      getPortfolio(),
      getTestimonials(),
      getBlogs(),
    ]);
  return (
    <div>
      <Navbar />
      <div className="relative">
        <HeroSection
          services={services}
          serviceCategories={serviceCategories}
          portfolio={portfolio}
          testimonials={testimonials}
          blog={blog}
        />
        {/* <ImageScroll /> */}
      </div>
      {/* <MarqueeLogo /> */}
    </div>
  );
}
