import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { dataContext } from "../context/WrapperContext";


const Contact = () => {
  const [contact, setcontact]=useContext(dataContext)
  
  const  {register, reset, handleSubmit, formState:{errors}}=useForm()

  const submitHandler=(data)=>{
    data.id= nanoid()
    toast.success("data sent")
    setcontact([...contact,data])
    reset()
    console.log(contact)
    

  }
 

  
  return (
    <div className="w-full text-white py-10 px-5 flex justify-center">
      <div className="w-full max-w-6xl bg-gray-800 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="space-y-8">
       
          <div className="flex items-start space-x-4">
            <i className="fas fa-map-marker-alt text-2xl text-blue-400"></i>
            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-sm">Cetpa Infotech Pvt. Ltd.</p>
              <p className="text-sm">Noida.</p>
            </div>
          </div>

        
          <div className="flex items-start space-x-4">
            <i className="fas fa-phone-alt text-2xl text-green-400"></i>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-sm">7357888143</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <i className="fas fa-envelope text-2xl text-yellow-400"></i>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-sm">dharam892001@gmail.com</p>
              <p className="text-sm">dharambaghel892001@gmail.com</p>
            </div>
          </div>
        </div>

    
        <div>
          <h2 className="text-2xl font-bold mb-3">Send us a message</h2>
          <p className="text-sm mb-6">
            If you have any queries related to our topic, you can send us a
            message from here. It's our pleasure to help you.
          </p>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="space-y-4"
          >
            <input
              type="text"
             
              {...register("name",{required:"* fill the input"})}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <small className="text-red-400 ">{errors?.name?.message}</small>

            <input
              type="email"
             
              {...register("email",{required:"*fill the input"})}

              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <small className="text-red-400 ">{errors?.email?.message}</small>

            <textarea
             
              {...register("content")}

              placeholder="Enter the message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white h-32 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              
              className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 transition-all py-3 rounded-lg font-semibold"
            >
              Send Now
            </button>

            
              
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
