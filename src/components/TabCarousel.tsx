"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import useServiceCategoryStore from "@/store/ServiceCategoryStore";
import type { Category } from "@/types/Category";

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
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controls = useAnimation();

  const [activeTab, setActiveTab] = useState<Category[]>([]);
  // const [showLeftArrow, setShowLeftArrow] = useState(false);
  // const [showRightArrow, setShowRightArrow] = useState(true);

  const { serviceCategory } = useServiceCategoryStore();

  useEffect(() => {
    setActiveTab(serviceCategory);
  }, [serviceCategory]);

  const updateArrowVisibility = () => {
    if (!containerRef.current || !tabsContainerRef.current) return;

    // const container = containerRef.current;
    // const tabsContainer = tabsContainerRef.current;
    // const currentX = Number.parseFloat(
    //   tabsContainer.style.transform
    //     ?.replace("translateX(", "")
    //     .replace("px)", "") || "0"
    // );
    // const maxScroll = tabsContainer.scrollWidth - container.offsetWidth;

    // setShowLeftArrow(currentX < 0);
    // setShowRightArrow(-currentX < maxScroll);
  };

  const scrollToTab = (index: number) => {
    const container = containerRef.current;
    const tab = tabRefs.current[index];

    if (container && tab) {
      const containerWidth = container.offsetWidth;
      const tabWidth = tab.offsetWidth;
      const tabLeft = tab.offsetLeft;

      // Calculate the center position
      const scrollPosition = tabLeft - containerWidth / 2 + tabWidth / 2;

      controls
        .start({
          x: -Math.max(0, scrollPosition),
          transition: {
            type: "tween", // Change to tween for smoother motion
            ease: "easeInOut",
            duration: 0.6,
          },
        })
        .then(updateArrowVisibility);
    }
  };

  // const scrollLeft = () => {
  //   if (!containerRef.current || !tabsContainerRef.current) return;

  //   const container = containerRef.current;
  //   const currentX = Number.parseFloat(
  //     tabsContainerRef.current.style.transform
  //       ?.replace("translateX(", "")
  //       .replace("px)", "") || "0"
  //   );
  //   const scrollAmount = container.offsetWidth * 0.6; // Reduced scroll amount for smoother transitions

  //   controls
  //     .start({
  //       x: Math.min(0, currentX + scrollAmount),
  //       transition: {
  //         type: "tween",
  //         ease: "easeInOut",
  //         duration: 0.35,
  //       },
  //     })
  //     .then(updateArrowVisibility);
  // };

  // const scrollRight = () => {
  //   if (!containerRef.current || !tabsContainerRef.current) return;

  //   const container = containerRef.current;
  //   const tabsContainer = tabsContainerRef.current;
  //   const currentX = Number.parseFloat(
  //     tabsContainer.style.transform
  //       ?.replace("translateX(", "")
  //       .replace("px)", "") || "0"
  //   );
  //   const scrollAmount = container.offsetWidth * 0.6; // Reduced scroll amount for smoother transitions
  //   const maxScroll = tabsContainer.scrollWidth - container.offsetWidth;

  //   controls
  //     .start({
  //       x: Math.max(-maxScroll, currentX - scrollAmount),
  //       transition: {
  //         type: "tween",
  //         ease: "easeInOut",
  //         duration: 0.6,
  //       },
  //     })
  //     .then(updateArrowVisibility);
  // };

  useEffect(() => {
    if (activeTab.length > 0) {
      scrollToTab(activeIndex);
    }
  }, [activeTab, activeIndex]);

  useEffect(() => {
    // Initialize arrow visibility
    if (activeTab.length > 0) {
      updateArrowVisibility();
    }

    // Add resize listener to update arrows when window size changes
    const handleResize = () => {
      updateArrowVisibility();
      scrollToTab(activeIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab, activeIndex]);

  return (
    <div
      className="overflow-hidden relative p-2 
      before:content-[''] after:content-[''] 
      before:absolute after:absolute 
      before:top-0 after:top-0 
      before:left-0 after:right-0 
      before:w-16 after:w-16 before:h-full after:h-full 
      before:z-10 after:z-10 
      before:pointer-events-none after:pointer-events-none 
      before:bg-gradient-to-r after:bg-gradient-to-l 
      before:from-[#F5F7FE] dark:before:from-[#0f0f0f] 
      before:to-transparent after:from-[#F5F7FE] 
      dark:after:from-[#0f0f0f] after:to-transparent ml-4"
    >
      <div
        ref={containerRef}
        className="overflow-hidden lg:w-[600px] scrollbar-hide"
      >
        <motion.div
          ref={tabsContainerRef}
          className="flex gap-3 px-4 py-4 w-max"
          animate={controls}
          initial={{ x: 0 }}
          style={{
            willChange: "transform",
            transform: "translateZ(0)", // Add hardware acceleration
          }}
        >
          {activeTab.map((tab, i) => (
            <motion.div
              key={tab.id || i}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              onClick={() => {
                setActiveIndex(i);
                scrollToTab(i);
                if (setActiveCategory) {
                  setActiveCategory(tab.name);
                }
              }}
              whileHover={{ scale: activeIndex === i ? 1 : 1.03 }} // Reduced scale for smoother hover
              whileTap={{ scale: 0.98 }} // Less aggressive scale on tap
              transition={{ type: "tween", duration: 0.2 }} // Add smoother transition
              className={`
                min-w-max px-6 py-2 cursor-pointer rounded-full text-center
                transition-all duration-200 ease-out bg-white
                ${
                  activeIndex === i
                    ? " text-[#ffc700] font-semibold shadow-md"
                    : " text-gray-400 "
                }
                relative overflow-hidden
                focus:outline-none 
              `}
              tabIndex={0}
              aria-selected={activeIndex === i}
              role="tab"
              style={{ transform: "translateZ(0)" }} // Add hardware acceleration
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {tab.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
