import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Portfolio } from "@/types/Portfolio";
import usePortfolioStore from "@/store/PortfolioStore";

// Extract Card component to its own file in a real application
const Card = ({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 w-full max-w-md ">
      <div className="h-[300px] sm:h-[400px] md:h-[500px] w-[500px] relative overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-2xl hover:scale-110 transition-transform duration-300"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <h3 className="font-semibold text-lg sm:text-2xl">{title}</h3>
      <p
        style={{
          lineHeight: "170%",
        }}
        className="text-black text-[14px] sm:text-[16px] font-normal"
      >
        {description}
      </p>
    </div>
  );
};

export default function PortfolioPage() {
  // Sample portfolio items - in a real app, this could come from a CMS or API

  const [portfolios, setPortfolios] = React.useState<Portfolio[]>([]);
  const { portfolio } = usePortfolioStore();
  useEffect(() => {
    if (portfolio) {
      setPortfolios(portfolio);
    }
  }, [portfolio]);

  return (
    <section className="container mx-auto px-4 lg:mb-4">
      <div className="flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          style={{ letterSpacing: "-2px" }}
          className="w-full lg:w-[800px] text-3xl md:text-4xl lg:text-[56px] font-medium text-center text-black mb-12 md:mb-20"
        >
          Our work is not just a preview, but is present in the real world!
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Added container for better spacing control */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 justify-items-center">
          {" "}
          {/* Increased gap and added centering */}
          {portfolios.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="w-full max-w-[600px]" // Added max-width for better card control
            >
              <Card
                imageUrl={item.screenshots[0].url}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
