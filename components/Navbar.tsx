"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    const handleHeight = () => {
      const scrolling = window.scrollY;
      setScreenHeight(scrolling);
    };
    window.addEventListener("scroll", handleHeight);

    return () => {
      window.removeEventListener("scroll", handleHeight);
    };
  });

  return (
    <div
      className="sticky px-4 top-0 left-0 right-0 z-[999] w-screen"
      style={{
        background: screenHeight > 50 ? "rgb(4,7,29)" : "",
        backgroundColor:
          screenHeight > 50
            ? "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
            : "",
      }}
    >
      <div className="flex items-center justify-between h-[70px] max-w-7xl mx-auto">
        <a href="#" className="text-white font-merriweather font-bold text-2xl">
          PascalCesar.
        </a>
        <div className="md:flex hidden items-center gap-7">
          {/* <a
            href="#"
            className="text-white duration-500 ease-in-out hover:text-purple"
          >
            Home
          </a> */}
          <a
            href="#formations"
            className="text-white duration-500 ease-in-out hover:text-purple"
          >
            Nos formations
          </a>
          <a
            href="#about"
            className="text-white duration-500 ease-in-out hover:text-purple"
          >
            À propos
          </a>
          <a
            href="#ebook"
            className="text-white duration-500 ease-in-out hover:text-purple"
          >
            Mon livre
          </a>
          <a
            href="#projects"
            className="text-white duration-500 ease-in-out hover:text-purple"
          >
            Projets
          </a>
          <a
            href="#testimonials"
            className="text-white duration-500 ease-in-out hover:text-purple"
          >
            Témoignages
          </a>

          <a
            href="#contact"
            className="text-white duration-500 ease-in-out hover:text-purple"
          >
            Contact
          </a>
        </div>

        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <span className="text-white font-extralight cursor-pointer text-[28px]">
                <HiOutlineMenuAlt3 />
              </span>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="z-[1200] border-none"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <div>
                <a
                  href="#"
                  className="-mt-[18px] text-white font-merriweather font-bold text-2xl"
                >
                  PascalCesar.
                </a>
                <div className="flex flex-col items-start gap-8 my-16 text-lg">
                  <a
                    href="#"
                    className="text-white duration-500 ease-in-out hover:text-purple"
                  >
                    Home
                  </a>
                  <a
                    href="#formations"
                    className="text-white duration-500 ease-in-out hover:text-purple"
                  >
                    Nos formations
                  </a>
                  <a
                    href="#about"
                    className="text-white duration-500 ease-in-out hover:text-purple"
                  >
                    À propos
                  </a>
                  <a
                    href="#ebook"
                    className="text-white duration-500 ease-in-out hover:text-purple"
                  >
                    Mon livre
                  </a>
                  <a
                    href="#projects"
                    className="text-white duration-500 ease-in-out hover:text-purple"
                  >
                    Projets
                  </a>
                  <a
                    href="#testimonials"
                    className="text-white duration-500 ease-in-out hover:text-purple"
                  >
                    Témoignages
                  </a>

                  <a
                    href="#contact"
                    className="text-white duration-500 ease-in-out hover:text-purple"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
