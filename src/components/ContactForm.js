import React, { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 px-[4rem] xl:px-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-500 pl-2">Name</label>
            <input
              className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
              placeholder="Name"
              type="text"
              name="name-contact"
              id="name"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-gray-500 pl-2">Email</label>
            <input
              className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
              placeholder="Email address"
              type="email"
              name="email-contact"
              id="email"
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
              name="subject"
              id="subject-contact"
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
            id="message-contact"
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-[#171717] px-5 py-3 font-medium text-white sm:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
