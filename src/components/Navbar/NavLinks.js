import React from "react";
import Link from "next/link";
import { links } from "./Dropdown";

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <li key={link.id} className="lg:px-4 lg:py-4">
          <h6 className="font-bold text-md py-2 lg:text-lg">{link.name}</h6>
          {link.sublinks.map((sublink) => {
            return (
              <li
                key={sublink.id}
                className="py-1 border-b-2 border-gray-300 hover:bg-gray-300 cursor-pointer"
              >
                <Link href={sublink.link}>{sublink.name}</Link>
              </li>
            );
          })}
        </li>
      ))}
    </>
  );
};

export default NavLinks;
