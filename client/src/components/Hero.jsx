import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20 overflow-hidden">
      
      {/* Decorative blur background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gray-300 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* Tagline */}
        <p className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-200 text-gray-700 rounded-full">
          White Label Finance Platform • Launch Your Brand
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Launch Your Own <br />
          <span className="text-gray-900">
            Finance Brand
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Complete white label solution with mobile apps, website,
          and admin panel. Start your financial services business
          under your own brand name.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition duration-300 shadow-md hover:scale-105">
            View Plans & Pricing
          </button>

          <button className="px-8 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-300 hover:scale-105">
            Get Demo
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          {[
            "No Hidden Costs",
            "Lifetime Updates",
            "PAN India Working",
            "24/7 Support"
          ].map((item, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-white shadow rounded-full hover:shadow-lg transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
