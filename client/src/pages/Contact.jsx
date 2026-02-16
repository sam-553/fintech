import React from "react";
import {
  Home,
  User,
  Briefcase,
  Building,
  ArrowRight,
  Percent,
  Clock,
  Smartphone,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const loans = [
    {
      title: "Home Loan",
      desc: "Buy your dream home with flexible EMI options",
      icon: <Home size={36} className="text-blue-700" />,
    },
    {
      title: "Personal Loan",
      desc: "Instant funds for your personal needs",
      icon: <User size={36} className="text-blue-700" />,
    },
    {
      title: "Business Loan",
      desc: "Grow your business with capital support",
      icon: <Briefcase size={36} className="text-blue-700" />,
    },
    {
      title: "Loan Against Property",
      desc: "Get loan against your property",
      icon: <Building size={36} className="text-blue-700" />,
    },
  ];

  const features = [
    {
      title: "Lowest Interest Rates",
      desc: "Starting from 8.5% p.a.",
      icon: <Percent size={28} className="text-blue-700" />,
    },
    {
      title: "Quick Processing",
      desc: "Approval within 24-48 hrs",
      icon: <Clock size={28} className="text-blue-700" />,
    },
    {
      title: "100% Digital Process",
      desc: "Apply completely online",
      icon: <Smartphone size={28} className="text-blue-700" />,
    },
    {
      title: "Expert Guidance",
      desc: "Financial experts ready to help",
      icon: <HelpCircle size={28} className="text-blue-700" />,
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100 overflow-hidden mt-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Apply for Loans
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Choose from our loan products with competitive interest
            rates and fast approvals.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-8 py-3 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-800 hover:scale-105 transition">
              Apply Now
            </button>

            <button className="px-8 py-3 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 hover:scale-105 transition">
              Check Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* LOAN CARDS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Loan Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loans.map((loan, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                {loan.icon}

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {loan.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-2">
                    {loan.desc}
                  </p>

                  <button className="flex items-center justify-between gap-4 
text-blue-700 hover:text-blue-900 
text-sm font-semibold mt-4
transition-all duration-300 
hover:gap-6 group">

  Apply Now

  <ArrowRight 
    size={16} 
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Loans?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-xl bg-gray-50 hover:bg-white shadow-md hover:shadow-xl transition duration-300"
              >
                {item.icon}

                <div>
                  <h3 className="font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
         <div className="text-center mt-12">
  <h2 className="text-2xl font-semibold mb-2">
    Need Help Choosing?
  </h2>

  <p className="text-gray-600 mb-6">
    Our financial experts are available to guide you
  </p>

  <button className="flex items-center gap-3 mx-auto px-7 py-3 
  bg-green-500 text-white rounded-full shadow-lg 
  hover:bg-green-600 hover:scale-105 transition duration-300">
    <MessageCircle size={20} />
    Chat on WhatsApp
  </button>
</div>

        </div>
      </section>
    </>
  );
};

export default Contact;
