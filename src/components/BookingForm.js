import React, { useState } from "react";
import Image from "next/image";
import fleet1 from "../../public/images/fleet1.jpg";
import fleet2 from "../../public/images/fleet2.jpg";
import fleet3 from "../../public/images/fleet3.jpg";
import fleet4 from "../../public/images/fleet4.jpg";
import fleet5 from "../../public/images/fleet5.jpg";

const BookingForm = () => {
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
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only">Name</label>
            <input
              className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
              placeholder="Name"
              name="name"
              type="text"
              id="email"
              pattern="john"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="sr-only">Phone</label>
            <input
              className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
              placeholder="Phone Number"
              name="phone"
              type="tel"
              id="phone"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only">Email</label>
            <input
              className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
              placeholder="Email address"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="sr-only">Select an option</label>
            <select
              id="passengers"
              name="numOfPassangers"
              className="w-full h-[45px] text-gray-400 rounded-lg border-2 border-gray-400 p-3 text-sm"
              onChange={handleChange}
              required
            >
              <option defaultValue={1}>Number Of Passengers</option>
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
        </div>

        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          <div>
            <input
              type="checkbox"
              value=""
              className="hidden peer"
              required=""
            />

            <label className="block w-full flex justify-center items-center rounded-lg border-2 border-gray-400 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
              <Image src={fleet1} alt="" height={150} />
            </label>
          </div>

          <div>
            <input type="checkbox" value="" className="hidden peer" required />

            <label className="block w-full flex justify-center items-center rounded-lg border border-2 border-gray-400 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
              <Image src={fleet2} alt="" height={150} />
            </label>
          </div>

          <div>
            <input type="checkbox" value="" className="hidden peer" required />

            <label className="block w-full flex justify-center items-center rounded-lg border-2 border-gray-400 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
              <Image src={fleet3} alt="" height={150} />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          <div>
            <input type="checkbox" value="" className="hidden peer" required />

            <label className="block w-full flex justify-center items-center rounded-lg border-2 border-gray-400 p-3 hover:border-black peer-checked:border-black">
              <Image src={fleet4} alt="" height={150} />
            </label>
          </div>

          <div>
            <input type="checkbox" value="" className="hidden peer" required />

            <label className="block w-full flex justify-center items-center rounded-lg border border-2 border-gray-400 p-3 hover:border-black peer-checked:border-black">
              <Image src={fleet5} alt="" height={150} />
            </label>
          </div>
        </div>

        <div>
          <label className="sr-only">Date</label>
          <input
            type="date"
            className="w-full rounded-lg  border-2 border-gray-400 p-3 text-sm"
            name="trip-start"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            required
          />
        </div>

        <div>
          <label className="sr-only">Pick Up Location</label>
          <input
            className="w-full rounded-lg  border-2 border-gray-400 p-3 text-sm"
            placeholder="Pick Up Location"
            name="pickUpLocation"
            type="text"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="sr-only">Drop Off Location</label>
          <input
            className="w-full rounded-lg  border-2 border-gray-400 p-3 text-sm"
            placeholder="Drop Off Location"
            name="dropOfLocation"
            type="text"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="sr-only">Message</label>

          <textarea
            className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
            placeholder="Message"
            name="message"
            rows="8"
            id="message"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-[#171717] px-5 py-3 font-medium text-white sm:w-auto"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
