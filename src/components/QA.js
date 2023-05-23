import React, { useState } from "react";
import { PropTypes } from "prop-types";

const QA = ({ question, answer }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <details
      className="group border-l-4 border-yellow-500 bg-[#212121] p-6 [&_summary::-webkit-details-marker]:hidden"
      open
    >
      <summary
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsShown(true)}
      >
        <h2 className="text-lg font-medium">{question}</h2>

        <span className="ml-1.5 flex-shrink-0 rounded-full bg-[#212121] p-1.5 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <p
        className={`mt-4 leading-relaxed text-white ${
          isShown ? "block" : "hidden"
        }`}
      >
        {answer}
      </p>
    </details>
  );
};

QA.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default QA;
