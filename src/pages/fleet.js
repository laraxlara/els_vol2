import React from "react";
import Head from "next/head";
import Layout from "@/layouts/mainLayout";
import FleetCard from "@/components/FleetCard";

import fleet1 from "../../public/images/fleet1.jpg";
import fleet2 from "../../public/images/fleet2.jpg";
import fleet3 from "../../public/images/fleet3.jpg";
import fleet4 from "../../public/images/fleet4.jpg";
import fleet5 from "../../public/images/fleet5.png";

const fleet = [
  {
    id: 1,
    src: fleet1,
    alt: "Executive Sedan Cadillac XTS",
    name: "Executive Sedan Cadillac XTS",
    char: "Max People: 3 || Max Luggage: 3",
    description: "Executive service for business travel.",
  },
  {
    id: 2,
    src: fleet4,
    alt: "Luxury Sedan Mercedes S Class",
    name: "Luxury Sedan Mercedes S Class",
    char: "Max People: 3 || Max Luggage: 3",
    description: "Ultimate offer for luxorious and high class rides.",
  },
  {
    id: 3,
    src: fleet2,
    alt: "Executive SUV Chevy Suburban",
    name: "Executive SUV Chevy Suburban",
    char: "Max People: 6 || Max Luggage: 6",
    description: "Exceptionally refined offer that fits all your needs.",
  },
  {
    id: 4,
    src: fleet5,
    alt: "Luxury SUV Cadillac Escalade",
    name: "Luxury SUV Cadillac Escalade",
    char: "Max People: 6 || Max Luggage: 6",
    description:
      "Comfortable and opulent option combined with extreme endurance will transform your busy day into an enjoyful one.",
  },
  {
    id: 5,
    src: fleet3,
    alt: "Luxury SUV Mercedes Sprinter",
    name: "Luxury SUV Mercedes Sprinter",
    char: "Max People: 14 || Max Luggage: 14",
    description:
      "Spacious and sophisticated choice for a variety of group travels such as business meetings, parties, special events and airport trasfers.",
  },
];

const Fleet = () => {
  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength - 3) + "...";
  };
  const description =
    "Executive Limo Service Miami offers different rides such as airport transfer, corporate transportation service, wedding service, private transportation and many more. In order for you to have the safest experience, we are continuously monitoring Federal and Local guidelines for any updates. With our simple booking process you will be accommodated with desired vehicle and professional driver as soon as possible. We offer professional rides with reasonable prices. Our vehicles are all embellished with luxurious and stylish seats providing you with full experience which is the most important thing to us.";
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Fleet | Chauffeured Black Car Service | Executive Limo Service | Limo
          Service Miami
        </title>
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
        <link rel="canonical" href="https://executivelimomiami.com/fleet/" />
      </Head>
      <Layout>
        <section className="mt-[-200px] pt-[10rem] lg:pt-[15rem] bg-black xl:bg-opacity-50">
          <div className="px-4 w-full md:w-[80%] mx-auto my-0">
            <h1 className="flex flex-col gap-6 font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-200 text-center">
              <span className="block">Chauffeured</span>
              <span>Black Car Service</span>
              <span className="block font-serif italic">Miami</span>
            </h1>
            <h2 className="flex flex-col gap-6 font-heading text-lg my-4 text-gray-200 text-center">
              Executive Limo Service
            </h2>
            <h3 className="flex flex-col gap-2 font-heading text-lg my-2 text-gray-200 text-center">
              Fleet
            </h3>
            <p className="my-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Discover the epitome of personalized luxury travel with our
              chauffeured black car service in Miami, where attention to detail
              and unparalleled professionalism redefine your every ride.
            </p>
            {fleet.map((item) => {
              return (
                <FleetCard
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  name={item.name}
                  char={item.char}
                  description={item.description}
                />
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Fleet;
