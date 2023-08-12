import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  gitLink: string;
}
const Cards = ({ title, description, link, image, gitLink }: CardProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mx-5 mb-2 sm:max-w-xs">
      <a href={link} target="_blank">
        <img
          className="rounded-t-lg max-h-28 w-full h-full"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-5">
        <a href={link} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex">
          <a
            href={link}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Check it out!
          </a>
          <span className="px-5">
            <a
              href={gitLink}
              target="_blank"
              className="social-icon hover:text-gray-800"
            >
              <AiFillGithub size={35} />{" "}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
