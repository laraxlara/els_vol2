import React from "react";
import Layout from "@/layouts/mainLayout";
import AboutMain from "@/sections/AboutMain";

import AboutGallery from "@/sections/AboutGallery";

const About = () => {
  return (
    <Layout>
      <section className="mt-[-200px] pt-[10rem] lg:pt-[15rem] bg-black bg-opacity-50">
        <div className="px-4 w-full md:w-[80%] mx-auto my-0">
          <AboutMain />
          <AboutGallery />
        </div>
      </section>
    </Layout>
  );
};

export default About;
