"use client";

import { Clock, User, Zap } from "lucide-react";
import Image from "next/image";
import DigitalSolution from "@/../public/digitalSolution.svg";
import { motion } from "framer-motion";
import Cursor from "@/../public/cursor.svg";

export default function Offering() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left side with image and labels */}
        <div className="relative w-full md:w-1/2">
          <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-[500px]">
            <Image
              src={DigitalSolution}
              alt="Creative Director"
              width={600}
              height={600}
              className="object-cover"
            />

            {/* Label overlays */}
            {/* <div className="absolute bottom-6 left-6 flex flex-col gap-2">
              <div className="bg-white text-black px-4 py-2 rounded-full font-medium">
                David Boon
              </div>
              <div className="bg-white text-black px-4 py-2 rounded-full font-medium">
                Creative Director at GravityX
              </div>
            </div> */}

            {/* GravityX badge */}
            <div className="relative w-full bg-white overflow-hidden">
              <motion.div
                className="absolute text-[#ffc700] z-10"
                animate={{
                  x: ["-20%", "120%"],
                  y: ["20%", "-120%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                fefewfewfewfefewffewffewfew
                <Image
                  src={Cursor}
                  alt="Cursor"
                  width={50}
                  height={50}
                  className="w-8 h-8"
                />
              </motion.div>
            </div>

            {/* Decorative lines */}
            {/* <div className="absolute top-1/3 right-16">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 30C10 30 30 10 50 30"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M10 40C10 40 30 20 50 40"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div> */}
          </div>
        </div>

        {/* Right side with text content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Unlimited Digital Solution
            <br />
            Whenever You Need
          </h2>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 border-[0.5px] shadow-md bg-white rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Tailored Strategies for Maximum Impact
                </h3>
                <p className="text-gray-600">
                  We craft personalized digital marketing plans—​from SEO and
                  content marketing to social media management—designed to align
                  with your brand&apos;s unique goals and resonate with your
                  target audience.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 border-[0.5px] shadow-md bg-white rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Expert Team Dedicated to Your Success
                </h3>
                <p className="text-gray-600">
                  Our team of seasoned content creators, marketers, and
                  strategists brings years of experience to the table, ensuring
                  innovative solutions that drive real results.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 border-[0.5px] shadow-md bg-white rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Data-Driven Approach for Tangible Results
                </h3>
                <p className="text-gray-600">
                  We focus on delivering measurable outcomes—like increased
                  website traffic, higher engagement, and improved
                  conversions—by leveraging analytics and continuous
                  optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
