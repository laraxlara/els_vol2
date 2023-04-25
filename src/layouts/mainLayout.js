import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import FAQ from "@/sections/FAQ";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="home-page-container">
      <div className="h-[200px] py-[50px]">
        <video autoPlay loop muted src={"/videos/video.mp4"} />
      </div>
      <Navbar />
      <main className="relative z-1">{children}</main>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Layout;
