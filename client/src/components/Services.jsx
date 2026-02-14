import React from "react";
import {
  CreditCard,
  Landmark,
  TrendingUp,
  ShieldCheck,
  Wallet,
  Briefcase
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Credit Card",
      desc: "Flexible credit cards with rewards & cashback."
    },
    {
      icon: Landmark,
      title: "Loans",
      desc: "Personal, business & home loans easily."
    },
    {
      icon: TrendingUp,
      title: "Investment",
      desc: "Smart plans for secure financial growth."
    },
    {
      icon: Briefcase,
      title: "Demat Account",
      desc: "Secure trading & investment accounts."
    },
    {
      icon: ShieldCheck,
      title: "Insurance",
      desc: "Life, health & asset protection plans."
    },
    {
      icon: Wallet,
      title: "Savings Account",
      desc: "Safe savings with attractive benefits."
    }
  ];

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      
      {/* Header */}
      <div className="text-center">
        <h2 className="text-gray-800 text-[42px] font-extrabold mb-3">
          Financial Services
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Modern financial solutions designed for your future.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {services.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group relative p-8 bg-white rounded-2xl 
              shadow-md hover:shadow-2xl transform hover:-translate-y-3
              transition duration-500 cursor-pointer overflow-hidden"
            >
              
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center
              rounded-xl bg-gray-100 mb-5
              group-hover:bg-gray-800 transition">
                <Icon className="w-7 h-7 text-gray-700 group-hover:text-white transition"/>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-4">
                {item.desc}
              </p>

              {/* CTA Button */}
              <button className="opacity-0 group-hover:opacity-100
              px-4 py-2 bg-gray-800 text-white rounded-md text-sm
              transition duration-300">
                Learn More
              </button>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br
              from-gray-100 to-transparent opacity-0
              group-hover:opacity-40 transition pointer-events-none"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
