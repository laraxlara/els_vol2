import React from "react";
import Head from "next/head";
import Layout from "@/layouts/mainLayout";
import Hero from "@/sections/Hero";
import Main from "@/sections/Main";
import PricingSection from "@/sections/PricingSection";
import BookHome from "@/sections/BookHome";
import ServicesHome from "@/sections/ServicesHome";

export default function Home() {
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
        <Hero />
        <Main />
        <PricingSection />
        <BookHome />
        <ServicesHome />
      </Layout>
    </>
  );
}
