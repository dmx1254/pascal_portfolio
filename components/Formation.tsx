"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import image1 from "@/public/pascal/image00001.png";
import image2 from "@/public/pascal/image00002.png";
import image3 from "@/public/pascal/image00003.jpeg";
import image4 from "@/public/pascal/image00004.jpeg";
import image5 from "@/public/pascal/image00005.jpeg";
import image6 from "@/public/pascal/image00006.jpeg";
import { StaticImageData } from "next/image";
import MagicButton from "./ui/MagicButton";
import awaniang from "@/public/formation/awaniang.png";
import faty from "@/public/formation/faty.png";
import ibnkhalifa from "@/public/formation/ibnkhalifa.png";
import maitreniang from "@/public/formation/maitreniang.png";
import makhtar from "@/public/formation/makhtar.png";
import sokhadiarra from "@/public/formation/sokhnadiarra.png";

const people = [
  {
    id: 1,
    name: "Awa Niang",
    designation: "",
    image: awaniang as StaticImageData,
  },
  {
    id: 2,
    name: "Makhtar",
    designation: "",
    image: makhtar as StaticImageData,
  },
  {
    id: 3,
    name: "Faty",
    designation: "",
    image: faty as StaticImageData,
  },
  {
    id: 4,
    name: "Ibn Khalifa",
    designation: "",
    image: ibnkhalifa as StaticImageData,
  },
  {
    id: 5,
    name: "Maitre Niang",
    designation: "",
    image: maitreniang as StaticImageData,
  },
  {
    id: 6,
    name: "Sokhna Diarra",
    designation: "",
    image: sokhadiarra as StaticImageData,
  },
];

const Formation = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        <div className="flex flex-row items-center justify-center mb-10">
          {" "}
          <AnimatedTooltip items={people} />
        </div>
        <span className="-mt-6 md:-mt-12 text-lg sm:text-2xl font-bold text-white font-merriweather">
          +355 personnes se <span className="text-purple">sont inscrites</span>
        </span>
      </div>
      <a
        href="https://docs.google.com/forms/d/1EhddYHCtmKTdYkIYa_UuyK5e6mkGYFFytmM3O8Lw0Ko/edit"
        target="_blank"
        className="-mt-6 md:-mt-10 cursor-pointer"
      >
        <MagicButton
          title="Rejoignez nous"
          icon={<span />}
          position="right"
        />
      </a>
    </div>
  );
};

export default Formation;
