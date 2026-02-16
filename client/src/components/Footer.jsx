import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* About Us */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3 text-lg">About Us</h4>
          <p className="text-sm">
            Ducat Capital Fintech is a digital financial services platform focused on providing simple, transparent, and accessible solutions. We aim to help individuals and businesses connect with trusted financial services through modern technology.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3 text-lg">Useful Links</h4>
          <div className="text-sm space-y-1 flex flex-col">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/privacy-policy" >Privacy Policy</a>
            <a href="/terms">Terms And Conditions</a>
            <a href="/contact">contact</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3 text-lg">Office Address</h4>
          <p className="text-sm mb-1">Ducat Capital Fintech</p>
          <p className="text-sm mb-1">Mangla Bilaspur, Chhattisgarh 114323</p>
          <p className="text-sm mb-1">Mobile: +91 9479052073</p>
          <p className="text-sm">Email: contact@ducatcapitalfintech.com</p>
        </div>

      </div>

      <div className="text-center text-sm py-4 border-t text-gray-500">
        © 2025 | Ducat Capital Fintech — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
