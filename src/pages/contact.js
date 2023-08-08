import React from "react";
import Head from "next/head";
import Layout from "@/layouts/mainLayout";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Executive Limo Service</title>
        <meta
          name="description"
          content="Executive Limo Service is a luxury transportation service established in 2017. that offers an extensive fleet of vehicles to fulfill all your needs. Our mission is to provide our clients the best possible experience with our comfortable and safe ride."
          key="desc"
        />
      </Head>
      <Layout>
        <h2 className="flex flex-col gap-6 font-heading mb-24 text-4xl text-gray-200 text-center font-bold">
          <span className="block">Executive</span>
          <span className="block font-serif italic">Limo Service</span>
        </h2>
        <div className="xl:my-6 py-6 mx-auto px-4 md:px-6 lg:px-12 bg-black xl:bg-transparent overflow-hidden">
          <section className="mb-20 text-gray-800">
            <div className="flex flex-wrap justify-center">
              <div className="flex-initial shrink w-full xl:w-5/12 lg:w-6/12">
                <div className="lg:py-12 lg:pl-6 mb-6 lg:mb-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.198708749281!2d-80.19435612438437!3d25.763999377350416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b683ea3e0f93%3A0x12cfdac73b945384!2s1000%20Brickell%20Ave%20%23715%2C%20Miami%2C%20FL%2033131%2C%20USA!5e0!3m2!1sen!2srs!4v1684172262329!5m2!1sen!2srs"
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-xl w-[450px] h-[300px] sm:w-[600px] md:w-[750px] md:h-[450px] xl:w-[800px]"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="flex-initial shrink w-full xl:w-7/12 lg:w-6/12 mb-6 md:mb-0 lg:-ml-12">
                <div className="bg-[#232423] h-full rounded-lg p-6 lg:pl-12 text-white flex items-center py-12 lg:py-4">
                  <div className="lg:pl-12">
                    <h3 className="text-2xl font-semibold uppercase mb-6 pb-2">
                      Contact information
                    </h3>
                    <h5 className="text-xl font-semibold mb-2">Address:</h5>
                    <p className="mb-6">
                      1000 Brickell Ave Ste 715 <br /> Miami, FL 33131, USA
                    </p>
                    <h5 className="text-xl font-semibold mb-2">Email:</h5>
                    <a
                      href="mailto:niko@executivelimoservice.net"
                      className="text-xl"
                    >
                      niko@executivelimoservice.net
                    </a>
                    <h5 className="text-xl font-semibold mt-6 mb-2">
                      Phone number:
                    </h5>
                    <p className="mb-6">+1 305-570-2684</p>
                    <h5 className="text-xl font-semibold mb-4">Follow us:</h5>
                    <div className="flex flex-row">
                      <a
                        href="https://www.facebook.com/executivelimoservicellc/"
                        aria-label="Facebook"
                        target="blank"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          className="w-6 mr-4"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/executivelimoservicemiami/"
                        aria-label="Instagram"
                        target="blank"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          className="w-6 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="max-w-full xl:max-w-xl mx-auto xl:mb-12 bg-black xl:bg-transparent">
          <h1 className="max-w-xl xl:mb-2 text-4xl py-10 font-extrabold text-white text-center md:text-5xl xl:text-6xl">
            Contact Us
          </h1>
          <ContactForm />
        </div>
      </Layout>
    </>
  );
};

export default Contact;
