import React from "react";
import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
  return (
    <div className="mt-4 md:mt-12 mb-4">
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

      {/* <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div> */}

      <div className="w-full flex items-center gap-10 relative mt-6 md:mt-10 mb-5 z-10">
        <div className="w-full md:w-1/2 font-monteserrat md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex flex-col items-start max-w-lg my-4 ml-8 md:ml-0">
            <p className="font-merriweather text-gray-700 italic relative text-lg">
              <span className="text-4xl leading-none text-gray-400 absolute -left-6 top-0">
                “
              </span>
              Être riche, c&apos;est avoir la vie d&apos;un pauvre avec plus de
              sécurité.
              {/* La jeunesse est la force motrice du progrès, mais elle a besoin de
              direction et d&apos;opportunités pour s&apos;épanouir pleinement. */}
              <span className="text-4xl leading-none text-gray-400 absolute right-100 -bottom-3">
                ”
              </span>
            </p>
            <cite className="self-start md:self-end mt-2 text-gray-500 mr-0 md:mr-12">
              - P. Cesar Ndecky
            </cite>
          </div>

          <p className="text-center text-white-200 md:tracking-wider max-w-lg mb-4 text-base lg:text-lg">
            Hi, je suis Pascal César
            <br />
            <span className="text-purple font-semibold">Conférencier</span>
            &nbsp;-&nbsp;
            <span className="text-blue-500 font-semibold">Motivateur</span>
            &nbsp;-&nbsp;
            <span className="text-green-500 font-semibold">Entrepreneur</span>
            &nbsp; basé en France.
          </p>
          <p className="text-center text-white-200 md:tracking-wider mb-4 text-base max-w-lg">
            J&apos;accompagne les jeunes dans la création et le développement de
            leurs entreprises, en les aidant à réaliser leurs rêves
            entrepreneuriaux.
          </p>
        </div>
        <div className="hidden md:flex relative w-1/2">
          <img
            src="/pascal/image00002.png"
            alt="pascal cesar picture"
            className="flex items-center h-[350px] w-full w-full brightness-[1] justify-center object-cover object-center rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
