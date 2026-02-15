import React from "react";

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-50 via-white to-gray-100 overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-gray-300 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Ducat Capital Fintech
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering rural and semi-urban communities with accessible
            financial services and inclusive growth.
          </p>
        </div>

        {/* About Content */}
        <div className="bg-white shadow-lg rounded-2xl p-10 mb-16 hover:shadow-2xl transition duration-300">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Ducat Capital Fintech focuses on empowering rural and semi-urban
            communities through Credit Cards, Personal Loans, Business Loans,
            Home Loans, Micro Loans, Demat Accounts, Saving Accounts and
            financial inclusion programs.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            We support women, farmers, and small entrepreneurs by providing
            accessible financial services, livelihood support, and
            capacity-building initiatives.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our belief: <strong>
              “Strong villages build a strong nation.”
            </strong>
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          {[
            ["10K+", "Customers Served"],
            ["500+", "Villages Connected"],
            ["24/7", "Support Available"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {item[0]}
              </h3>
              <p className="text-gray-600">{item[1]}</p>
            </div>
          ))}
        </div>

        {/* Mission Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Mission
            </h3>
            <p className="text-gray-700">
              To uplift rural and semi-urban communities by providing easy,
              transparent financial services and livelihood opportunities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Vision
            </h3>
            <p className="text-gray-700">
              To become a trusted financial partner enabling financial
              freedom, dignity, and economic growth across India.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-black hover:scale-105 transition">
            Join With Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
