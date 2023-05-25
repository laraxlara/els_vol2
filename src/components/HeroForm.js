import React, { useState } from "react";

const HeroForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    numOfPassangers: 0,
    pickUpLocation: "",
    dropOffLocation: "",
    messages: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(data);
    setData({
      name: "",
      phone: "",
      email: "",
      numOfPassangers: 0,
      pickUpLocation: "",
      dropOffLocation: "",
      messages: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="hero-form bg-[#171717] px-6 py-4 rounded-none xl:rounded-2xl text-gray-100 mb-0 xl:my-2"
    >
      <div className="px-4 mx-auto my-0 max-w-screen-xl text-center flex flex-col xl:flex-row justify-center">
        <div className="px-2">
          <label className="block my-2 text-sm font-medium text-gray-100 ">
            Pick Up Location
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
              name="pickUpLocation"
              id="pickUpLocation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400  focus:ring-gray-500 focus:border-gray-500"
              placeholder="Pick Up Location"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="px-2">
          <label className="block my-2 text-sm font-medium text-gray-100 ">
            Drop Off Location
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
              id="dropOffLocation"
              name="dropOfLocation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400  focus:ring-gray-500 focus:border-gray-500"
              placeholder="Drop Off Location"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="px-2">
          <label className="block my-2 text-sm font-medium text-gray-100 ">
            Date
          </label>
          <div className="relative text-black">
            <div className="absolute inset-y-0 text-black left-0 flex items-center pl-3 pointer-events-none">
              {/* <svg
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
              </svg> */}
            </div>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500"
              name="date"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date), handleChange;
              }}
              required
            />
          </div>
        </div>

        <div className="px-2">
          <label className="block my-2 text-sm font-medium text-gray-100 ">
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
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400  focus:ring-gray-500 focus:border-gray-500"
              placeholder="example@gmail.com"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="px-2">
          <label className="block my-2 text-sm font-medium text-gray-100 ">
            Number Of Passengers
          </label>
          <select
            onChange={handleChange}
            name="numOfPassengers"
            className="bg-gray-50 h-[40px] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-gray-500 focus:border-gray-500 flex items-center"
            required
          >
            <option defaultValue={1}>Passengers</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-9 mb-4 mx-2 inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-gray-900 rounded-lg bg-[#F7BE38] hover:bg-opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default HeroForm;
