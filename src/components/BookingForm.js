import React, { useState, useRef } from "react";
import Loader from "./Loader";
import DatePicker from "react-date-picker";
import PlacesAutocomplete from "./Places";

// import Image from "next/image";
// import fleet1 from "../../public/images/fleet1.jpg";
// import fleet2 from "../../public/images/fleet2.jpg";
// import fleet3 from "../../public/images/fleet3.jpg";
// import fleet4 from "../../public/images/fleet4.jpg";
// import fleet5 from "../../public/images/fleet5.jpg";

const BookingForm = () => {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [shouldResetForm, setShouldResetForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    numOfPassengers: "",
    date: "",
    pickUpLocation: { lng: null, lat: null, name: null },
    dropOfLocation: { lng: null, lat: null, name: null },
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    setValues(values);
    setLoading(true);

    if (
      values.name &&
      values.phone &&
      values.email &&
      values.numOfPassengers &&
      values.pickUpLocation.name &&
      values.pickUpLocation.lng &&
      values.pickUpLocation.lat &&
      values.dropOfLocation &&
      values.date &&
      values.message
    ) {
      try {
        const res = await fetch(`api/contact/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (res) {
          setSent(true);
          setLoading(false);
          setShouldResetForm(true);
        }
        const { data } = await res.json();

        if (data) {
          return;
        }
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };

  const handleResetForm = () => {
    setSent(false);
    setError(false);
    setLoading(false);
    setValues({
      name: "",
      phone: "",
      email: "",
      numOfPassengers: "",
      date: "",
      pickUpLocation: { lng: null, lat: null, name: null },
      dropOfLocation: { lng: null, lat: null, name: null },
      message: "",
    });
    setShouldResetForm(false);
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      {error ? (
        <p className="text-[red] text-md font-bold py-6">
          Error: Something went wrong! Try again later!
        </p>
      ) : null}

      {loading ? (
        <>
          <Loader />
        </>
      ) : sent && !error && !loading ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-[green] text-5xl text-center font-bold py-6">
            Your message has been sent!
          </p>
          <button
            type="button"
            onClick={handleResetForm}
            className="inline-block flex justify-center items-center gap-2 w-full rounded-lg bg-[#171717] px-5 py-3 font-medium text-white sm:w-auto"
          >
            Book another ride
          </button>
        </div>
      ) : (
        <>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-500 pl-2">Name</label>
                <input
                  className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  type="text"
                  id="name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="text-gray-500 pl-2">Phone</label>
                <input
                  className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
                  placeholder="Phone Number"
                  name="phone"
                  value={values.phone}
                  type="text"
                  id="phone"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-500 pl-2">Email</label>
                <input
                  className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
                  placeholder="Email address"
                  name="email"
                  value={values.email}
                  type="email"
                  id="email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="numOfPassengers" className="text-gray-500 pl-2">
                  Number Of Passengers
                </label>
                <select
                  id="numOfPassengers"
                  name="numOfPassangers"
                  value={values.numOfPassengers}
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

            {/* <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
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
        </div> */}

            <div>
              <label className="text-gray-500 pl-2">Date</label>
              <DatePicker
                className="datepicker appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500"
                id="date"
                calendarIcon={null}
                clearIcon={null}
                closeCalendar={false}
                placeholder="Date"
                value={values.date}
                selected={values.date ? new Date(values.date) : null}
                onChange={(date) =>
                  handleChange({
                    target: { id: "date", value: date.toISOString() },
                  })
                }
                required
              />
            </div>

            <div>
              <label className="text-gray-500 pl-2">Pick Up Location</label>
              {/* <p>
                Selected: {values.pickUpLocation.name}{" "}
                {values.pickUpLocation.lat} {values.pickUpLocation.lng}
              </p> */}
              {/* <input
                className="w-full rounded-lg  border-2 border-gray-400 p-3 text-sm"
                placeholder="Pick Up Location"
                name="pickUpLocation"
                value={values.pickUpLocation}
                id="pickUpLocation"
                type="text"
                onChange={handleChange}
                required
              /> */}
              <PlacesAutocomplete
                onSelect={({ lat, lng, value }) => {
                  setValues((oldValues) => ({
                    ...oldValues,
                    pickUpLocation: { lat, lng, name: value },
                  }));
                }}
                id="pickUpLocation"
                placeholder="Pick Up Location"
              />
            </div>

            <div>
              <label className="text-gray-500 pl-2">Drop Off Location</label>
              {/* <p>
                Selected: {values.dropOfLocation.name}{" "}
                {values.dropOfLocation.lat} {values.dropOfLocation.lng}
              </p> */}
              <PlacesAutocomplete
                onSelect={({ lat, lng, value }) => {
                  setValues((oldValues) => ({
                    ...oldValues,
                    dropOfLocation: { lat, lng, name: value },
                  }));
                }}
                id="dropOfLocation"
                placeholder="Drop Off Location"
              />
              {/* <input
                className="w-full rounded-lg  border-2 border-gray-400 p-3 text-sm"
                placeholder="Drop Off Location"
                name="dropOfLocation"
                value={values.dropOfLocation}
                id="dropOfLocation"
                type="text"
                onChange={handleChange}
                required
              /> */}
            </div>

            <div>
              <label className="text-gray-500 pl-2">Message</label>

              <textarea
                className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
                placeholder="Message"
                name="message"
                value={values.message}
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
        </>
      )}
    </div>
  );
};

export default BookingForm;
