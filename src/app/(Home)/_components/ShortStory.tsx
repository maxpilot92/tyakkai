"use client";
import { Asterisk } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function ShortStory() {
  // More precise threshold to ensure animation triggers only when component is significantly visible
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation only plays once
    threshold: 0.5, // Increased threshold - requires more visibility to trigger
    rootMargin: "-50px 0px", // Only triggers when element is 50px inside viewport
  });

  // State to track if animation should play
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Track if animation has already occurred to prevent replay on repeated scrolls
  const [hasAnimated, setHasAnimated] = useState(false);

  // Create an array of text segments with appropriate styling
  const textSegments = [
    { text: "We boost your online growth. From ", color: "default" },
    { text: "eye catching", color: "gray" },
    { text: " designs to smart ", color: "default" },
    { text: "marketing", color: "gray" },
    { text: ". We help you ", color: "default" },
    { text: "reach", color: "gray" },
    { text: " ", color: "default" },
    { text: "more", color: "gray" },
    { text: " real people. We're not ", color: "default" },
    { text: "just", color: "gray" },
    { text: " partners—we grow too.", color: "default" },
  ];

  // State to track typing progress
  const [currentSegment, setCurrentSegment] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedSegments, setDisplayedSegments] = useState<
    { text: string; color: string }[]
  >([]);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Effect to update animation state when element comes into view
  useEffect(() => {
    if (inView && !hasAnimated) {
      setShouldAnimate(true);
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  // Typing animation effect
  useEffect(() => {
    if (!shouldAnimate) return;

    if (currentSegment < textSegments.length) {
      const segment = textSegments[currentSegment];

      if (currentChar < segment.text.length) {
        // Still typing the current segment
        const typingTimeout = setTimeout(() => {
          setDisplayedSegments((prev) => {
            const newSegments = [...prev];
            if (!newSegments[currentSegment]) {
              newSegments[currentSegment] = {
                text: segment.text.charAt(currentChar),
                color: segment.color,
              };
            } else {
              newSegments[currentSegment] = {
                text:
                  newSegments[currentSegment].text +
                  segment.text.charAt(currentChar),
                color: segment.color,
              };
            }
            return newSegments;
          });
          setCurrentChar((prevChar) => prevChar + 1);
        }, 30); // Adjust speed as needed

        return () => clearTimeout(typingTimeout);
      } else {
        // Move to next segment
        setCurrentSegment((prev) => prev + 1);
        setCurrentChar(0);
      }
    } else {
      setIsTypingComplete(true);
    }
  }, [shouldAnimate, currentSegment, currentChar, textSegments]);

  // Render the currently typed text with appropriate styling
  const renderTypedText = () => {
    return displayedSegments.map((segment, index) => (
      <span
        key={index}
        className={segment.color === "gray" ? "text-gray-400" : ""}
      >
        {segment.text}
      </span>
    ));
  };

  // Curtain animation for text lines with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Icon animation
  const iconVariants = {
    hidden: { opacity: 0, rotate: -90 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      rotate: 90,
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div ref={ref} className="overflow-hidden">
      <div className="flex flex-col md:flex-row w-full max-w-screen mx-auto px-4 py-10 relative md:h-[390px]">
        {/* Position the title at the top */}
        <div className="absolute top-20 left-4 flex items-center gap-2 z-10">
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            whileHover="hover"
          >
            <Asterisk className="h-8 w-8 text-orange-500" />
          </motion.div>
          <motion.span
            className="text-xl font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={
              shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our short story
          </motion.span>
        </div>

        {/* Position the text to start at the top */}
        <div className="w-full md:w-3/4 md:ml-auto mt-16 md:mt-0">
          <motion.div
            className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight"
            variants={containerVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
          >
            <motion.div variants={textVariants} className="flex flex-wrap">
              <span
                className="leading-snug"
                style={{
                  lineHeight: "1.3",
                  margin: "20px 0",
                  padding: "10px 0",
                }}
              >
                {renderTypedText()}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
