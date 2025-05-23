"use client";
import { motion } from "framer-motion";
import { Cormorant } from "next/font/google";
import ImageScroll from "./ContainerScroll";
import { MarqueeLogo } from "./Marquee";
import ShortStory from "./ShortStory";
import Offering from "./Offering";
import { Service, Services } from "./Services";
import Footer from "@/components/footer";
import TestimonialCarousel from "./Testimonial";
import Faq from "./Faq";
import HorizontalScrollingCarousel from "./HorizontalScrollingCarousel";
import useServiceStore from "@/store/ServiceStore";
import { useEffect } from "react";
import useServiceCategoryStore from "@/store/ServiceCategoryStore";
import { Category } from "@/types/Category";
import { Portfolio } from "@/types/Portfolio";
import PortfolioPage from "./Portfolio";
import usePortfolioStore from "@/store/PortfolioStore";
import { Testimonial } from "@/types/Testimonial";
import useTestimonialStore from "@/store/TestimonialStore";
import { Blog } from "@/types/Blog";
import useBlogStore from "@/store/BlogStore";

const cormorantFont = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500"], // include italic weights!
  style: ["normal", "italic"],
});
export default function HeroSection({
  services,
  serviceCategories,
  portfolio,
  testimonials,
  blog,
}: {
  services?: Service[];
  serviceCategories?: Category[];
  portfolio?: Portfolio[];
  testimonials?: Testimonial[];
  blog?: Blog[];
}) {
  const { setServices } = useServiceStore();
  const { setServiceCategory } = useServiceCategoryStore();
  const { setPortfolio } = usePortfolioStore();
  const { setTestimonial } = useTestimonialStore();
  const { setBlog } = useBlogStore();

  useEffect(() => {
    if (services) {
      setServices(services); // Only set the services if they exist
    }
  }, [services, setServices]);

  useEffect(() => {
    if (serviceCategories) {
      const uniqueCategories = [
        ...new Map(serviceCategories?.map((c) => [c.name, c])).values(),
      ];
      setServiceCategory(uniqueCategories); // Only set the service categories if they exist
    }
  }, [serviceCategories, setServiceCategory]);

  useEffect(() => {
    if (portfolio) {
      setPortfolio(portfolio);
    }
  }, []);

  useEffect(() => {
    if (testimonials) {
      setTestimonial(testimonials);
    }
  }, [testimonials, setPortfolio]);

  useEffect(() => {
    if (blog) {
      setBlog(blog);
    }
  }, [blog, setBlog]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "130vh",
        marginBottom: "250px",
      }}
      className="rounded-4xl md:mx-10 -mr-10"
    >
      <motion.section
        className="min-h-[70vh] flex flex-col justify-center items-center rounded-4xl px-4 md:px-8 lg:px-16 relative overflow-x-hidden mb-10 lg:mb-20 "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background gradient element */}
        {/* <div className="absolute inset-0 bg-black/5 -z-10" /> */}

        {/* Accent circle */}
        <motion.div
          className="absolute top-1/4 right-0 md:-right-20 w-40 md:w-80 h-40 md:h-80 rounded-full bg-[#ffc700]/20 blur-3xl opacity-70 -z-5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Headings */}
        <div className={`text-center mb-8 md:mb-10 lg:mb-12 max-w-3xl`}>
          <motion.h2
            className="tracking-[-0.05em] text-[80px] font-medium leading-[115%]"
            variants={itemVariants}
          >
            <span style={{ letterSpacing: "-0.08em" }}>Take your </span>

            <motion.span
              className={`italic font-medium font-cormorant  ${cormorantFont.className}`}
            >
              Brand
            </motion.span>
          </motion.h2>

          <motion.h1
            className="tracking-[-0.01em] text-[80px] font-medium leading-[115%]"
            variants={itemVariants}
          >
            To New Heights
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto md:mt-5 leading-relaxed"
            variants={itemVariants}
          >
            Tyakkai Solution is the leading digital marketing agency, offering
            innovative solutions to propel your brand’s success in the
            ever-evolving digital landscape.
          </motion.p>

          {/* <Image className="z-0" src={Thread} alt="Thread" fill /> */}
        </div>

        {/* Floating design elements */}
        <motion.div
          className="absolute -left-10 bottom-20 w-20 h-20 rounded-full border border-[#ffc700]/30"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.div
          className="absolute right-20 top-20 w-10 h-10 rounded-full bg-[#ffc700]/20"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <motion.div
          className="absolute left-1/4 bottom-10 w-6 h-6 rounded-md bg-[#ffc700]/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{
            duration: 1,
            delay: 1.4,
            yoyo: Infinity,
            repeatDelay: 2,
          }}
        />
      </motion.section>
      <ImageScroll />

      <div className="relative w-full bg-background">
        <div className="max-w-screen mx-auto">
          <MarqueeLogo />
          <ShortStory />
          <hr />
          <Offering />
          {/* <Scrolling /> */}
          <Services />

          <HorizontalScrollingCarousel />
          {/* <HeroParallaxDemo /> */}
          <PortfolioPage />
          <TestimonialCarousel />
          <div className="mb-20 -mx-10">
            <Faq />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
