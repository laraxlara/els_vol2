import React, { useState } from "react";
import Loader from "./Loader";
import { gtag, initDataLayer } from "ga-gtag";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shouldResetForm, setShouldResetForm] = useState(false);
  const [values, setValues] = useState({
    nameContact: "",
    emailContact: "",
    subjectContact: "",
    messageContact: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    setValues(values);
    setLoading(true);

    if (
      values.nameContact &&
      values.emailContact &&
      values.subjectContact &&
      values.messageContact
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

  const onClickConversionEvent2 = () => {
    if (typeof window === "undefined") return;
    initDataLayer();
    gtag("config", `${process.env.NEXT_PUBLIC_GOOGLE_ADS}`);
    gtag("event", "conversion", {
      send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS}/${process.env.NEXT_PUBLIC_GOOGLE_LABEL2}`,
    });
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 xl:px-8">
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
            Send another message
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-500 pl-2">Name</label>
                <input
                  className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  autoComplete="off"
                  name="nameContact"
                  id="nameContact"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-gray-500 pl-2">Email</label>
                <input
                  className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  autoComplete="off"
                  name="emailContact"
                  id="emailContact"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div>
                <label className="text-gray-500 pl-2">Subject</label>
                <input
                  className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
                  placeholder="Email subject"
                  type="text"
                  autoComplete="off"
                  name="subjectContact"
                  id="subjectContact"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="text-gray-500 pl-2">Message</label>

              <textarea
                className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
                placeholder="Message"
                rows="8"
                id="messageContact"
                name="messageContact"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                onClick={onClickConversionEvent2()}
                className="inline-block w-full rounded-lg bg-[#171717] px-5 py-3 font-medium text-white sm:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
