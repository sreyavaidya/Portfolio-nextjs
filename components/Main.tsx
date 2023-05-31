import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">LET'S LEARN, GROW AND EXCEL</p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#8e3080]"> Shreya </span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in crafting captivating web experiences. From bringing ideas to life
            through visually stunning and intuitive user interfaces to creating seamless and engaging digital journeys.
            Currently, I’m focused on building responsive front-end web applications integrating back-end technologies. Let's
            collaborate and transform your ideas into pixel-perfect reality!
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/shreya-vaidya-73686b126/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#8e3080]">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/sreyavaidya" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#8e3080]">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#8e3080]"
              >
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="#">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#8e3080]"
              >
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
