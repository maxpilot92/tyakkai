"use client";
import { Asterisk } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ShortStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textSpanVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: -90 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      rotate: 90,
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col md:flex-row items-start justify-between w-full max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="flex items-center gap-2 mb-6 md:mb-0"
          variants={titleVariants}
        >
          <motion.div variants={iconVariants} whileHover="hover">
            <Asterisk className="h-6 w-6 text-orange-500" />
          </motion.div>
          <motion.span className="text-lg font-medium" variants={itemVariants}>
            Our short story
          </motion.span>
        </motion.div>
        <motion.div className="max-w-3xl" variants={containerVariants}>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight">
            <motion.span
              custom={0}
              variants={textSpanVariants}
              className="text-black inline-block"
            >
              Our work speaks for itself. Browse our portfolio to see how{" "}
            </motion.span>
            <motion.span
              custom={1}
              variants={textSpanVariants}
              className="text-gray-400 inline-block"
            >
              we&apos;ve helped{" "}
            </motion.span>
            <motion.span
              custom={2}
              variants={textSpanVariants}
              className="text-black inline-block"
            >
              businesses like yours{" "}
            </motion.span>
            <motion.span
              custom={3}
              variants={textSpanVariants}
              className="text-gray-400 inline-block"
            >
              with branding,{" "}
            </motion.span>
            <motion.span
              custom={4}
              variants={textSpanVariants}
              className="text-black inline-block"
            >
              web design,{" "}
            </motion.span>
            <motion.span
              custom={5}
              variants={textSpanVariants}
              className="text-gray-400 inline-block"
            >
              and more...
            </motion.span>
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
}
