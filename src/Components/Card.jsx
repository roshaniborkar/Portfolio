import React from "react";
import { IoEarthSharp } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

function Card(props) {
  const { pictureSrc, title, description, readMoreLink, demoLink } = props;

  return (
    <div className="hover:shadow-2xl  hover:shadow-green-500 hover:scale-105 transition-shadow max-w-sm border border-white rounded-lg shadow mx-3 bg-black">
      <img className="rounded-t-lg w-96 h-36" src={pictureSrc} alt="" />
      <div className="p-5">
        <a href={readMoreLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="bg-black">{title}</span>
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
          <span className="bg-black">
            {description.length > 150
              ? description.slice(0, 150) + "..."
              : description}
          </span>
        </p>

        <div className="flex justify-center items-center gap-8 mt-8">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-lg flex items-center"
            >
              <span className="mr-2">Demo</span>
              <IoEarthSharp className="inline-block" />
            </a>
          )}
          <a
            href={readMoreLink}
            target="_blank"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <span className="mr-2">Github</span>
            <FiGithub className="inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
