import React from "react";
import Layout from "@/layouts/mainLayout";
import BookingForm from "@/components/BookingForm";

const book = () => {
  return (
    <Layout>
      <section className="mt-[-200px] pt-[10rem] lg:pt-[15rem] bg-black bg-opacity-50">
        <div className="px-4 w-full md:w-[80%] mx-auto my-0">
          <h1 className="flex flex-col gap-6 font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-200 text-center mb-12 font-hatton">
            <span className="block">Book your</span>
            <span>luxury ride</span>
            <span className="block font-serif italic">now</span>
          </h1>
          <BookingForm />
        </div>
      </section>
    </Layout>
  );
};

export default book;
