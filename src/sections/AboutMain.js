import React from "react";
import Image from "next/image";
import services from "../../public/images/services.jpg";

const AboutMain = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="relative w-full lg:w-1/2 px-4 mb-12 lg:mb-0 lg:pr-24 xl:pr-40">
        <div className="max-w-md md:max-w-lg mx-auto lg:mr-0 mb-12 md:mb-20">
          <span className="inline-block py-1 px-3 mb-4 text-sm font-semibold text-black bg-[#F7BE38] rounded-full">
            About Executive Limo Service
          </span>
          <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-200">
            <span className="block">Top</span>
            <span>limo service</span>
            <span className="block font-serif italic">in Miami</span>
          </h1>
        </div>
        <Image className="block w-full" src={services} alt="" />
        <p className="text-2xl text-gray-200 my-8">
          Executive Limo Service is a luxury transportation service established
          in 2017. that offers an extensive fleet of vehicles to fulfill all
          your needs. Our mission is to provide our clients the best possible
          experience with our comfortable and safe ride. We are constantly
          elevating our service because our clients are our number one priority.
        </p>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <div className="max-w-md md:max-w-lg xl:max-w-2xl mx-auto lg:mx-0">
          <p className="text-lg font-semibold text-gray-200 mb-8">
          Limo service Miami for any occassion at your service 24/7.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Executive Limo Service Miami offers different rides such as airport
            transfer, corporate transportation service, wedding service, private
            transportation and many more. In order for you to have the safest
            experience, we are continuously monitoring Federal and Local
            guidelines for any updates. With our simple booking process you will
            be accommodated with desired vehicle and professional driver as soon
            as possible. We offer professional rides with reasonable prices. Our
            vehicles are all embellished with luxurious and stylish seats
            providing you with full experience which is the most important thing
            to us. Cold water is something you can always count on during rides.
            We are striving for excellence hence we provided all our vehicles
            with QR codes so that you are always able to give us feedback while
            enjoying your ride. With our point to point service you will be
            served on your pick up location and safely transferred to the
            desired location in a high manner. Nevertheless if you are attending
            a special event or trying to get somewhere from an airport or
            seaport and vice versa we will provide you with hourly limousine
            service with the best transport rates in Miami, Florida.
          </p>
          <h2 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-200">
            <span className="block">Professional</span>
            <span>chauffeurs</span>
          </h2>
          <p className="text-lg text-gray-300 my-8">
            All our chauffeurs are highly trained and licensed professionals in
            charge of looking after all of your needs. They possess the
            knowledge of the best possible routes and aim to get you safely to
            your destination in the short notice. Everyone we hire is checked
            and undergone serious training from taking care of the vehicle to
            impeccable appearance and excellent communication skills. Part of
            their excellence is also their insatiable desire for constant
            improvement of their expertise and precise feeling for time and
            punctuality. A chauffeur is in charge of the operation of the
            vehicle as well as the maintenance of the high level of cleanliness.
            If you want the best and the most comfortable service possible, book
            your ride with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
