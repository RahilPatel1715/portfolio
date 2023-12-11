import React from "react";
import gpt3 from "../assets/portfolio/GPT-3.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: gpt3,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg" key={id}>
              <img
                src={src}
                className="rounded-md duration-200 hover:scale-105"
                alt=""
              />
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href="https://app-one.rahilpatel.net/"
                  target="_blank"
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href="https://github.com/RahilPatel1715/ui_ux_design"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
