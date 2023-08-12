"use client";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import { TbHandClick } from "react-icons/tb";
import Tag from "./Tag";

interface TimeLineProps {
  name: string;
  duration: string;
  shortDescription: string;
  tags: string[];
  logo: string;
}

const Timeline = ({
  name,
  duration,
  shortDescription,
  tags,
  logo,
}: TimeLineProps) => {
  return (
    <div className="flex cursor-pointer">
      <ol className="flex flex-row relative border-l border-gray-300 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center bg-blue-100 rounded-full -left-3 dark:ring-gray-900 dark:bg-blue-900 w-4 h-4 sm:w-6 sm:h-6"></span>
          <h1 className="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
            {name}
            <span className="dark:bg-blue-900 dark:text-blue-300 ml-2"></span>
          </h1>
          <time className="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
            {duration}
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {shortDescription}
          </p>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </li>
        <div className="px-5 hidden md:block">
          <img src={logo} alt="ex-logo" className="h-18 sm:h-20" />
        </div>
      </ol>
    </div>
  );
};

export default Timeline;
