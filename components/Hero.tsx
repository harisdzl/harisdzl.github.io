"use client";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

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
    <div className="flex flex-row relative z-0 w-full mx-auto items-center bg-fixed pt-36">
      <div className="flex-1 text-center">
        <h1 className="2xl:text-[72px] sm:text-[72px] text-[42px] font-extrabold">
          <span ref={typedRef}></span>
        </h1>
        {showP && (
          <Slide>
            <p className="sm:text-[30px] text-[24px] flex-wrap p-5 text-black-100 font-light">
              Passionate about solving {""}
              <span className="text-[30px] flex-wrap text-black-100 font-extrabold text-blue-700">
                &lt;Problems /&gt;
              </span>
            </p>
            <div className="flex space-x-6 items-center justify-center">
              <a
                href="https://www.linkedin.com/in/haris-dzulkifli/"
                target="_blank"
                className="social-icon hover:text-blue-700"
              >
                <AiFillLinkedin size={50} />
              </a>
              <a
                href="https://www.github.com/harisdzl"
                target="_blank"
                className="social-icon hover:text-gray-800"
              >
                <AiFillGithub size={50} />{" "}
              </a>
              <a
                href="mailto: haris@dbasri.com"
                className="social-icon hover:text-red-700"
              >
                <AiFillMail size={50} />{" "}
              </a>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="@/public/haris-bitmoji.png"
                alt="haris bitmoji"
                height={100}
                width={335.9}
                className="w-3/4 sm:w-[335.9px]"
              />
            </div>
          </Slide>
        )}
      </div>
    </div>
  );
};

export default Hero;
