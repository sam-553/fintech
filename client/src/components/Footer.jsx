import React, { useState } from "react";
import toast from "react-hot-toast";
import { Bot, Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Enter valid email");
      return;
    }
    toast.success("Subscribed successfully 🎉");
    setEmail("");
  };

  return (
    <footer className="bg-white border-t mt-16 text-gray-600">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Bot className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl font-bold text-gray-800">
              Brand Name
            </h2>
          </div>
          <p className="text-sm text-gray-500">
            Providing trusted financial solutions, loan assistance,
            and customer support services.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Contact</h4>

          <p className="flex items-center gap-2 text-sm mb-2">
            <Mail className="w-4 h-4" />
            support@company.com
          </p>

          <p className="flex items-center gap-2 text-sm mb-4">
            <Phone className="w-4 h-4" />
            +91 9000000000
          </p>

          <div className="flex gap-4 text-gray-500">
            <Github className="w-5 h-5 cursor-pointer hover:text-gray-900" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-900" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-900" />
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">
            Subscribe
          </h4>

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded w-full focus:outline-none"
            />

            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t text-gray-500">
        © {new Date().getFullYear()} Brand Name — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
