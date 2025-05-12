"use client";
import TabCarousel from "@/components/TabCarousel";
import { useEffect, useState } from "react";
import useServiceStore from "@/store/ServiceStore";
import type { Category } from "@/types/Category";
import { motion } from "framer-motion";
import useServiceCategoryStore from "@/store/ServiceCategoryStore";
import AnimatedButton from "@/components/AnimatedButton";

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

      if (showAll) {
        setData(filtered || []);
      } else {
        // Limit to 3 services when showAll is false
        setData((filtered || []).slice(0, 3));
      }

      setShowList((filtered?.length || 0) > 3 && !showAll);
    }
  }, [activeCategory, services, showAll]);

  if (!data || data.length === 0) {
    return <>No services found.</>;
  }

  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 mb-10 flex items-center justify-center bg-[#F5F7FE] overflow-hidden">
      <div>
        <div className="flex flex-col items-start justify-center pl-9 pt-10">
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

        <div className="mt-4 mb-10 flex flex-wrap gap-8 ml-4 md:ml-0 w-full items-center lg:pl-4">
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
          <div className="flex justify-end w-full mb-10">
            <AnimatedButton
              onClick={() => {
                setShowAll(true);
                setData(services);
              }}
            >
              Read More
            </AnimatedButton>
          </div>
        )}
      </div>
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
  console.log(cursor1, cursor2, imageUrl);
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 30 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.6, ease: "easeOut" }}
    //   whileHover={{ scale: 1.03 }}
    //   viewport={{ once: true }}
    //   className="bg-[#faf0e6] mx-auto rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-auto md:h-[490px] sm:w-[350px] md:w-[400px]"
    // >
    //   <div className="py-6 md:py-10 px-5 md:px-8 flex flex-col gap-6 md:gap-8">
    //     <h2
    //       style={{ letterSpacing: "-0.08em" }}
    //       className="text-2xl md:text-4xl font-semibold leading-snug text-center text-black"
    //     >
    //       {title}
    //     </h2>

    //     <div className="relative h-[150px] md:h-[190px] overflow-hidden flex items-center justify-center w-full">
    //       <Image
    //         src={
    //           imageUrl ||
    //           "https://res.cloudinary.com/dipagek5z/image/upload/v1745829714/adminportal/yepjsgefkswll05luoas.jpg"
    //          || "/placeholder.svg"}
    //         alt="Card Image"
    //         width={400}
    //         height={400}
    //         className="object-cover rounded-lg"
    //       />
    //       {cursor1 && (
    //         <MoveEffect
    //           imageUrl={cursor1}
    //           orientation="left"
    //           className="top-20 md:top-28 left-8 md:left-16"
    //         />
    //       )}
    //       {cursor2 && <MoveEffect imageUrl={cursor2} className="right-0" />}
    //     </div>

    //     <p className="text-black text-xs md:text-sm font-medium text-center">
    //       {description}
    //     </p>
    //   </div>
    // </motion.div>

    <div className="w-[390px] h-[455px] bg-white rounded-[2rem] p-8 text-center shadow-md flex flex-col justify-between border group hover:border-black duration-600">
      <div>
        <div className="w-[120px] h-[100px] mx-auto mb-6 bg-black group-hover:bg-[#ffc700] duration-600 rounded-xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 67 67"
            fill="none"
            className="text-white group-hover:text-black duration-600"
          >
            <g clipPath="url(#clip0_240_4)">
              <path
                d="M11.1677 27.9139H5.58496C5.58496 49.4997 23.082 67 44.6677 67V61.4164C26.1649 61.4164 11.1677 46.4168 11.1677 27.9139Z"
                fill="currentColor"
              ></path>
              <path
                d="M44.6683 5.58348V-0.00012207C29.2492 -0.00012207 16.752 12.4971 16.752 27.9138C16.752 43.333 29.2492 55.8335 44.6683 55.8335V50.2499C32.3329 50.2499 22.3356 40.2501 22.3356 27.9146C22.3356 15.5833 32.3327 5.58348 44.6683 5.58348Z"
                fill="currentColor"
              ></path>
              <path
                d="M44.666 11.1663C35.4133 11.1663 27.916 18.6636 27.916 27.9139C27.916 37.1666 35.4133 44.6663 44.666 44.6663V27.9163L61.416 27.9139C61.416 18.6636 53.9196 11.1663 44.666 11.1663Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>
        <h3 className="text-[28px] font-semibold mb-2">{title}</h3>
        <p className="text-[#666666] leading-relaxed font-normal text-lg">
          {description}
        </p>
      </div>
      <a
        href="#"
        className="text-black group-hover:text-[#666666] text-lg font-medium underline underline-offset-4 hover:text-blue-600 transition mb-10 duration-600"
      >
        Read More
      </a>
    </div>
  );
}
