import React from "react";

import banner from "/public/qw.avif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className=" bg-cover bg-center py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
                BANKS
              </h1>

              <p className="text-gray-100 text-lg leading-relaxed">
                A bank is a financial institution that provides various
                financial services, including accepting deposits, lending money,
                and offering investment and payment services.
              </p>

              <Link
                to={"/leadingbanks"}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                LEADING BANKS
              </Link>
            </div>

            <div>
              <img
                src={banner}
                alt="Bank Image"
                className="w-full rounded-lg Hover:shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" pt-16">
        <div className="max-w-5xl mx-auto px-4 text-white">
          <h2 className="text-center text-3xl md:text-4xl underline  font-bold mb-8">
            About
          </h2>

          <p className="text-left text-gray-300 leading-relaxed mb-6">
            This website is created by team Out of the Box. This website
            provides you basic information about different types of loans
            available for students, employees, and entrepreneurs. We offer
            detailed information about each type of loan and the various lending
            institutions that provide them. Our user-friendly navigation menu
            makes it easy for visitors to find the information they need quickly
            and easily.
          </p>

          <p className="text-left text-gray-300 leading-relaxed">
            In addition to loan details, we also provide helpful tips and advice
            for loan applicants. Our goal is to help individuals make informed
            decisions about their loan options and choose the best loan for
            their needs. Whether you're a student looking for educational loans
            or an entrepreneur seeking business loans, we have the information
            you need to get started.
          </p>
        </div>
      </section>

      <section className="relative w-full py-16">
        <img src={banner} className="w-full h-[500px] object-cover" />

        <div className="absolute inset-0 py-16 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col gap-10 justify-center items-center">
          <h2 className="text-white text-5xl ">Login For More</h2>
          <Link
            to={"/login"}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            LOGIN
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
