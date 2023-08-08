import React from "react";
import Head from "next/head";
import Layout from "@/layouts/mainLayout";
import AboutMain from "@/sections/AboutMain";

import AboutGallery from "@/sections/AboutGallery";

const About = () => {
  return (
    <>
      <Head>
        <title>Executive Limo Service</title>
        <meta
          name="description"
          content="Executive Limo Service is a luxury transportation service established in 2017. that offers an extensive fleet of vehicles to fulfill all your needs. Our mission is to provide our clients the best possible experience with our comfortable and safe ride."
          key="desc"
        />
      </Head>
      <Layout>
        <section className="mt-[-200px] pt-[10rem] lg:pt-[15rem] bg-black xl:bg-opacity-50">
          <div className="px-4 w-full md:w-[80%] mx-auto my-0">
            <AboutMain />
            <AboutGallery />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
