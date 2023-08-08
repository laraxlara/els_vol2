import React from "react";
import Image from "next/image";
import { PropTypes, string } from "prop-types";

const Service = ({ description, name, src1, src2 }) => {
  return (
    <div className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-800 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            {name}
          </h2>
          <span className="block h-[0.2px] bg-gray-400 my-10 rounded-full"></span>
          <p className="text-sm">{description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={src1}
            alt="office content 1"
            width={200}
            height={100}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={src2}
            alt="office content 2"
            width={200}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  description: PropTypes.string,
  name: PropTypes,
  string,
  src1: PropTypes.object,
  src2: PropTypes.object,
};

export default Service;
