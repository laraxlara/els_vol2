import React, { useState } from "react";
import Loader from "./Loader";
import DatePicker from "react-date-picker";
import PlacesAutocomplete from "./Places";

const HeroForm = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shouldResetForm, setShouldResetForm] = useState(false);
  const [values, setValues] = useState({
    emailHero: "",
    dateHero: "",
    numOfPassengersHero: "",
    pickUpLocationHero: { lng: null, lat: null, name: null },
    dropOfLocationHero: { lng: null, lat: null, name: null },
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
      values.dateHero &&
      values.numOfPassengersHero &&
      values.pickUpLocationHero.name &&
      values.pickUpLocationHero.lng &&
      values.pickUpLocationHero.lat &&
      values.dropOfLocationHero.name &&
      values.dropOfLocationHero.lng &&
      values.dropOfLocationHero.lat
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
      emailHero: "",
      dateHero: "",
      numOfPassengersHero: "",
      pickUpLocationHero: { lng: null, lat: null, name: null },
      dropOfLocationHero: { lng: null, lat: null, name: null },
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
                  {/* <input
                    type="text"
                    name="pickUpLocationHero"
                    value={values.pickUpLocationHero}
                    id="pickUpLocationHero"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400  focus:ring-gray-500 focus:border-gray-500"
                    placeholder="Pick Up Location"
                    onChange={handleChange}
                    required
                  /> */}
                  <PlacesAutocomplete
                    onSelect={({ lat, lng, value }) => {
                      setValues((oldValues) => ({
                        ...oldValues,
                        pickUpLocationHero: { lat, lng, name: value },
                      }));
                    }}
                    id="pickUpLocationHero"
                    placeholder="Pick Up Location"
                  />
                </div>
              </div>

              <div className="px-2">
                <label className="block my-2 text-sm font-medium text-gray-100 ">
                  Drop Off Location
                </label>
                <div className="relative">
                  <PlacesAutocomplete
                    onSelect={({ lat, lng, value }) => {
                      setValues((oldValues) => ({
                        ...oldValues,
                        dropOfLocationHero: { lat, lng, name: value },
                      }));
                    }}
                    id="dropOfLocationHero"
                    placeholder="Drop Of Location"
                  />
                </div>
              </div>

              <div className="px-2">
                <label className="block my-2 text-sm font-medium text-gray-100 ">
                  Date
                </label>
                <div className="relative text-black">
                  <DatePicker
                    className="datepicker appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-[9.8px]  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500"
                    id="dateHero"
                    calendarIcon={null}
                    clearIcon={null}
                    closeCalendar={false}
                    placeholder="Date"
                    value={values.dateHero}
                    dateFormat="YYYY-MM-DD"
                    calendarClassName="datepicker"
                    selected={
                      values.dateHero ? new Date(values.dateHero) : null
                    }
                    onChange={(dateHero) =>
                      handleChange({
                        target: {
                          id: "dateHero",
                          value: dateHero.toISOString(),
                        },
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
                  <input
                    type="email"
                    id="emailHero"
                    name="emailHero"
                    value={values.emailHero}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400  focus:ring-gray-500 focus:border-gray-500"
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
                  name="numOfPassengersHero"
                  value={values.numOfPassengersHero}
                  id="numOfPassengersHero"
                  className="bg-gray-50 h-[40px] border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  bg-[#3b3b3b] border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-gray-500 focus:border-gray-500 flex items-center"
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
