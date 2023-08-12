"use client";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Slide, Fade } from "react-awesome-reveal";
import Image from "next/image";
import Tag from "./Tag";

const About = () => {
  return (
    <div className="flex-col items-center justify-center flex md:flex-row sm:pt-48 m-3 pt-24">
      <Slide>
        <div className="md:flex-col flex-wrap max-w-xl p-4">
          <h1 className="align-top font-extrabold text-3xl sm:text-5xl md:text-6xl pb-4">
            About Me.
          </h1>

          <p className="text-md md:text-xl">
            My name is Haris and I am currently a 3rd Year Business Analytics
            student at the National University of Singapore. I'm still figuring
            out the ways in life, but I am constantly trying to improve my
            design thinking abilities and I enjoy learning new technologies. I
            aspire to be able to build something impactful in the future.
          </p>

          <h1 className="align-top font-extrabold text-xl sm:text-3xl md:text-4xl pt-5">
            Skills.
          </h1>
          <div className="flex flex-row pt-3 flex-wrap">
            <Tag text="Python" />
            <Tag text="SQL" />
            <Tag text="R" />
            <Tag text="Javascript" />
            <Tag text="HTML, CSS" />
            <Tag text="ReactJS" />
            <Tag text="VueJS" />
            <Tag text="Firebase" />
            <Tag text="Git" />
          </div>
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
            className="w-[150px] sm:w-[345px]"
          />
          <p className="text-gray-600 flex justify-center items-center italic text-xl pt-2">
            POV: Me.
          </p>
        </div>
      </Slide>
    </div>
  );
};

export default About;
