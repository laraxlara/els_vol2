import React from "react";
import Layout from "@/layouts/mainLayout";
import FleetCard from "@/components/FleetCard";

import fleet1 from "../../public/images/fleet1.jpg";
import fleet2 from "../../public/images/fleet2.jpg";
import fleet3 from "../../public/images/fleet3.jpg";
import fleet4 from "../../public/images/fleet4.jpg";
import fleet5 from "../../public/images/fleet5.jpg";

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
    src: fleet2,
    alt: "Luxury Sedan Mercedes E Class",
    name: "Luxury Sedan Mercedes E Class",
    char: "Max People: 3 || Max Luggage: 3",
    description: "Ultimate offer for luxorious and high class rides."
  },
  {
    id: 3,
    src: fleet3,
    alt: "Executive SUV Chevy Suburban",
    name: "Executive SUV Chevy Suburban",
    char: "Max People: 6 || Max Luggage: 6",
    description: "Exceptionally refined offer that fits all your needs.",
  },
  {
    id: 4,
    src: fleet4,
    alt: "Luxury SUV Cadillac Escalade",
    name: "Luxury SUV Cadillac Escalade",
    char: "Max People: 6 || Max Luggage: 6",
    description: "Comfortable and opulent option combined with extreme endurance will transform your busy day into an enjoyful one.",
  },
  {
    id: 5,
    src: fleet5,
    alt: "Luxury SUV Mercedes Sprinter",
    name: "Luxury SUV Mercedes Sprinter",
    char: "Max People: 14 || Max Luggage: 14",
    description: "Spacious and sophisticated choice for a variety of group travels such as business meetings, parties, special events and airport trasfers.",
  },
];

const Fleet = () => {
  return (
    <Layout>
      <section className="mt-[-200px] pt-[10rem] lg:pt-[15rem] bg-black bg-opacity-50">
        <div className="px-4 w-full md:w-[80%] mx-auto my-0">
          <h1 className="flex flex-col gap-6 font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-200 text-center">
            <span className="block">Chauffeured</span>
            <span>Black Car Service</span>
            <span className="block font-serif italic">Miami</span>
          </h1>
          <p className="my-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
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
  );
};

export default Fleet;
