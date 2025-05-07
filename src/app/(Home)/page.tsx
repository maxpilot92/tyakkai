import Navbar from "@/components/Navbar";
import HeroSection from "./_components/HeroSection";
import { getServices } from "@/utils/getServices";
import { getCategories } from "@/utils/getCategories";
import { getPortfolio } from "@/utils/getPortfolio";
import { getTestimonials } from "@/utils/getTestimonial";
import { getBlogs } from "@/utils/getBlogs";

export default async function Home() {
  const services = await getServices();
  const serviceCategories = await getCategories("service");
  const portfolio = await getPortfolio();
  const testimonials = await getTestimonials();
  const blog = await getBlogs();
  console.log("blog", blog);
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
