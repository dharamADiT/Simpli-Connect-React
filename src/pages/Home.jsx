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
     <section className="bg-[#2e2c2c79] my-16 w-full px-6 md:px-10 py-16 flex flex-col items-center">
  <h2 className="text-center text-3xl md:text-4xl underline font-bold mb-10">
    Our Clients
  </h2>

  <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 md:gap-14 text-center">
    
    {/* Students */}
    <div className="w-full md:w-1/3">
      <h2 className="text-2xl text-blue-600 font-bold">Students</h2>
      <p className="text-left py-5 text-gray-300 leading-relaxed">
        Student accounts can be opened online or at a branch. Once created,
        students can access online banking, use the mobile app, and manage
        finances easily from anywhere with a debit card.
      </p>
      <Link to={"/student_dashboard"} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
        More
      </Link>
    </div>

    {/* Employees */}
    <div className="w-full md:w-1/3">
      <h2 className="text-2xl text-blue-600 font-bold">Employees</h2>
      <p className="text-left py-5 mb-6 text-gray-300 leading-relaxed">
        Employees can access tailored financial solutions through leading banks
        like Canara Bank, Federal Bank, and SBI, ensuring support for their
        individual financial goals and needs.
      </p>
      <Link className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
        More
      </Link>
    </div>

    {/* Entrepreneur */}
    <div className="w-full md:w-1/3">
      <h2 className="text-2xl text-blue-600 font-bold">Entrepreneur</h2>
      <p className="text-left mb-12 py-5 text-gray-300 leading-relaxed">
        Banks support entrepreneurs with financial assistance, expert guidance,
        and resources that help new ventures grow and succeed.
      </p>
      <Link className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
        More
      </Link>
    </div>

  </div>
</section>


      <section className="relative w-full py-10 md:py-16">
  {/* Background Image */}
  <img
    src={banner}
    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
    alt="banner"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col gap-6 md:gap-10 justify-center items-center text-center px-4">
    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
      Login For More
    </h2>

    <Link
      to={"/login"}
      className="inline-block bg-blue-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
    >
      LOGIN
    </Link>
  </div>
</section>

    </>
  );
};

export default Home;
