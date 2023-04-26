import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="">
      <nav className="absolute top-0 lg:fixed flex justify-between items-center z-10 top-10 w-[85%] h-[70px] xl:h-[90px] left-[50%] translate-x-[-50%] px-[30px] bg-[#171717] rounded-2xl">
        <div
          className="text-3xl lg:hidden text-gray-600 relative"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <>
              <AiOutlineClose />
            </>
          ) : (
            <>
              <CiMenuBurger />
            </>
          )}
        </div>
        {mobileMenu ? (
          <ul className="absolute lg:hidden bg-white top-[70px] text-lg flex flex-col gap-2 lg:gap-4 text-gray-900 p-6 rounded-b-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/book">Book</Link>
            </li>
            <li>
              <Link href="/fleet">Fleet</Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex justify-start items-center w-full"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Services{" "}
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
              {open ? (
                <ul className="relative bg-white text-black grid lg:hidden lg:grid-cols-2 xl:grid-cols-3 rounded-lg">
                  <NavLinks />
                </ul>
              ) : null}
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        ) : null}

        <ul className="hidden lg:flex gap-10 text-gray-300">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/book">Book</Link>
          </li>
          <li>
            <Link href="/fleet">Fleet</Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex justify-center items-center w-full"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Services{" "}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </Link>
            {open ? (
              <ul className="absolute top-[90px] bg-gray-200 text-black hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 rounded-lg">
                <NavLinks />
              </ul>
            ) : null}
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <button
          type="button"
          className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 rounded-lg text-sm py-2.5 text-center inline-flex pl-2 pr-5 items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-telephone w-4 h-4 mx-1 color-black"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />{" "}
          </svg>
          + 1 305-570-2684
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
