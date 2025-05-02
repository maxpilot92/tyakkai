"use client";
import Image from "next/image";
import MoveEffect from "@/components/MoveEffect";

export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date if you parse it
  image1?: string;
  image2?: string;
}

export function Services({ data }: { data?: Service[] }) {
  if (!data) {
    return <>no data</>;
  }
  return (
    <div className="max-w-full mx-auto my-10">
      <div
        style={{ letterSpacing: "-2px" }}
        className="text-center px-4 lg:px-0"
      >
        <h1 className="mx-auto text-5xl font-medium text-black dark:text-white max-w-[675px]">
          All design, branding and marketing services for you
        </h1>
      </div>

      {/* <HoverEffect items={projects} /> */}
      <div className="lg:mt-20 my-10 flex flex-wrap gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-10 lg:gap-10 mb-10"
          >
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.image}
              image2={item.image2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({
  title,
  description,
  imageUrl,
  // image1,
  image2,
}: {
  title: string;
  description: string;
  imageUrl?: string;
  // image1?: string;
  image2?: string;
}) {
  return (
    <div className="bg-[#faf0e6] rounded-2xl h-[490px] w-[400px]">
      <div className="py-[40px] px-[30px] flex flex-col gap-8">
        <h2
          style={{ letterSpacing: "-0.08em" }}
          className="text-4xl font-[550] leading-snug flex items-center justify-center text-[#000000] text-center"
        >
          {title}
        </h2>

        <div className="relative h-[190px] overflow-hidden flex items-center justify-center w-full">
          <Image
            src={
              imageUrl ||
              "https://res.cloudinary.com/dipagek5z/image/upload/v1745829714/adminportal/yepjsgefkswll05luoas.jpg"
            }
            alt="Image"
            width={400}
            height={400}
            className="object-cover"
          />
          <MoveEffect imageUrl={image2!} className="top-16 right-4" />
          <MoveEffect imageUrl={image2!} orientation="left" />
        </div>

        <p className="text-[#000000] text-sm font-[420] flex justify-center items-center text-center ">
          {description}
        </p>
      </div>
    </div>
  );
}
