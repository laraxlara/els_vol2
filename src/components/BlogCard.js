import React from "react";

const BlogCard = () => {
  return (
    <article className="flex bg-white transition shadow-lg hover:shadow-2xl my-6 rounded-lg">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time className="flex items-center justify-between gap-4 text-sm font-bold uppercase text-gray-900">
          <span>2022</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>Oct 01</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt="Guitar"
          src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="aspect-square h-full w-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold text-3xl uppercase text-gray-900 my-4">
              Why Is Limo Service Better Than Uber?
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-md text-gray-700">
            You have to attend an important conference in Miami. You and your
            team have been preparing for a really long time and everything has
            to be…
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            className="block m-8 bg-yellow-300 px-5 py-3 text-center text-sm font-bold uppercase text-gray-900 transition rounded-lg hover:bg-yellow-400"
          >
            Read Blog
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
