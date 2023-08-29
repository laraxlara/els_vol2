import React from "react";
import Image from "next/image";
import HeroForm from "@/components/HeroForm";
import logo from "../../public/images/logo.png";

const Hero = () => {
  return (
    <section className="bg-transparent h-full xl:h-[100vh]">
      <div className="px-4 mx-auto my-0 max-w-screen-xl text-center flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <Image src={logo} alt="Logo" width={200} priority />
        </div>
        <h1 className="mb-8 text-3xl md:text-4xl font-extrabold text-white tracking-tight md:text-5xl lg:text-6xl">
          Miami`s Luxury Limousine Service
        </h1>
        <div className="flex flex-col mb-4 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#booking-section"
            className="inline-flex justify-center items-center py-3 px-5 text-gray-900 font-medium text-center rounded-lg bg-[#F7BE38] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
          >
            Book now
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="px-4 mt-6 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="hero-form-title font-semibold text-gray-200 text-xl uppercase">
            Check Availibility
          </span>
        </div>
      </div>
      <div className="xl:flex flex-wrap justify-center bg-[#171717] xl:bg-transparent items-center mt-8 text-gray-500 md:px-12">
        <HeroForm />
      </div>
    </section>
  );
};

export default Hero;
