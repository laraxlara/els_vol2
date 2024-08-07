import React from "react";
import Link from "next/link";
import Image from "next/image";
import data from "../data/data.json";
import { PropTypes } from "prop-types";

const BlogCard = ({ src, alt }) => {
  return (
    <>
      {data.blogs.map((blog) => {
        return (
          <article
            key={blog.id}
            className="flex bg-white transition shadow-lg hover:shadow-2xl my-6 rounded-lg"
          >
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time className="flex items-center justify-between gap-4 text-sm font-bold uppercase text-gray-900">
                <span>2022</span>
                <span className="w-px flex-1 bg-gray-900/10"></span>
                <span>Oct 01</span>
              </time>
            </div>

            <div className="hidden sm:block sm:basis-56">
              <Image
                alt={alt}
                src={src}
                className="aspect-square h-full w-full object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <Link href={`blog/${blog.slug}`}>
                  <h3 className="font-bold text-3xl uppercase text-gray-900 my-4">
                    {blog.title}
                  </h3>
                </Link>
                {[blog.text].map((paragraph) => {
                  return (
                    <p
                      key={paragraph.id}
                      className="mt-2 line-clamp-3 text-md text-gray-700"
                    >
                      {paragraph.p1}
                    </p>
                  );
                })}
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <Link
                  href={`blog/${blog.slug}`}
                  className="block m-8 bg-yellow-300 px-5 py-3 text-center text-sm font-bold uppercase text-gray-900 transition rounded-lg hover:bg-yellow-400"
                >
                  Read Blog
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

BlogCard.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string,
};

export default BlogCard;
