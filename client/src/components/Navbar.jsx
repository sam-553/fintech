import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <img src="/assets/weblogo.webp" alt="Logo" className="h-14 w-auto" />
        
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          {["Home", "About Us", "Privacy Policy", "Terms", "Contact", "Become Partner"].map((item, idx) => (
            <a
              key={idx}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative group hover:text-blue-600 transition-colors duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md z-40 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <a href="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <img src="/assets/weblogo.webp" alt="Logo" className="h-10 w-auto" />
            BrandName
          </a>
          <button
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 mt-8 px-6 text-gray-700 font-medium">
          {["Home", "About Us", "Privacy Policy", "Terms", "Contact", "Become Partner"].map((item, idx) => (
            <a
              key={idx}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-blue-600 transition-colors text-lg"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
