"use client";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

import Liberty from "@/../public/logo/liberty.svg";
import Dhanwantari from "@/../public/logo/dhanwantari.svg";
import Moves from "@/../public/logo/moves.svg";
import SubmitToPyramid from "@/../public/logo/submit-to-pyramid.svg";
import GuruMantra from "@/../public/logo/Gurumantra.svg";
import WhiteHouse from "@/../public/logo/Whitehouse.svg";
import Tesla from "@/../public/logo/Tesla.svg";
import GcoLite from "@/../public/logo/gcolite.svg";
import Lawanya from "@/../public/logo/Lawanya.svg";

const reviews = [
  { img: Liberty, alt: "Liberty" },
  { img: Dhanwantari, alt: "Dhanwantari" },
  { img: Moves, alt: "Moves" },
  { img: SubmitToPyramid, alt: "Submit to Pyramid" },
  { img: GuruMantra, alt: "Guru Mantra" },
  { img: WhiteHouse, alt: "White House" },
  { img: Tesla, alt: "Tesla" },
  { img: GcoLite, alt: "Gco Lite" },
  { img: Lawanya, alt: "Lawanya" },
];

export function MarqueeLogo() {
  // You can tweak these to whatever height/width you want:
  const LOGO_CONTAINER = "h-24 w-48";

  return (
    <div className="relative flex max-w-5xl mx-auto items-center justify-center overflow-hidden py-10">
      <Marquee className="[--duration:20s]">
        {reviews.map(({ img, alt }, idx) => (
          <div
            key={idx}
            className={`flex flex-shrink-0 items-center justify-center px-6 ${LOGO_CONTAINER}`}
          >
            <div className="relative h-full w-full">
              <Image src={img} alt={alt} fill className="object-contain" />
            </div>
          </div>
        ))}
      </Marquee>
      {/* gradient fades left/right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
}
