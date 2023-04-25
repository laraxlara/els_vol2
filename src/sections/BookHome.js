import React from "react";
import BookingForm from "@/components/BookingForm";

const BookHome = () => {
  return (
    <section className="bg-black bg-opacity-50 pt-[6rem] pb-[10rem] flex justify-center items-cenyter">
      <div className="w-[95%] xl:w-[65%]">
        <h1 className="mb-8 m-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Book your ride now
        </h1>
        <p className="my-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
          Fill out this form and we will contact you soon afterward. Fields with
          * are required.
        </p>
        <BookingForm />
      </div>
    </section>
  );
};

export default BookHome;
