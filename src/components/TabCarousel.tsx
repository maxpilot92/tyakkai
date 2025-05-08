"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import useServiceCategoryStore from "@/store/ServiceCategoryStore";
import type { Category } from "@/types/Category";
import { ChevronRight } from "lucide-react";

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
  const [showRightArrow, setShowRightArrow] = useState(true);

  const { serviceCategory } = useServiceCategoryStore();

  useEffect(() => {
    setActiveTab(serviceCategory);
  }, [serviceCategory]);

  const updateArrowVisibility = () => {
    if (!containerRef.current || !tabsContainerRef.current) return;

    const container = containerRef.current;
    const tabsContainer = tabsContainerRef.current;
    const currentX = Number.parseFloat(
      tabsContainer.style.transform
        ?.replace("translateX(", "")
        .replace("px)", "") || "0"
    );
    const maxScroll = tabsContainer.scrollWidth - container.offsetWidth;

    // setShowLeftArrow(currentX < 0);
    setShowRightArrow(-currentX < maxScroll);
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
            duration: 0.35,
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

  const scrollRight = () => {
    if (!containerRef.current || !tabsContainerRef.current) return;

    const container = containerRef.current;
    const tabsContainer = tabsContainerRef.current;
    const currentX = Number.parseFloat(
      tabsContainer.style.transform
        ?.replace("translateX(", "")
        .replace("px)", "") || "0"
    );
    const scrollAmount = container.offsetWidth * 0.6; // Reduced scroll amount for smoother transitions
    const maxScroll = tabsContainer.scrollWidth - container.offsetWidth;

    controls
      .start({
        x: Math.max(-maxScroll, currentX - scrollAmount),
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 0.35,
        },
      })
      .then(updateArrowVisibility);
  };

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
    <div className="w-full relative">
      <div
        ref={containerRef}
        className="overflow-hidden w-[600px] scrollbar-hide"
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
                min-w-max px-6 py-3 cursor-pointer rounded-full text-center
                transition-all duration-200 ease-out
                ${
                  activeIndex === i
                    ? "bg-[#ffc700] text-white font-semibold shadow-md"
                    : "bg-[#faf0e6] text-gray-700 hover:bg-[#ffc700]/20"
                }
                relative overflow-hidden
                focus:outline-none focus:ring-2 focus:ring-[#ffc700]/50
              `}
              tabIndex={0}
              aria-selected={activeIndex === i}
              role="tab"
              style={{ transform: "translateZ(0)" }} // Add hardware acceleration
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {tab.name}
                {activeIndex === i && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "tween", duration: 0.2 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                )}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      )}
    </div>
  );
}
