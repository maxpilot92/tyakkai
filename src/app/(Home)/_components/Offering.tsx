"use client";

import { Clock, User, Zap } from "lucide-react";
import Image from "next/image";
import DigitalSolution from "@/../public/digitalSolution.svg";
import Cursor from "@/../public/cursor.svg";
import { useEffect, useState } from "react";
import MoveEffect from "@/components/MoveEffect";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

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
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-[500px]">
            <Image
              src={DigitalSolution}
              alt="Creative Director"
              width={6000}
              height={6000}
              className="object-cover"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white absolute rounded-full px-3 py-1 md:px-5 md:py-3 z-10 bottom-[70px] md:bottom-20 left-10 font-[550]"
            >
              Diwakar Bhatt
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white absolute rounded-full px-3 py-1 md:px-5 md:py-3 z-10 bottom-8 md:bottom-7 left-10 font-[550]"
            >
              Digital Marketing Expert
            </motion.div>

            <MoveEffect
              imageUrl={Cursor}
              className="top-36 right-0 md:top-80 md:right-20"
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col gap-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Unlimited Digital Solution
            <br />
            Whenever You Need
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                icon: <Zap className="w-5 h-5 text-orange-500" />,
                title: "Tailored Strategies for Maximum Impact",
                text: `We craft personalized digital marketing plans—​from SEO and content marketing to social media management—designed to align with your brand's unique goals and resonate with your target audience.`,
              },
              {
                icon: <User className="w-5 h-5 text-black" />,
                title: "Expert Team Dedicated to Your Success",
                text: `Our team of seasoned content creators, marketers, and strategists brings years of experience to the table, ensuring innovative solutions that drive real results.`,
              },
              {
                icon: <Clock className="w-5 h-5 text-purple-500" />,
                title: "Data-Driven Approach for Tangible Results",
                text: `We focus on delivering measurable outcomes—like increased website traffic, higher engagement, and improved conversions—by leveraging analytics and continuous optimization.`,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={textVariant}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 border-[0.5px] shadow-md bg-white rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
