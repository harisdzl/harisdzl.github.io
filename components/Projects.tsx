"use client";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import Cards from "./Cards";

const Projects = () => {
  return (
    <div className="flex flex-col md:flex-col pt-24 sm:pt-26">
      <Slide>
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl p-8 z-20">
          Projects.
        </h1>
      </Slide>
      <div className="flex flex-row md:flex-row px-12 justify-center flex-wrap h-80v lg:h-70v xl:h-40v items-center overflow-y-auto">
        <Slide delay={100} damping={0.1}>
          <Cards
            title="timeNUS"
            description="NUS Orbital Program 2022 (Advanced). Developed a full stack productivity application tailored towards university students."
            link="https://timenus-orbital.web.app/"
            image="/timenus-cropped-logo.png"
            gitLink="https://github.com/harisdzl/timeNUS-Orbital"
          />
          <Cards
            title="WorkWise"
            description="BT3103 Final Project. Developed a full stack productivity application tailored towards businesses."
            link="https://workwise-b1604.web.app/"
            image="/workwise-logo.png"
            gitLink="https://github.com/harisdzl/WorkWise"
          />
          <Cards
            title="Wiki Q&A Generator"
            description="Developed a Wikipedia Question-Answer generator utilising Hugging Face's Transformer library."
            link="https://harisdzl-wiki-question-answer-pair-wiki-qaapp-mc1qut.streamlit.app/"
            image="/huggingface-wiki.png"
            gitLink="https://github.com/harisdzl/wiki-question-answer-pair"
          />
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
