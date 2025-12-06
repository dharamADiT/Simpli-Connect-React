import React from "react";
import banks from "/public/banks.avif"
import federal  from "/public/fed.jpg"
import fed2 from "/public/fedral2.webp"
import canra from "/public/canr.jpg"
import { Link } from "react-router-dom";
const LeadingBanks = () => {
  return (
    <div className="w-full bg-black text-white">
    
      <section className="py-10 px-4 lg:px-10 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <img src={banks} alt="Bank Image" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Your money, your way with banking</h2>
          <p className="text-gray-300 leading-relaxed mb-10">
            Banks are financial institutions that offer a range of services such as accepting deposits,
            lending money, and facilitating transactions. They play a crucial role in the economy by providing
            individuals, businesses, and governments with access to capital and financial services.
          </p>
          <Link to={"/login"} className="mt-10 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md">
            Services
          </Link>
        </div>
      </section>

    
      <section className="py-12 px-4 lg:px-20 bg-black text-white">
        <h3 className="text-center text-3xl font-bold mb-10">
        State Bank of India:Serving the Nation for Over Two Centuries
        </h3>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg bg-gray-900 p-4">
            <p className="text-gray-300 leading-relaxed">
              SBI provides a wide range of services to entrepreneurs including business loans, funding
              support, and tailored financial solutions to grow their business.
            </p>
          </div>
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg bg-gray-900 p-4">
            <p className="text-gray-300 leading-relaxed">
              SBI offers education loans, scholarships, savings accounts, and benefits for students.
              Employees also receive salary accounts, personal loans, retirement plans, and more.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-12 px-4 lg:px-20 bg-black">
        <h2 className="text-center text-3xl font-bold mb-10">
          Federal Reserve Takes Action to Stabilize the Economy
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 bg-gray-900 p-4 rounded-xl shadow-lg">
            <img src={fed2} alt="Federal Bank" className="w-full rounded-lg" />
            <p className="mt-4 text-gray-300 leading-relaxed">
              Federal Bank ensures responsible banking, ethical values, financial support for entrepreneurs,
              employees, and students.
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-gray-900 p-4 rounded-xl shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              Students get education loans, scholarships, savings accounts. Entrepreneurs receive business
              loans and SMEs support. Employees enjoy salary accounts, loans, and retirement solutions.
            </p>
            <img src={federal} alt="Federal Bank" className="w-full h-86   rounded-lg mt-4" />
          </div>
        </div>
      </section>

   
      <section className="py-12 px-4 lg:px-20 bg-black">
        <h2 className="text-center text-3xl font-bold mb-10">
          Canara Bank Reports Strong Financial Performance
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 bg-gray-900 p-4 rounded-xl shadow-lg">
            <img src={canra} alt="Canara Bank" className="w-full rounded-lg" />
            <p className="mt-4 text-gray-300 leading-relaxed">
              Canara Bank offers education loans, scholarships, savings accounts for students.
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-gray-900 p-4 rounded-xl shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              Entrepreneurs get business loans, project finance, SME support. Employees receive salary
              accounts, personal loans, home loans, and pension plans.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}







export default LeadingBanks