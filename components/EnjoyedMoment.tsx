"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import pascal1 from "@/public/pascal/image00024.jpeg";
import pascal2 from "@/public/pascal/image00006.jpeg";
import pascal3 from "@/public/pascal/image00007.jpeg";
import pascal4 from "@/public/pascal/image00020.jpeg";
import pascal5 from "@/public/pascal/image00023.png";
import pascal6 from "@/public/pascal/image00010.jpeg";
import pascal7 from "@/public/pascal/image00011.png";
import pascal8 from "@/public/pascal/image00012.jpeg";
import pascal9 from "@/public/pascal/image00013.jpeg";
import pascal10 from "@/public/pascal/image00014.jpeg";
import pascal11 from "@/public/pascal/image00015.png";
import pascal12 from "@/public/pascal/image00016.jpeg";
import pascal13 from "@/public/pascal/image00017.jpeg";
import pascal14 from "@/public/pascal/image00018.png";
import pascal15 from "@/public/pascal/image00019.jpeg";
import { StaticImageData } from "next/image";

export function EnjoyedMoment() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    thumbnail: pascal1 as StaticImageData,
  },
  {
    title: "Cursor",
    thumbnail: pascal2 as StaticImageData,
  },
  {
    title: "Rogue",
    thumbnail: pascal3 as StaticImageData,
  },

  {
    title: "Editorially",
    thumbnail: pascal4 as StaticImageData,
  },
  {
    title: "Editrix AI",
    thumbnail: pascal5 as StaticImageData,
  },
  {
    title: "Pixel Perfect",
    thumbnail: pascal6 as StaticImageData,
  },

  {
    title: "Algochurn",
    thumbnail: pascal7 as StaticImageData,
  },
  {
    title: "Aceternity UI",
    thumbnail: pascal8 as StaticImageData,
  },
  {
    title: "Tailwind Master Kit",
    thumbnail: pascal9 as StaticImageData,
  },
  {
    title: "SmartBridge",
    thumbnail: pascal10 as StaticImageData,
  },
  {
    title: "Renderwork Studio",
    thumbnail: pascal11 as StaticImageData,
  },

  {
    title: "Creme Digital",
    thumbnail: pascal12 as StaticImageData,
  },
  {
    title: "Golden Bells Academy",
    thumbnail: pascal13 as StaticImageData,
  },
  {
    title: "Invoker Labs",
    thumbnail: pascal14 as StaticImageData,
  },
  {
    title: "E Free Invoice",
    thumbnail: pascal15 as StaticImageData,
  },
];
