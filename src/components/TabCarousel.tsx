"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import useServiceCategoryStore from "@/store/ServiceCategory";
import { Category } from "@/types/Category";

export default function TabCarousel({
  setActiveCategory,
}: {
  setActiveCategory?: (category: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controls: AnimationControls = useAnimation();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<Category[]>([]);

  const { serviceCategory } = useServiceCategoryStore();
  useEffect(() => {
    setActiveTab(serviceCategory);
  }, [serviceCategory]);

  const centerTab = async (index: number) => {
    const container = containerRef.current;
    const tab = tabRefs.current[index];

    if (container && tab) {
      const offset =
        tab.offsetLeft - (container.offsetWidth / 2 - tab.offsetWidth / 2);

      await controls.start({
        x: -offset,
        transition: {
          type: "tween",
          stiffness: 300,
          damping: 30,
          duration: 1,
        },
      });
    }
  };
  useEffect(() => {
    if (activeTab) centerTab(activeIndex);
  }, [activeTab]);

  return (
    <div className="max-w-[400px] relative p-2 before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:left-0 after:right-0 before:w-12 after:w-12 before:h-full after:h-full before:z-10 after:z-10 before:pointer-events-none after:pointer-events-none before:bg-gradient-to-r after:bg-gradient-to-l before:from-white dark:before:from-[#0f0f0f] before:to-transparent after:from-white dark:after:from-[#0f0f0f] after:to-transparent">
      <div ref={containerRef} className="overflow-hidden w-full scrollbar-hide">
        <motion.div
          className="flex gap-4 px-2 scroll-snap-x"
          animate={controls}
          initial={{ x: 0 }}
        >
          {activeTab.map((tab, i) => (
            <div
              key={i}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              onClick={() => {
                setActiveIndex(i);
                centerTab(i);
                if (setActiveCategory) {
                  setActiveCategory(tab.name);
                }
              }}
              className={`min-w-max px-4 py-2 cursor-pointer rounded-full text-center bg-white text-[#bdbdbd] scroll-snap-align-center ${
                activeIndex === i ? "text-[#ffc700] font-bold shadow-2xl" : ""
              }`}
            >
              {tab.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
