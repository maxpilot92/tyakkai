"use client";
import Image from "next/image";
import MoveEffect from "@/components/MoveEffect";
import TabCarousel from "@/components/TabCarousel";
import { useEffect, useState } from "react";
import useServiceStore from "@/store/ServiceStore";
import { Category } from "@/types/Category";
import { motion } from "framer-motion";

export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date if you parse it
  cursor1?: string;
  cursor2?: string;
  Category: Category;
}
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};
export function Services() {
  const { services } = useServiceStore();
  const [data, setData] = useState<Service[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    if (services) {
      setData(services);
    }
  }, [services]);

  useEffect(() => {
    if (activeCategory) {
      const filteredData = services?.filter(
        (item) => item.Category.name === activeCategory
      );
      setData(filteredData || []);
    } else {
      setData(services);
    }
  }, [activeCategory, services]);

  if (!data) {
    return <>no data</>;
  }

  return (
    <div className="w-full mx-auto my-10">
      <motion.div
        style={{ letterSpacing: "-2px" }}
        className="text-center px-4 lg:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="mx-auto text-5xl font-medium text-black dark:text-white max-w-[675px]">
          All design, branding and marketing services for you
        </h1>
      </motion.div>

      <motion.div
        className="flex w-full items-start mt-10 justify-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <TabCarousel setActiveCategory={setActiveCategory} />
      </motion.div>

      {/* Cards section */}
      <motion.div
        className="lg:mt-20 my-10 flex flex-wrap gap-8 ml-4 md:ml-0 w-full items-center"
        initial="hidden"
        whileInView="visible"
        variants={containerVariant}
        viewport={{ once: true }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={textVariant}
            className="flex flex-col lg:flex-row gap-10 lg:gap-10 mb-10"
          >
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.image}
              cursor2={item.cursor2}
              cursor1={item.cursor1}
            />
          </motion.div>
        ))}
      </motion.div>
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
