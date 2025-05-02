"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Partnering with GravityX has transformed our business. The innovative solutions and exceptional support surpassed all our expectations.",
    name: "Matthew Lee",
    title: "Co-Founder, DashGo",
    avatar: "/avatars/matthew.png",
    companyHighlight: "GravityX",
  },
  {
    id: 2,
    quote:
      "Since implementing StellarTech solutions, our productivity has increased by 45%. Their team's dedication to excellence is unmatched in the industry.",
    name: "Sarah Johnson",
    title: "CTO, NexaWave",
    avatar: "/avatars/sarah.png",
    companyHighlight: "StellarTech",
  },
  {
    id: 3,
    quote:
      "QuantumShift's platform revolutionized how we approach data analytics. The intuitive interface and powerful features have become essential to our operations.",
    name: "David Chen",
    title: "Head of Operations, Elevate Inc",
    avatar: "/avatars/david.png",
    companyHighlight: "QuantumShift",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  // Highlight the company name in the quote
  const highlightCompanyName = (quote: string, highlight: string) => {
    const parts = quote.split(highlight);

    if (parts.length === 1) return quote;

    return (
      <>
        {parts[0]}
        <span className="text-purple-600 font-semibold">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="w-full max-w-full mx-auto relative overflow-hidden h-screen flex flex-col">
      {/* Decorative elements */}
      {/* <div className="absolute -bottom-5 left-0 right-0 h-32 z-0">
        <Image
          src={Thread}
          alt="Decorative thread"
          fill
          className="object-cover"
        />
      </div> */}

      {/* Quotation marks */}
      <div className="flex justify-center mb-6">
        <div className="text-gray-200">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 11H6C5.44772 11 5 10.5523 5 10V6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11Z"
              fill="currentColor"
            />
            <path
              d="M18 11H14C13.4477 11 13 10.5523 13 10V6C13 5.44772 13.4477 5 14 5H18C18.5523 5 19 5.44772 19 6V10C19 10.5523 18.5523 11 18 11Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Testimonial content */}
      <div className="relative h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full px-4"
          >
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 px-4 md:px-12">
                &quot;
                {highlightCompanyName(
                  currentTestimonial.quote,
                  currentTestimonial.companyHighlight
                )}
                &quot;
              </p>

              <div className="flex items-center justify-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={currentTestimonial.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4 text-left">
                  <p className="font-semibold text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-gray-600">{currentTestimonial.title}</p>
                </div>
              </div>
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-orange-500 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
