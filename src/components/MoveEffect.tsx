import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MoveEffect({
  imageUrl,
  className,
  orientation = "right",
}: {
  imageUrl: string;
  className?: string;
  orientation?: "left" | "right";
}) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const time = (Date.now() - start) / 1800;
      const value = Math.sin(time * 2) * 10;
      setNumber(parseFloat(value.toFixed(2)));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  // Adjust x based on orientation
  const x = orientation === "left" ? -number : number;
  const y = number;

  return (
    <div>
      <motion.div>
        <Image
          style={{
            transform: `translate3d(${x}px, ${y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          src={imageUrl}
          alt={imageUrl}
          width={500}
          height={500}
          className={`z-20 absolute transform -translate-x-1/2 -translate-y-1/2 w-30 h-30 ${className}`}
        />
      </motion.div>
    </div>
  );
}
