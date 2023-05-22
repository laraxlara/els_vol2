import React from "react";
import EventCard from "@/components/EventCard";

import airport from "../../public/images/airport.jpg";
import corporate from "../../public/images/corporate.jpg";
import events from "../../public/images/events.jpg";
import long from "../../public/images/long.jpg";
import party from "../../public/images/party.jpg";
import services from "../../public/images/services.jpg";

const data = [
  {
    id: 1,
    src: airport,
    alt: "Airplane",
    title: "Airport || Seaport Transfer",
    text: "Avoid the crowd on airports and seaports and enjoy your comfortable ride with us. We will pick you up when arranged and take care of all your luggage from any airport or seaport in Miami.",
  },
  {
    id: 2,
    src: corporate,
    alt: "Businessman signing a contract",
    title: "Corporate Limo Service",
    text: "Experience professionalism and thrustworthiness on the highest possible level and be on your arranged business meeetings and events relaxed and on time.",
  },
  {
    id: 3,
    src: services,
    alt: "Bride making a toast with bridesmades",
    title: "Special Occassion Limo Service",
    text: "Enjoy this special day with us. We offer outstanding and stylish limo service that will make this day the most memorable one during your lifetime.",
  },
  {
    id: 4,
    src: party,
    alt: "Inside of the party limousine",
    title: "Party Limo Service",
    text: "Make your Birthday or Bachelor/Bachelorette party whole with luxury limousine. Book on time and arrange everything for you and your friends.",
  },
  {
    id: 5,
    src: events,
    alt: "Pople exiting limousine to attend red carpet event",
    title: "Events & Tours Limo Service",
    text: "You are visiting Miami and want to see some beautiful places, want to visit an upcoming event or spend a luxuorious night in the city? Miami is a city with variety of events. Book your limo and visit any of them without any worries on your mind.",
  },
  {
    id: 6,
    src: long,
    alt: "Miami Buildings",
    title: "Long Distance Limo & Car Service",
    text: "Whether you want to visit Orlando or any other city nearby or maybe go out of the state line we will accomodate your needs. Plan your trip in advance with the best limo service.",
  },
];

const ServicesHome = () => {
  return (
    <section className="bg-black xl:bg-opacity-50 py-12 mx-auto px-4 md:px-12">
      <div className="-mx-1 lg:-mx-4">
        <div className="grid gap-4 sm:grid-cols-1 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8 ">
          {data.map((item) => {
            return (
              <EventCard
                key={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
