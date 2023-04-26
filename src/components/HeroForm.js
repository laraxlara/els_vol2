import React from "react";

const HeroForm = () => {
  return (
    <form className="bg-[#171717] px-6 py-4 rounded-2xl text-gray-100 mb-8 xl:my-2">
      <div className="px-4 mx-auto my-0 max-w-screen-xl text-center flex flex-col xl:flex-row justify-center">
        <div className="px-2">
          <label className="block my-2 text-sm font-medium text-gray-900 text-white">
            Pick Up Adress
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500 focus:border-gray-500"
              placeholder="Afdress example"
            />
          </div>
        </div>

        <div className="px-2">
          <label className="block my-2 text-sm font-medium text-gray-900 text-white">
            Destination
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500 focus:border-gray-500"
              placeholder="name@flowbite.com"
            />
          </div>
        </div>

        <div className="px-2">
          <label className="block my-2 text-sm font-medium text-gray-900 text-white">
            Date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500 focus:border-gray-500"
              placeholder="Enter date"
            />
          </div>
        </div>

        <div className="px-2">
          <label className="block my-2 text-sm font-medium text-gray-900 text-white">
            Your Email Adress
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500 focus:border-gray-500"
              placeholder="example@gmail.com"
            />
          </div>
        </div>

        <div className="px-2">
          <label className="block my-2 text-sm font-medium text-gray-900 text-white">
            Passangers
          </label>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg block w-full p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-gray-500 focus:border-gray-500 flex items-center"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5 mr-6 bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                fill="#bdbdbd"
              ></path>{" "}
            </svg>
            <svg
              className="w-4 h-4 ml-2 text-gray-400"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>

        <button
          type="submit"
          className="mt-9 mb-4 mx-2 inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-black rounded-lg bg-[#F7BE38] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default HeroForm;
