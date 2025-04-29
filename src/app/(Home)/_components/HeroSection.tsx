"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
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
    <motion.section
      className="min-h-[85vh] flex flex-col justify-center items-center rounded-4xl px-4 md:px-8 lg:px-16 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background gradient element */}
      <div className="absolute inset-0 bg-black/5 -z-10" />

      {/* Accent circle */}
      <motion.div
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-[#ffc700]/20 blur-3xl opacity-70 -z-5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* Headings */}
      <div className="text-center mb-8 md:mb-10 lg:mb-12 max-w-3xl">
        <motion.h2
          className="text-lg md:text-xl font-medium text-[#ffc700] mb-2 tracking-wider"
          variants={itemVariants}
        >
          Unlimited Design
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight"
          variants={itemVariants}
        >
          Anytime You Need It
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          We offer fast, high-quality design solutions through a subscription
          model, giving you access to unlimited creativity without the hassle.
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-6"
        variants={itemVariants}
      >
        <Button
          className="group relative overflow-hidden bg-[#ffc700] hover:bg-[#ffc700]/90 text-black px-6 py-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out w-64"
          size="lg"
        >
          <span className="flex items-center justify-center gap-2 absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-x-full">
            Get Started <ArrowRight className="h-4 w-4" />
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
            Explore Plans <ArrowRight className="h-4 w-4 ml-1" />
          </span>
        </Button>

        <Button
          className="group relative overflow-hidden bg-transparent text-black hover:text-[#ffc700] border border-black hover:border-[#ffc700] px-6 py-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out w-64"
          variant="outline"
          size="lg"
        >
          <span className="flex items-center justify-center gap-2 absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
            View Portfolio
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            See Our Work
          </span>
        </Button>
      </motion.div>

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
        transition={{ duration: 1, delay: 1.4, yoyo: Infinity, repeatDelay: 2 }}
      />
    </motion.section>
  );
}
