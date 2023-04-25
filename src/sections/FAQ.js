import React from "react";
import QA from "@/components/QA";

const faq = [
  {
    id: 1,
    question: "1. Can I change my reservation last minute?",
    answer:
      "The reservation can be changed last minute and we will do all possible to accomodate your new needs.",
  },
  {
    id: 2,
    question: "2. How late can i cancel my reservation? What is cancelation policy?",
    answer:
      "It is possible to cancel 3 hours before for full refund.",
  },
  {
    id: 3,
    question: "3. How late can i make my reservation?",
    answer:
      "You can make your reservation 3 hours before at least. We do recommend booking at least 24 hours prior to your need.",
  },
  {
    id: 4,
    question: "4. What happens if my flight is delayed? Complimentary wait time?",
    answer:
      "If your flight is delayed we will wait for you no matter what time you arrive! Also, once you have arrived we give up to 2 hours of waiting time for international flights and 1 hour for domestic flights.",
  },
  {
    id: 5,
    question: "5. Do you provide car seats?",
    answer:
      "Yes, we do provide car seats.",
  },
  {
    id: 6,
    question: "6. What training requirements do you have for your drivers?",
    answer:
      "All drivers are very carefully selected (drivers are hired with clean record only) and fully licensed to operate under chauffeur hack license issued by the State of Florida. Also all drivers are fully permitted and fully insured up to $300.000",
  },
  {
    id: 7,
    question: "7. Do you charge services by mileage or by the hour?",
    answer:
      "We charge per hour and per transfer (from point to point), if hired per hour we do require 3 hours minimum.",
  },
  {
    id: 8,
    question: "8. What does the limousine company's insurance policy cover?",
    answer:
      "All clients are fully insured up to $300.000.",
  },
  {
    id: 9,
    question: "9. Are food and drinks provided?",
    answer:
      "Bottled water is included in the service price. Per special request we do provide drinks or food.",
  }
];

const FAQ = () => {
  return (
    <section className="bg-black bg-opacity-50 text-white">
      <h1 className="max-w-3xl text-center mx-auto my-0 py-12 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Frequently asked questions
      </h1>
      <div className="space-y-4 w-[85%] mx-auto my-0 pb-8">
        {faq.map((item) => {
          return (
            <QA key={item.id} question={item.question} answer={item.answer} />
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
