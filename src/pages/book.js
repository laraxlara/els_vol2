import React from "react";
import Head from "next/head";
import Layout from "@/layouts/mainLayout";
import BookingForm from "@/components/BookingForm";

const book = () => {
  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength - 3) + "...";
  };

  const description =
    "Book you luxury ride now. Executive Limo Service is a luxury transportation service established in 2017. that offers an extensive fleet of vehicles to fulfill all your needs. Our mission is to provide our clients the best possible experience with our comfortable and safe ride. We are constantly elevating our service because our clients are our number one priority.";

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Book | Executive Limo Service | Limo Service Miami</title>
        <meta
          name="description"
          content={truncateString(description, 150)}
          key="desc"
        />
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <meta name="language" content="en" />

        <meta
          property="og:title"
          content="Executive Limo Service Miami | Luxury Car Rental"
        />
        <meta
          property="og:description"
          content="Executive Limo Service in Miami offers luxury car rentals for various occasions. Choose from our premium fleet and enjoy first-class transportation."
        />
        <meta property="og:image" content="/images/og.png" />
        <meta property="og:url" content="https://executivelimomiami.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="/images/og.png" />
        <meta
          name="twitter:title"
          content="Executive Limo Service Miami | Luxury Car Rental"
        />
        <meta
          name="twitter:description"
          content="Executive Limo Service in Miami offers luxury car rentals for various occasions. Choose from our premium fleet and enjoy first-class transportation."
        />
        <meta name="twitter:image" content="/images/og.png" />
        <link rel="canonical" href="https://executivelimomiami.com/book/" />
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
