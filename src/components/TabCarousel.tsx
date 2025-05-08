"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import useServiceCategoryStore from "@/store/ServiceCategoryStore";
import { Category } from "@/types/Category";

export default function TabCarousel({
  setActiveCategory,
  activeIndex,
  setActiveIndex,
}: {
  setActiveCategory?: (category: string) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controls: AnimationControls = useAnimation();

  const [activeTab, setActiveTab] = useState<Category[]>([]);

  const { serviceCategory } = useServiceCategoryStore();

  useEffect(() => {
    setActiveTab(serviceCategory);
  }, [serviceCategory]);

  const centerTab = async (index: number) => {
    const container = containerRef.current;
    const tab = tabRefs.current[index];

    if (container && tab) {
      const containerWidth = container.offsetWidth;
      const tabWidth = tab.offsetWidth;
      const tabOffset = tab.offsetLeft;
      const scrollOffset = tabOffset - (containerWidth / 2 - tabWidth / 2);

      await controls.start({
        x: -scrollOffset,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        },
      });
    }
  };

  useEffect(() => {
    if (activeTab.length > 0) {
      centerTab(activeIndex);
    }
  }, [activeTab, activeIndex]);

  return (
    <div className="w-full px-4 relative ">
      <div
        ref={containerRef}
        className="overflow-hidden w-full scrollbar-hide flex justify-center items-center"
      >
        <motion.div
          className="flex gap-3 px-2 py-4"
          animate={controls}
          initial={{ x: 0 }}
          style={{ willChange: "transform" }}
        >
          {activeTab.map((tab, i) => (
            <motion.div
              key={tab.id || i}
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
              whileHover={{ scale: activeIndex === i ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                min-w-max px-6 py-3 cursor-pointer rounded-full text-center
                transition-all duration-1000 ease-out
                border border-transparent
                ${
                  activeIndex === i
                    ? "bg-[#ffc700] text-white font-semibold shadow-md"
                    : "bg-[#faf0e6] text-gray-700 hover:bg-[#ffc700]/20"
                }
                relative overflow-hidden
                group
                focus:outline-none focus:ring-2 focus:ring-[#ffc700]/50
              `}
              tabIndex={0}
              aria-selected={activeIndex === i}
              role="tab"
            >
              {/* Active indicator */}
              {activeIndex === i && (
                <motion.span
                  className="absolute inset-0 bg-yellow-500/20 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              )}

              <span className="relative z-10 flex items-center justify-center gap-2">
                {tab.name}
                {activeIndex === i && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                )}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows (optional) */}
      {activeTab.length > 5 && (
        <>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
            onClick={() =>
              setActiveIndex(
                activeIndex > 0 ? activeIndex - 1 : activeTab.length - 1
              )
            }
          >
            &larr;
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
            onClick={() =>
              setActiveIndex(
                activeIndex < activeTab.length - 1 ? activeIndex + 1 : 0
              )
            }
          >
            &rarr;
          </button>
        </>
      )}
    </div>
  );
}
