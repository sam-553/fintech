import React, { useEffect, useRef } from "react";
import { Banknote, DollarSign, HandCoins, Headphones, Headset, HomeIcon, Landmark } from "lucide-react";

const testimonials = [
  {
    id: 1,
    heading: "Trusted Banking Partnerships",
    color: "bg-blue-100 text-blue-700",
    message:
      "Collaborate with leading banks to build credibility and expand your business reach.",
    icon: <Landmark size={28} />,
  },
  {
    id: 2,
    heading: "High Payouts for Our Partners",
    color: "bg-green-100 text-green-700",
    message:
      "Enjoy higher returns with clear, transparent payout structures and reliable support.",
    icon: <HandCoins size={28} />,
  },
  {
    id: 3,
    heading: "Dedicated Guidance & Support",
    color: "bg-yellow-100 text-yellow-700",
    message:
      "We understand your unique goals and guide you toward sustainable success.",
    icon: <Headset size={28} />,
  },
];



const review=[
  {message:"I applied for a personal loan onDucat Capital Fintech . Manish Sharma was knowledgeable and efficient — great follow-ups and excellent communication. Highly recommended!",
    name:"Bhanu Naidu",
    review:5
  },
  {message:"I had taken my personal loan from Tata Capital and executive Nitu Chauhan supported her best throughout the process. The approval was quick and with a good rate of interest.",
    name:"Yash",
    review:5
  },
  {message:"Would like to appreciate Mr. Manjeet Dahiya for taking accountability and staying connected through every query. Great job and excellent service!",


    name:"Kiran Kumar",
    review:5
  },
  {message:"I applied for a personal loan onDucat Capital Fintech . Manish Sharma was knowledgeable and efficient — great follow-ups and excellent communication. Highly recommended!",
    name:"Bhanu Naidu",
    review:5
  },
  {message:"I got a call from Sapna Motwani who explained the Standard Chartered Credit Card so well. My card got approved in no time. Excellent support throughout!",
    name:"Gautam N",
    review:5
  },
  {message:"Excellent service — thank you Monica and Mukesh for helping me complete the loan process smoothly and professionally. I really appreciate your hard work",
    name:"Sabdar Ali Shaikh",
    review:5
  },
]

const Testimonials = () => {

   const scrollRef = useRef(null);
  
    // Auto scroll effect
    useEffect(() => {
      const container = scrollRef.current;
      let scrollAmount = 0;
  
      const autoScroll = setInterval(() => {
        if (!container) return;
  
        scrollAmount += 1;
        container.scrollLeft = scrollAmount;
  
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }, 20);
  
      return () => clearInterval(autoScroll);
    }, []);
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold">
          Why is Ducat Capital Fintech the #1 trusted financial
          <span> <br />brand across India</span>
        </h1>

        <div className="h-1 w-16 bg-green-600 mx-auto mt-4 rounded-full hover:w-28 transition-all duration-500"></div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >
              {/* Colored Icon Circle */}
              <div
                className={`h-16 w-16 mx-auto mb-4 flex items-center justify-center rounded-full transition duration-300  ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Heading */}
              <h3 className="font-semibold text-lg mb-2">{item.heading}</h3>

              {/* Message */}
              <p className="text-gray-600 italic">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
       {/* review section */}
      {/* review section */}
<div className="mt-16 text-center">
  <h1 className="text-4xl font-bold">
    Ducat Capital Fintech's Success Stories
  </h1>

  <div className="h-1 w-16 bg-green-600 mx-auto mt-4 rounded-full hover:w-28 transition-all duration-500"></div>
</div>

{/* scrollable container */}
<div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto mt-12 py-4 px-4 scrollbar-hide  no-scrollbar"
>
  {[...review, ...review].map((item, index) => (
    <div
      key={index}
      className="min-w-[300px] bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
    >
      {/* Review Message */}
      <p className="text-gray-600 italic mb-3">"{item.message}"</p>

      {/* Reviewer Name */}
      <h3 className="font-semibold text-lg text-green-500">{item.name}</h3>

      {/* Stars */}
      <div className="flex mt-2">
        {Array(item.review)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-400 ">★</span>
          ))}
      </div>
    </div>
  ))}
</div>


      {/* capital */}
   <div className="bg-gray-600 text-white rounded-4xl p-8 mt-10 mx-4 md:mx-10">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Text Content */}
    <div className="text-center md:text-left space-y-3 md:ml-6">
      <h1 className="text-xl md:text-2xl font-bold">
        Register as a Ducat Capital Fintech Partner
      </h1>

      <p className="text-gray-200">
        Grow your business. Grow your career
      </p>

      <button className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600 transition">
        <span className="hidden md:inline">Contact Us</span>
        <span className="md:hidden">Download App</span>
      </button>
    </div>

    {/* Image */}
    <img
      src="/assets/download.jpeg"
      alt="Partner"
      className="w-full max-w-xs md:w-64 rounded-lg mx-auto md:mx-0 hidden md:block"
    />
  </div>
</div>

    </section>
  );
};

export default Testimonials;
