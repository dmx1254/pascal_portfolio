import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt à transformer <span className="text-purple">votre</span> vision
          entrepreneuriale ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi dès aujourd&apos;hui et discutons de la manière dont je
          peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:Pascalcesarcontact@gmail.com">
          <MagicButton
            title="Prenons contact"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-10 md:flex-row flex-col justify-between items-center">
        <p className="md:text-sm text-xs md:font-normal font-light text-white-200">
          Copyright © 2024 Pascal Cesar
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
          {socialMedia.map((info) => (
            <a
              href={info.path}
              target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
