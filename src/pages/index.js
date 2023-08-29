import React from "react";
import Head from "next/head";
import Layout from "@/layouts/mainLayout";
import Hero from "@/sections/Hero";
import Main from "@/sections/Main";
import PricingSection from "@/sections/PricingSection";
import BookHome from "@/sections/BookHome";
import ServicesHome from "@/sections/ServicesHome";

export default function Home() {
  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength - 3) + "...";
  };

  const description =
    "Executive Limo Service is a luxury transportation service established in 2017. that offers an extensive fleet of vehicles to fulfill all your needs. Our mission is to provide our clients the best possible experience with our comfortable and safe ride. We are constantly elevating our service because our clients are our number one priority.";
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Executive Limo Service | Limo Service Miami | Car Service Miami |
          Executive Limo Service
        </title>
        <meta
          name="description"
          content={truncateString(description, 150)}
          key="desc"
        />
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <meta name="language" content="en" />
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
