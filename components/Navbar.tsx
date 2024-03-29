"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionID: string) => {
    const section = document.getElementById(sectionID);
    const navbar = document.querySelector("nav");
    const offset = navbar ? navbar.clientHeight : 0;
    console.log(offset);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    setIsOpen(false);
  };

  useEffect(() => {
    scrollToSection("hero");
  }, []);

  return (
    <nav className="z-50 bg-white shadow border-gray-200 dark:bg-gray-900 p-2 sticky top-0">
      <div className="flex flex-wrap items-center justify-between mx-auto p-6 w-screen">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="flex items-center font-extrabold text-4xl"
        >
          Haris.Dzl
        </a>
        <button
          type="button"
          className="sm:hidden flex flex-col h-10 w-10 border-black rounded justify-center items-center group"
          onClick={toggleMenu}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto mt-4 md:mt-0 transition ease-in duration-700`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className="block text-xl py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("experience");
                }}
                className="block text-xl py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="block text-xl py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
