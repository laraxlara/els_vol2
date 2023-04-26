import React from "react";
import Image from "next/image";
import { PropTypes } from "prop-types";

const FleetCard = ({ src, alt, name, char, description }) => {
  return (
    <div className="bg-transparent py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-[#232423] sm:flex-row md:h-80">
          <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <Image
              src={src}
              loading="lazy"
              alt={alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-xl font-bold text-gray-100 md:text-2xl lg:text-4xl">
              {name}
            </h2>
            <p className="mb-8 text-2xl max-w-md text-gray-300">{char}</p>
            <p className="mb-8 text-xl max-w-md text-gray-300">{description}</p>
            <div className="mt-auto">
              <a
                href="#"
                className="inline-block mb-4 rounded-lg bg-[#F7BE38] px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FleetCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  char: PropTypes.string,
  description: PropTypes.string,
};

export default FleetCard;
