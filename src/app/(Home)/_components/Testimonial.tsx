"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@/types/Testimonial";
import useTestimonialStore from "@/store/TestimonialStore";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { testimonial } = useTestimonialStore();

  // Auto-advance testimonials
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (testimonial && Array.isArray(testimonial) && testimonial.length > 0) {
      setTestimonials(testimonial);
    }
  }, [testimonial]);

  // Handle empty testimonials
  if (!testimonials.length) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  // const handlePrev = () => {
  //   setDirection(-1);
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
  //   );
  // };

  // const handleNext = () => {
  //   setDirection(1);
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  // };

  return (
    <div className="w-full h-[590px] max-w-[1150px] mx-auto relative overflow-hidden flex flex-col bg-[url('/testimonialBg.svg')] bg-cover bg-center bg-no-repeat">
      {/* Testimonial content */}
      <div className="relative h-[300px] flex items-center justify-center mt-36">
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
              <p className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 px-4">
                &quot;{currentTestimonial.description}&quot;
              </p>

              <div className="flex items-center justify-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4 text-left">
                  <p className="font-semibold text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-gray-600">{currentTestimonial.role}</p>
                </div>
              </div>
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      {/* <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-purple-600" : "bg-gray-300"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Navigation arrows */}
      {/* <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button> */}
    </div>
  );
}
