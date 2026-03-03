import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const number="919479052073";
  const message="Hello, I want more details about your services."
  const encodedMessage=encodeURIComponent(message);
  const whatsappLink=`https://wa.me/${number}?text=${encodedMessage}`;
  return (
    <section className="relative bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20 overflow-hidden mt-6">
      
      
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>

    <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

  
  <div className="flex justify-center order-1 md:order-2">
    <img
      src="/assets/homeherologo.webp"
      alt="Finance App"
      className="w-full max-w-md "
    />
  </div>

  {/* CONTENT */}
  <div className="space-y-6 order-2 md:order-1">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      <span className="text-gray-600">
       Best Platform to Sell
       <span className="text-green-600"> Financial and Banking Services </span>
         online
      </span>
    </h1>

    <p className="text-lg text-gray-600">
     Learn & Earn From Anywhere By Referring Customers And Educating Them On The Products Being Offered..
    </p>

  

    {/* CTA Buttons */}
    <div className="flex gap-4 pt-4 flex-wrap">
      <button className="px-8 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 hover:scale-105 hover:shadow-xl transition duration-300 mx-auto md:ml-0 ">
       <Link to={whatsappLink} 
       target="_blank"
          rel="noopener noreferrer"
       className="hidden md:block ">Contact Us</Link>
       <a href="#" className="md:hidden mx-auto  ">Download Now</a>
      </button>

      
    </div>
  </div>

</div>


        
    </section>
  );
};

export default Hero;
