import React from "react";
import Link from "next/link";
import { links } from "./Dropdown";
import { func } from "prop-types";

const NavLinks = (props) => {
  return (
    <>
      {links.map((link) => (
        <div key={link.id} className="lg:px-4 lg:py-4">
          <h6 className="font-bold text-md py-2 lg:text-lg">{link.name}</h6>
          {link.sublinks.map((sublink) => {
            return (
              <li
                key={sublink.id}
                onClick={props.onClick}
                className="flex flex-col gap-4"
              >
                <Link
                  href={sublink.link}
                  className="py-1 border-b-2 border-gray-300 hover:bg-gray-300 cursor-pointer"
                >
                  {sublink.name}
                </Link>
              </li>
            );
          })}
        </div>
      ))}
    </>
  );
};

NavLinks.propTypes = {
  onClick: func,
};

export default NavLinks;
