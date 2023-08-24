import React, { useState } from "react";
import Loader from "./Loader";
import DatePicker from "react-date-picker";

const HeroForm = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shouldResetForm, setShouldResetForm] = useState(false);
  const [values, setValues] = useState({
    emailHero: "",
    date: "",
    numOfPassengers: "",
    pickUpLocationHero: "",
    dropOfLocationHero: "",
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
      values.emailHero &&
      values.date &&
      values.numOfPassengers &&
      values.pickUpLocationHero &&
      values.dropOfLocationHero
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
      nameContact: "",
      emailContact: "",
      subjectContact: "",
      messageContact: "",
    });
    setShouldResetForm(false);
  };

  return (
    <div className="hero-form max-w-screen-xl w-full bg-[#171717] px-6 py-4 rounded-none xl:rounded-2xl text-gray-100 mb-0 xl:my-2">
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
          <p className="text-gray-100 text-5xl text-center font-bold py-6">
            Your message has been sent!
          </p>
          <button
            type="button"
            onClick={handleResetForm}
            className="inline-block flex justify-center items-center gap-2 w-full rounded-lg bg-[#F7BE38] px-5 py-3 font-medium text-gray-900 sm:w-auto"
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
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
                    name="pickUpLocationHero"
                    value={values.pickUpLocationHero}
                    id="pickUpLocationHero"
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
                    id="dropOfLocationHero"
                    name="dropOfLocationHero"
                    value={values.dropOfLocationHero}
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
                  <DatePicker
                    className="datepicker appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500"
                    id="date"
                    calendarIcon={null}
                    clearIcon={null}
                    closeCalendar={false}
                    placeholder="Date"
                    value={values.date}
                    calendarClassName="datepicker"
                    selected={values.date ? new Date(values.date) : null}
                    onChange={(date) =>
                      handleChange({
                        target: { id: "date", value: date.toISOString() },
                      })
                    }
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
                    id="emailHero"
                    name="emailHero"
                    value={values.emailHero}
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
                  value={values.numOfPassengers}
                  id="numOfPassengers"
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
        </>
      )}
    </div>
  );
};

export default HeroForm;
