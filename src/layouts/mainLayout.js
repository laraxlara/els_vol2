import React from "react";
// import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import FAQ from "@/sections/FAQ";
import Footer from "@/components/Footer";
import { PropTypes } from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Head></Head>
      <div className="home-page-container">
        <div className="h-[200px] py-[50px]">
          <video autoPlay loop muted playsInline src={"/videos/video.mp4"} />
        </div>
        <Navbar />
        <main className="relative z-1">{children}</main>
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
