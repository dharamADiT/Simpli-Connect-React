import { nanoid } from "nanoid";
import React from "react";

const Overview = () => {
  return (
    <div className=" sm:px-8 md:px-10 py-6 md:py-10">
     
      <div className=" text-white  rounded-xl leading-relaxed">
       <small className="text-2xl -mx-1">S</small> impliConnect is a modern and reliable digital platform designed to help
        people make informed and confident financial decisions. In today’s
        fast-moving world, choosing the right bank or understanding banking
        services can be confusing — information is spread across multiple
        sources, and users often struggle to compare benefits clearly.
      </div>

      <p className="mt-4 text-base sm:text-lg leading-relaxed">
        To solve this, SimpliConnect focuses on providing simple, accurate, and
        easy-to-compare information from three major and trusted banks:
      </p>

      <ul
        key={nanoid()}
        className="list-disc list-inside space-y-2 mt-2 text-sm sm:text-base"
      >
        <li>State Bank of India (SBI)</li>
        <li>Federal Bank</li>
        <li>Canara Bank</li>
      </ul>

   
      <div className="mb-10 text-base sm:text-lg leading-relaxed">
        Our platform currently serves students, employees, and entrepreneurs,
        offering them the guidance they need to choose the best banking options
        for their personal or professional goals. We provide detailed insights
        into:
      </div>

    
      <h1 className="font-bold bg-gray-800 p-2 rounded-2xl inline-block text-lg sm:text-xl ">Services & Offers</h1>
      <ul
        key={nanoid()}
        className="list-disc mb-10 list-inside my-4 space-y-2 text-sm sm:text-base"
      >
        <li>Loan options and interest rates</li>
        <li>Credit card features and rewards</li>
        <li>Saving schemes and programs</li>
        <li>Fixed deposit and recurring deposit details</li>
        <li>Account benefits based on profession</li>
      </ul>

    
      <h1 className="font-bold  bg-gray-800 p-2 rounded-2xl inline-block text-lg sm:text-xl ">
        Student-Focused Features
      </h1>
      <p className="text-base sm:text-lg leading-relaxed mt-2">
        Students often struggle to understand scholarships, education-related
        benefits, or special student banking schemes. Through SimpliConnect,
        they can easily explore:
      </p>

      <ul
        key={nanoid()}
        className="list-disc list-inside space-y-2 my-4 text-sm sm:text-base"
      >
        <li>Which bank offers scholarships</li>
        <li>Higher interest on student accounts</li>
        <li>Better benefits for education loans</li>
        <li>Additional perks specifically for students</li>
      </ul>

      <p className="text-base sm:text-lg mb-10">
        This helps them make confident, stress-free decisions regarding their
        finances.
      </p>

      {/* Professional Support */}
      <h1 className="font-bold  bg-gray-800 p-2 rounded-2xl inline-block text-lg sm:text-xl ">
        Employee & Entrepreneur Support
      </h1>

      <p className="text-base sm:text-lg mt-2 leading-relaxed">
        For working professionals and business owners, we provide:
      </p>

      <ul
        key={nanoid()}
        className="list-disc list-inside space-y-2 my-4 text-sm sm:text-base"
      >
        <li>Salary account benefits</li>
        <li>Business loan opportunities</li>
        <li>Startup schemes</li>
        <li>Credit card comparisons</li>
        <li>Investment options and offers</li>
      </ul>

      <p className="text-base mb-10 sm:text-lg leading-relaxed">
        Our platform makes it extremely easy for users to compare banks,
        understand the advantages of each service, and choose the option that
        best aligns with their needs.
      </p>

      {/* Vision */}
      <h1 className="font-bold text-lg sm:text-xl  bg-gray-800 p-2 rounded-2xl inline-block">Our Vision</h1>
      <p className="text-base mt-2 sm:text-lg leading-relaxed">
        To simplify banking for everyone by offering transparency, clarity, and
        easy decision-making — all in one place.
      </p>
    </div>
  );
};

export default Overview;
