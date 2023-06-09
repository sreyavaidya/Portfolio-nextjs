import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#8e3080]">ABOUT</p>
          <h2 className="py-4">Get To Know Me</h2>
          <p className="py-2 text-gray-600">
            I thrive on turning creative ideas into stunning user interfaces and seamless web experiences. With 4 years of
            experience in the field, I have developed a strong command over modern web technologies like HTML, CSS, and
            JavaScript. I’m passionate about learning new technologies and understand there is more than one way to accomplish a
            task. I am a quick learner and can pick up new tech stacks as needed. I believe that being a great developer is not
            using one specific language, but choosing the best tool for the job. I believe that the frontend is where the magic
            happens. It's the user's first point of contact with a digital product, and it's my goal to make that interaction
            exceptional. I enjoy collaborating with designers and other developers to transform wireframes and mockups into
            functional, responsive, and visually appealing websites.
          </p>
          <p className="py-2 text-gray-600">
            I started web developement in 2019 working on multiple enterprise based applications in Angular. I have experience working
            directly with clients and taking mock wireframes all the way to deployed applications. I'm excited about the future
            of web development and the endless possibilities it holds. I'm always ready to take on new challenges, tackle
            complex problems, and deliver outstanding results. Let's connect and discuss how we can collaborate to bring your
            vision to life!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 cursor-pointer">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
