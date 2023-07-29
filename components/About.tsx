"use client";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex-col flex md:flex-row items-center justify-center md:pt-36 pt-20 m-3">
      <div className="md:flex-col flex-wrap max-w-xl p-4">
        <h1 className="align-top font-extrabold text-6xl pb-4">About Me.</h1>

        <p className="text-xl">
          My name is Haris and I am currently a 3rd Year Business Analytics
          student at the National University of Singapore. I'm still figuring
          out the ways in life, but I am constantly trying to improve my design
          thinking abilities and I enjoy learning new technologies. I aspire to
          be able to build something impactful in the future.
        </p>
      </div>

      <div className="relative">
        {/* <div className="absolute -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute -right-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl text-opacity-100 animate-blob"></div>
        <div className="absolute -bottom-8 -right-1 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div> */}

        <Image
          src="/haris-about.png"
          alt="haris about"
          height={40}
          width={345}
        />
        <p className="text-gray-600 flex justify-center items-center italic text-xl pt-2">
          POV: Me.
        </p>
      </div>
    </div>
  );
};

export default About;
