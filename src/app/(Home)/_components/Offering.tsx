"use client";

import { Clock, User, Zap } from "lucide-react";
import Image from "next/image";
import DigitalSolution from "@/../public/digitalSolution.svg";
import Cursor from "@/../public/cursor.svg";
import { useEffect, useState } from "react";
import MoveEffect from "@/components/MoveEffect";

export default function Offering() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const start = Date.now();
    console.log(number);
    const interval = setInterval(() => {
      const time = (Date.now() - start) / 1800; // seconds
      const value = Math.sin(time * 2) * 10; // oscillates between -10 and 10
      setNumber(parseFloat(value.toFixed(2)));
    }, 10);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left side with image and labels */}
        <div className="relative w-full md:w-1/2">
          <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-[500px]">
            <Image
              src={DigitalSolution}
              alt="Creative Director"
              width={6000}
              height={6000}
              className="object-cover"
            />
            <div className="bg-white absolute rounded-full px-5 py-3 z-10 bottom-20 left-10 font-[550]">
              Diwakar Bhatt
            </div>
            <div className="bg-white absolute rounded-full px-5 py-3 z-10 bottom-7 left-10 font-[550]">
              Digital Marketing Expert
            </div>

            <MoveEffect imageUrl={Cursor} className="top-80 right-20 " />
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
