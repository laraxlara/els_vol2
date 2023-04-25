import React from "react";
import Layout from "@/layouts/mainLayout";
import Hero from "@/sections/Hero";
import Main from "@/sections/Main";
import PricingSection from "@/sections/PricingSection";
import BookHome from "@/sections/BookHome";
import ServicesHome from "@/sections/ServicesHome";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Main />
      <PricingSection />
      <BookHome />
      <ServicesHome />
    </Layout>
  );
}
