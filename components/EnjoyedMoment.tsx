"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import pascal1 from "@/public/pascal/image00005.jpeg";
import pascal2 from "@/public/pascal/image00006.jpeg";
import pascal3 from "@/public/pascal/image00007.jpeg";
import pascal4 from "@/public/pascal/image00020.jpeg";
import pascal5 from "@/public/pascal/image00009.jpeg";
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

export function EnjoyedMoment() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    thumbnail: pascal1,
  },
  {
    title: "Cursor",
    thumbnail: pascal2,
  },
  {
    title: "Rogue",
    thumbnail: pascal3,
  },

  {
    title: "Editorially",
    thumbnail: pascal4,
  },
  {
    title: "Editrix AI",
    thumbnail: pascal5,
  },
  {
    title: "Pixel Perfect",
    thumbnail: pascal6,
  },

  {
    title: "Algochurn",
    thumbnail: pascal7,
  },
  {
    title: "Aceternity UI",
    thumbnail: pascal8,
  },
  {
    title: "Tailwind Master Kit",
    thumbnail: pascal9,
  },
  {
    title: "SmartBridge",
    thumbnail: pascal10,
  },
  {
    title: "Renderwork Studio",
    thumbnail: pascal11,
  },

  {
    title: "Creme Digital",
    thumbnail: pascal12,
  },
  {
    title: "Golden Bells Academy",
    thumbnail: pascal13,
  },
  {
    title: "Invoker Labs",
    thumbnail: pascal14,
  },
  {
    title: "E Free Invoice",
    thumbnail: pascal15,
  },
];
