import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black  via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-60 sm:mt-0">
            I'm a Front-End Developer
          </h2>
          <p className="py-4 text-gray-500 max-w-md">
            Hello! I'm Rahil Patel, a passionate front-end developer with over
            six years of hands-on experience crafting delightful and responsive
            user interfaces. My journey in the world of web development has been
            driven by a deep curiosity for creating seamless digital
            experiences.I am excited about the opportunity to bring my expertise
            to new challenges and contribute to creating exceptional digital
            experiences. Let's build something amazing together!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
