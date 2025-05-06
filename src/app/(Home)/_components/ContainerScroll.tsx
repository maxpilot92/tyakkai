"use client";
import AnimatedButton from "@/components/AnimatedButton";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import React from "react";
import { motion } from "framer-motion";
import FrameImage from "@/../public/Frame.svg";
import Image from "next/image";

export default function ImageScroll({ className }: { className?: string }) {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`flex flex-col overflow-hidden ${
        className || ""
      } -mt-5 md:-mt-[25vh] lg:-mt-[30vh]`}
    >
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center mb-8 md:mb-20 ">
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <AnimatedButton>Get Started</AnimatedButton>
              <Button
                className="group relative overflow-hidden hover:text-white text-black border hover:border-white border-black px-6 py-6 rounded-full text-lg font-medium hover:bg-black bg-white duration-[600ms] hover:cursor-pointer"
                variant="outline"
                size="lg"
              >
                View More Content
              </Button>
            </motion.div>
          </div>
        }
      >
        {/* ✅ Key Fix: responsive image with max width control */}
        <div className=" px-4 md:px-0 flex justify-center">
          <Image
            src={FrameImage}
            alt="hero"
            height={720}
            width={1400}
            className="w-full max-w-[1400px] h-auto rounded-2xl object-cover object-left-top"
            draggable={false}
            priority
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
