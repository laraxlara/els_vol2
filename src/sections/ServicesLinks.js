import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";

const ServicesLinks = () => {
  return (
    <section aria-label="Services Links" className="bg-white mb-12 rounded-xl">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="bg-black rounded-full p-2">
            <Image src={logo} alt="Logo" width={90} height={90} />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Find out more about our services!
                </h2>

                <p className="mt-4 text-gray-500">
                  All our services at one place.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end"></div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-xl text-gray-900">
                Corporate Limo Service
              </p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Conference events
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-xl text-gray-900">
                Airport || Seaport Transfer
              </p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Airport Miami Limo Service
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Airport Miami Limo Service
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/mia-to-miami-beach"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      MIA to Miami Beach Transfers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mia-to-port-everglades"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      MIA to Port Everglades Transfers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mia-to-port-miami"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      MIA to Port Miami Transfers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      MIA to Seaport Car Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      MIA to Fort Lauderdale Transfers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-xl text-gray-900">
                Special Occassion Limo Service
              </p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Wedding limo service
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Prom limo serivce
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Proposal || Engagement limo service
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold tex-xl text-gray-900">
                Events & Tours Limo Service
              </p>

              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Miami touyrs and events limo
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Art Basel limo service
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Winery tours limo
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Music festival and night out limo
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Miami sightseeing limo service
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-xl text-gray-900">
                Party Limo Service
              </p>

              <nav aria-label="Footer Navigation - Downloads" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Birthday limo service
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Homecoming limo service
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Graduation day limo service
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Sweet 16 limo service
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Bachelorette limo service
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Bachelor limo service
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Quinceañera limo service
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-xl text-gray-900">
                Long Distance Limo & Car Service
              </p>

              <nav aria-label="Footer Navigation - Downloads" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Out of city rides
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Out of state rides
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLinks;
