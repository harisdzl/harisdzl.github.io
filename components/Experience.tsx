"use client";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <div className="flex flex-col md:flex-col pt-24 sm:pt-26">
      <Slide>
        <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl p-8 z-20">
          Experiences.
        </h1>
      </Slide>
      <div className="flex flex-col md:flex-col px-12 overflow-y-auto h-60v">
        <Slide delay={100} cascade damping={0.1}>
          <Timeline
            name="Seamoney - Retail Finance Intern"
            duration="June 2023 - Current"
            shortDescription="Data Analytics for Business Development"
            tags={["PrestoSQL", "Python", "Finance"]}
            logo="/seamoney-logo.png"
          />
          <Timeline
            name="Shopee SPX - Operational Excellence Intern"
            duration="Feb 2023 - Apr 2023"
            shortDescription="Finding lost parcels"
            tags={["Google Sheets", "PrestoSQL"]}
            logo="/shopee-logo.png"
          />
          <Timeline
            name="Grain - Business Develpoment Intern"
            duration="Apr 2021 - July 2021"
            shortDescription="Driving growth of products during Covid"
            tags={["Google Sheets", "Growth Hack"]}
            logo="/grain-logo.png"
          />
        </Slide>
      </div>
    </div>
  );
};

export default Experience;
