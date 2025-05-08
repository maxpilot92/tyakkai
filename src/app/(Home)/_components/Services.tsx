"use client";
import Image from "next/image";
import MoveEffect from "@/components/MoveEffect";
import TabCarousel from "@/components/TabCarousel";
import { useEffect, useState } from "react";
import useServiceStore from "@/store/ServiceStore";
import { Category } from "@/types/Category";
import { motion } from "framer-motion";
import useServiceCategoryStore from "@/store/ServiceCategoryStore";

export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  cursor1?: string;
  cursor2?: string;
  Category: Category;
}

export function Services() {
  const { services } = useServiceStore();
  const { serviceCategory } = useServiceCategoryStore();
  const [data, setData] = useState<Service[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [showList, setShowList] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (serviceCategory && serviceCategory.length > 0) {
      const len = serviceCategory.length;
      const middleIndex = Math.floor(len / 2);
      const defaultCategory = services[middleIndex + 1]?.Category.name;
      if (defaultCategory) {
        setActiveCategory(defaultCategory);
        setActiveIndex(
          serviceCategory.findIndex((c) => c.name === defaultCategory)
        );
        setShowAll(false);
      }
    }
  }, [serviceCategory]);

  // Initial load: limit to 3 unless showAll is true
  useEffect(() => {
    if (!activeCategory && services) {
      if (showAll) {
        setData(services);
        setShowList(false);
      } else if (services.length > 3) {
        setData(services.slice(0, 3));
        setShowList(true);
      } else {
        setData(services);
        setShowList(false);
      }
    }
  }, [services, showAll, activeCategory]);

  // Filter by category
  useEffect(() => {
    if (activeCategory) {
      const filtered = services?.filter(
        (item) => item.Category.name === activeCategory
      );
      setData(filtered || []);
      setShowList((filtered?.length || 0) > 3 && !showAll);
    }
  }, [activeCategory, services, showAll]);

  if (!data || data.length === 0) {
    return <>No services found.</>;
  }

  return (
    <div className="w-full mx-10 my-10">
      <div className="flex flex-col items-start justify-center ">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          style={{ letterSpacing: "-2px" }}
          className=" text-3xl md:text-4xl lg:text-[56px] font-medium text-center text-black ml-3 sm:ml-0"
        >
          All design, branding &
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          style={{ letterSpacing: "-2px" }}
          className=" text-3xl md:text-4xl lg:text-[56px] font-medium text-center text-black ml-3 sm:ml-0"
        >
          Marketing services for you
        </motion.h1>
      </div>

      <div className="flex w-full items-start mt-10 justify-start">
        <TabCarousel
          setActiveCategory={setActiveCategory}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>

      <div className="lg:mt-20 mb-10 flex flex-wrap gap-8 ml-4 md:ml-0 w-full items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-10 lg:gap-10 mb-10"
          >
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.image}
              cursor2={item.cursor2}
              cursor1={item.cursor1}
            />
          </div>
        ))}
      </div>

      {showList && !showAll && (
        <div className="text-center w-full">
          {/* <button
            onClick={() => {
              setShowAll(true);
              setData(services);
            }}
            className="mt-4 text-blue-600 hover:underline font-semibold"
          >
            View All Services
          </button> */}
        </div>
      )}
    </div>
  );
}

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  cursor1?: string;
  cursor2?: string;
};

function Card({ title, description, imageUrl, cursor1, cursor2 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
      className="bg-[#faf0e6] mx-auto rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-auto md:h-[490px] w-full sm:w-[350px] md:w-[400px]"
    >
      <div className="py-6 md:py-10 px-5 md:px-8 flex flex-col gap-6 md:gap-8">
        <h2
          style={{ letterSpacing: "-0.08em" }}
          className="text-2xl md:text-4xl font-semibold leading-snug text-center text-black"
        >
          {title}
        </h2>

        <div className="relative h-[150px] md:h-[190px] overflow-hidden flex items-center justify-center w-full">
          <Image
            src={
              imageUrl ||
              "https://res.cloudinary.com/dipagek5z/image/upload/v1745829714/adminportal/yepjsgefkswll05luoas.jpg"
            }
            alt="Card Image"
            width={400}
            height={400}
            className="object-cover rounded-lg"
          />
          {cursor1 && (
            <MoveEffect
              imageUrl={cursor1}
              orientation="left"
              className="top-20 md:top-28 left-8 md:left-16"
            />
          )}
          {cursor2 && <MoveEffect imageUrl={cursor2} className="right-0" />}
        </div>

        <p className="text-black text-xs md:text-sm font-medium text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
