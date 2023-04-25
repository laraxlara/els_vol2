import React from "react";
import Gallery from "@/components/Gallery";

const AboutGallery = () => {
  return (
    <div className="bg-transparent py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-white lg:text-3xl">
              Our gallery
            </h2>
          </div>
        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default AboutGallery;
