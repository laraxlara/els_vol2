import React from "react";
import Image from "next/image";
import Link from "next/link";
import main from "../../public/images/main.png";

const Main = () => {
  return (
    <section className="bg-black xl:bg-opacity-50">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Limo service for any occassion
          </h2>
          <p className="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            Executive Limo Service is a luxury transportation service
            established in 2017. that offers an extensive fleet of vehicles to
            fulfill all your needs.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-gray-900 font-medium text-center rounded-lg bg-[#F7BE38] hover:bg-[#F7BE38]/90"
          >
            Learn more about us
            <svg
              className="w-5 h-5 ml-2 -mr-1"
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
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-4 h-[250px] lg:flex">
          <Image
            src={main}
            width={591}
            height={324}
            alt="Executive SUV Chevy Suburban"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
