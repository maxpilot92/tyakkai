import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Scrolling() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  return (
    <div className="h-[200vh] ">
      <motion.div className=" bg-black h-screen w-screen z-10"></motion.div>
      <motion.div
        style={{
          y,
        }}
        className=" bg-red-600 h-screen w-screen z-20"
      ></motion.div>
      <motion.div className=" bg-yellow-800 h-screen w-screen z-30"></motion.div>
    </div>
  );
}
