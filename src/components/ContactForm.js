import React from "react";

const ContactForm = () => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      <form action="" className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only">Name</label>
            <input
              className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="email"
            />
          </div>

          <div>
            <label className="sr-only">Email</label>
            <input
              className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
              placeholder="Email address"
              type="email"
              id="email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
          <div>
            <label className="sr-only">Subject</label>
            <input
              className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
              placeholder="Email subject"
              type="text"
              id="subject"
            />
          </div>
        </div>

        <div>
          <label className="sr-only">Message</label>

          <textarea
            className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm"
            placeholder="Message"
            rows="8"
            id="message"
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
