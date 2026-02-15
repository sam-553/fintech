import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 mx-auto ">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          FinanceCorp
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="/" className="hover:text-gray-900">Home</a>
          <a href="/about" className="hover:text-gray-900">About Us</a>
          <a href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-900">Terms</a>
          <a href="/contact" className="hover:text-gray-900">Contact</a>
          <a href="/becomepartner" className="hover:text-gray-900">Become Partner</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6">
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
            <a href="/becomepartner">Become Partner</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
