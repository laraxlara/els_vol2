import React from "react";
import Link from "next/link";

const PricingSection = () => {
  return (
    <section className="bg-black xl:bg-opacity-50">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Best Limo Rates In Miami
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Experience luxury and sophistication with our premier chauffeured
              black car service in Miami, where every journey is a testament to
              impeccable style and comfort.
            </p>
          </div>
          <div className="bg-[#d9d7d7] mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-black">
                Book Your Dream Limo Today
              </h3>
              <p className="mt-6 text-md leading-7 text-black">
                Executive Limo Service provides the best limo rates in Miami,
                Florida. For only $74.99 you can enjoy the best service
                possible.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold text-xl leading-6 text-black">
                  Best service
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-md leading-6 text-black sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Luxury comfort
                </li>

                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Safe ride
                </li>

                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Timely arrival
                </li>

                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Professional drivers
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <h6 className=" font-semibold text-black px-2">
                    YOUR DREAM LIMO RIDE
                  </h6>
                  <h6 className=" font-semibold text-black">
                    STRARTING AT ONLY
                  </h6>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-black">
                      $74.99
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-black">
                      / transfer
                    </span>
                  </p>
                  <Link
                    href="/book"
                    className="mt-10 block w-full rounded-md bg-[#F7BE38] px-3 py-4 text-center text-sm font-semibold text-black shadow-sm hover:bg-[#F7BE38]/90"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
