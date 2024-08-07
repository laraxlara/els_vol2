import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PropTypes } from "prop-types";

const EventCard = ({ src, title, alt, text, href }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <Image
        alt={alt}
        src={src}
        width={100}
        height={100}
        className="h-56 w-full object-cover"
        unoptimized
      />
      <div className="bg-[#232423] border-gray-600 text-white p-4 sm:p-6">
        <p className="block text-xs text-gray-300">Miami Limousine Service</p>
        <h3 className="mt-0.5 text-xl">{title}</h3>
        <p className="mt-2 line-clamp-3 text-md text-gray-300">{text}</p>
        <Link
          href={href}
          className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-black rounded-lg bg-[#F7BE38] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mt-4"
        >
          Read more
        </Link>
      </div>
    </article>
  );
};

EventCard.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};

export default EventCard;
