import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
  return (
    <div className="flex items-center justify-center mx-auto mt-4 md:mt-12 mb-4">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="w-full relative flex flex-col items-center -mt-20 mx-auto self-center">
        <div className="hero img-blur relative flex items-center justify-center">
          {/* <h1 className="top-[16%] xs:top-[20%] left-[14%] xs:left-[-20%] md:left-[-50%] text-2xl xs:text-xl md:text-2xl font-bold absolute">
            Pascal Cesar
          </h1> */}
          <img
            src="/pascalrm.png"
            alt="Pascal Cesar Entrepreneur, conférencier et motivateur"
            className="object-contain object-center h-full max-w-[500px] md:max-h-[600px] w-full rounded-full z-50 ml-24 xs:ml-0"
          />
        </div>
        <p className="absolute w-full left-[0%] xx2s:left-[2%] xxs:left-[8%] x22s:left-[14%] x2s:left-[20%] xs:left-[48%] md:left-[55%] max-w-80 top-[98%] xs:top-[80%] text-center text-white-200 md:tracking-wider mb-4 text-base lg:text-lg z-[120]">
          <span className="text-purple font-semibold">Entrepreneur</span>
          &nbsp;-&nbsp;
          <span className="text-blue-500 font-semibold">Conférencier</span>
          &nbsp;-&nbsp;
          <span className="text-green-500 font-semibold">Motivateur</span>
          &nbsp; basé en France.<br />
          <span className="block text-white font-bold">+5000 jeunes formés</span>
        </p>
        
      </div>
    </div>
  );
};

export default Hero;
