import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black xl:bg-opacity-50 m-w-screen-xl">
      <div className="text-white relative z-1 flex flex-start items-center flex-col">
        <div className="footer-wrapper w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mt-12 px-6">
          <div className="footer-contact flex gap-8 text-[1.4rem] flex-col flex-1 text-center m-2">
            <h6 className="font-400 uppercase text-[32px] mb-2 tracking-wider">
              Contact Us
            </h6>
            <p>
              <span>1000 Brickell Ave Ste 715</span>
            </p>
            <p>Miami, FL 33131</p>
            <a href="tel://+13055702684">+1 305-570-2684</a>
          </div>

          <div className="footer-logo flex flex-col flex-1 text-center m-2 justify-center items-center">
            <Image width={250} src={logo} alt="Executive Limo Service" />

            <div className="footer-icons flex my-12 justify-center items-center">
              <a
                href="https://www.instagram.com/executivelimoservicemiami/"
                className="m-2 text-[3rem] hover:text-gray-500"
                aria-label="Instagram"
                target="blank"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.facebook.com/executivelimoservicellc/"
                className="m-2 text-[3rem] hover:text-gray-500"
                aria-label="Facebook"
                target="blank"
              >
                <BsFacebook />
              </a>
              <a
                href="/"
                className="m-2 text-[3rem] hover:text-gray-500"
                aria-label="LinkedIn"
                target="blank"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-links flex flex-col gap-4 flex-1 text-center m-6">
            <h6 className="text-[32px] uppercase mb-2 tracking-wider">
              Quick Links
            </h6>
            <Link href="/" className="hover:tracking-widest">
              HOME
            </Link>
            <Link
              href="/about"
              className="hover:tracking-widest transition ease duration-1000"
            >
              ABOUT
            </Link>
            <Link href="/contact" className="hover:tracking-widest">
              CONTACT
            </Link>
            <Link href="/book" className="hover:tracking-widest">
              BOOK
            </Link>
            <Link href="/fleet" className="hover:tracking-widest">
              FLEET
            </Link>
            <Link href="/blog" className="hover:tracking-widest">
              BLOG
            </Link>
          </div>
        </div>

        <div className="text-center m-6 text-lg">
          <p>2022 Executive Limo Service. All Rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
