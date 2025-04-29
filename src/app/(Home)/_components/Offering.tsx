"use client";

import { Clock, User, Zap } from "lucide-react";
import Image from "next/image";

export default function Offering() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left side with image and labels */}
        <div className="relative w-full md:w-1/2">
          <div className="relative rounded-3xl overflow-hidden bg-black aspect-square md:aspect-auto md:h-[500px]">
            <Image
              src=""
              alt="Creative Director"
              width={600}
              height={600}
              className="object-cover"
            />

            {/* Label overlays */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-2">
              <div className="bg-white text-black px-4 py-2 rounded-full font-medium">
                David Boon
              </div>
              <div className="bg-white text-black px-4 py-2 rounded-full font-medium">
                Creative Director at GravityX
              </div>
            </div>

            {/* GravityX badge */}
            <div className="absolute top-1/2 right-12 transform -translate-y-1/2 bg-purple-600 text-white px-3 py-1 rounded-md">
              GravityX
            </div>

            {/* Decorative lines */}
            <div className="absolute top-1/3 right-16">
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
            </div>
          </div>
        </div>

        {/* Right side with text content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Not just design!
            <br />
            GravityX help you grow!
          </h2>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Unlimited Tasks, Whenever You Need
                </h3>
                <p className="text-gray-600">
                  We help your business stand out by identifying the right
                  market position, ensuring that your brand resonates with your
                  target audience
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Senior Designer Assigned
                </h3>
                <p className="text-gray-600">
                  Track and measure your success with our custom performance
                  metrics. We provide data-driven insights to help you make
                  informed decisions and achieve your business goals
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24-48 Hours Delivery</h3>
                <p className="text-gray-600">
                  Our dedicated support team is available 24/7 to assist you
                  with any project needs. Whether it&apos;s guidance or
                  troubleshooting, we ensure your design journey is seamless
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
