"use client";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import SocialIcon from "react-social-icons";

const Hero = () => {
  const typedRef = useRef(null);
  const [showP, setShowP] = useState(false);

  useEffect(() => {
    const options = {
      strings: ["Hi, I'm Haris!"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: false,
      onComplete: () => setShowP(true), // Set showP to true after typing is completed
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-row relative z-0 w-full mx-auto items-center bg-fixed pt-16">
      <div className="flex-1 text-center">
        <h1 className="2xl:text-[72px] sm:text-[72px] text-[50px] font-extrabold">
          <span ref={typedRef}></span>
        </h1>
        {showP && (
          <Slide>
            <p className="text-[30px] flex-wrap p-5 text-black-100 font-light">
              Passionate about solving
            </p>
            <p className="text-[30px] flex-wrap text-black-100 font-extrabold text-blue-700">
              &lt;Problems /&gt;
            </p>

            <div className="flex justify-center items-center">
              <Image
                src="/haris-bitmoji.png"
                alt="haris bitmoji"
                height={100}
                width={335.9}
              />
            </div>
          </Slide>
        )}
      </div>
    </div>
  );
};

export default Hero;
