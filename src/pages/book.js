import React from "react";
import Head from "next/head";
import Layout from "@/layouts/mainLayout";
import BookingForm from "@/components/BookingForm";

const book = () => {
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
            <h1 className="flex flex-col gap-6 font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-200 text-center mb-12 font-hatton">
              <span className="block">Book your</span>
              <span>luxury ride</span>
              <span className="block font-serif italic">now</span>
            </h1>
            <div className="max-w-4xl mx-auto pb-12">
              <BookingForm />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default book;
