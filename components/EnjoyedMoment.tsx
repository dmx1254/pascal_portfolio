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
    link: "https://google.com",
    thumbnail: pascal1,
  },
  {
    title: "Cursor",
    link: "https://google.com",
    thumbnail: pascal2,
  },
  {
    title: "Rogue",
    link: "https://google.com",
    thumbnail: pascal3,
  },

  {
    title: "Editorially",
    link: "https://google.com",
    thumbnail: pascal4,
  },
  {
    title: "Editrix AI",
    link: "https://google.com",
    thumbnail: pascal5,
  },
  {
    title: "Pixel Perfect",
    link: "https://google.com",
    thumbnail: pascal6,
  },

  {
    title: "Algochurn",
    link: "https://google.com",
    thumbnail: pascal7,
  },
  {
    title: "Aceternity UI",
    link: "https://google.com",
    thumbnail: pascal8,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://google.com",
    thumbnail: pascal9,
  },
  {
    title: "SmartBridge",
    link: "https://google.com",
    thumbnail: pascal10,
  },
  {
    title: "Renderwork Studio",
    link: "https://google.com",
    thumbnail: pascal11,
  },

  {
    title: "Creme Digital",
    link: "https://google.com",
    thumbnail: pascal12,
  },
  {
    title: "Golden Bells Academy",
    link: "https://google.com",
    thumbnail: pascal13,
  },
  {
    title: "Invoker Labs",
    link: "https://google.com",
    thumbnail: pascal14,
  },
  {
    title: "E Free Invoice",
    link: "https://google.com",
    thumbnail: pascal15,
  },
];
