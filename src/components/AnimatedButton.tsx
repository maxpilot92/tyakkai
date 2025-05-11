"use client";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AnimatedButton({
  children,
  className = "",
  onClick,
}: AnimatedButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`group flex justify-between items-center h-12 rounded-4xl pr-5 bg-black text-white hover:bg-[#ffc700] hover:text-black hover:cursor-pointer duration-[600ms] ${className}`}
    >
      <motion.div className="relative overflow-hidden bg-[#ffc700] group-hover:bg-black text-black p-5 rounded-full text-lg font-medium transition-all duration-[600ms] -ml-[11px]">
        <motion.span className="flex items-center justify-center gap-2 absolute inset-0 transition-transform duration-[600ms] group-hover:translate-x-full bg-[#ffc700] group-hover:bg-black">
          <span className="material-symbols-outlined group-hover:text-white">
            keyboard_double_arrow_right
          </span>
        </motion.span>
        <motion.span className="absolute inset-0 flex items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] bg-[#ffc700] group-hover:bg-black">
          <span className="material-symbols-outlined group-hover:text-white">
            keyboard_double_arrow_right
          </span>
        </motion.span>
      </motion.div>

      <motion.p className="text-[18px] transition-colors duration-[600ms] group-hover:text-black">
        {children}
      </motion.p>
    </Button>
  );
}
