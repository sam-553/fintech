import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-gray-800">
        FinanceCorp
      </h1>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 font-medium text-gray-600">
        <a href="/" className="hover:text-gray-900">Home</a>
        <a href="/loans" className="hover:text-gray-900">Loans</a>
        <a href="/services" className="hover:text-gray-900">Services</a>
        <a href="/contact" className="hover:text-gray-900">Contact</a>
      </nav>

      {/* Button */}
      <button className="px-5 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">
        Login
      </button>

    </header>
  );
};

export default Navbar;
