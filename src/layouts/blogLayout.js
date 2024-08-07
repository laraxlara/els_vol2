import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { PropTypes } from "prop-types";

import services from "../../public/images/services.jpg";

const BlogLayout = ({ children }) => {
  return (
    <div className="main bg-black bg-opacity-50 w-full mt-[-200px] pt-[10rem] lg:pt-[5rem]">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <div className="mr-auto place-self-center px-12 xl:px-0  lg:col-span-7">
          <h1 className="max-w-2xl mb-4 pt-[10rem] text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Miami Limousine Service Blog
          </h1>
          <span className="block h-2 bg-[#F7BE38] bg-opacity-50 my-10 rounded-full"></span>
          <h2 className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl text-gray-200">
            Executive Limo Service
          </h2>
        </div>
        <div className="w-full bg-white flex flex-col xl:flex-row rounded-2xl py-6 my-12 mx-auto">
          <div className="w-full xl:w-[70%]">{children}</div>
          <div className="w-full xl:w-[30%] sticky top-0 p-6">
            <article className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6 mb-4">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                Top limo service in Miami
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Executive Limo Service Miami offers different rides such as
                airport transfer, corporate transportation service, wedding
                service, private transportation and many more. In order for you
                to have the safest experience, we are continuously monitoring
                Federal and Local guidelines for any updates. With our simple
                booking process you will be accommodated with desired vehicle
                and professional driver as soon as possible. We offer
                professional rides with reasonable prices.
              </p>

              <Link
                href="/about"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900"
              >
                Find out more about us
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </article>

            <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm hover:shadow-lg ">
              <Image
                alt="Executive SUV Chevy Suburban"
                src={services}
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Luxury Fleet Miami
                </h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Executive Limo Service is a luxury transportation service that
                  offers an extensive fleet of vehicles. All our chauffeurs are
                  highly trained and licensed professionals in charge of looking
                  after all of your needs.
                </p>

                <Link
                  href="/fleet"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900"
                >
                  Find out more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

BlogLayout.propTypes = {
  children: PropTypes.any,
};

export default BlogLayout;
