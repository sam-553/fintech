import React from "react";
import { Users, Wallet, Smartphone, IndianRupee, Package, TrendingUp, DollarSign, RotateCcw } from "lucide-react";



const BecomePartner = () => {
   const featureCard = [
  {
    desc: "A personalized app built just for you",
    img: "/assets/p1.webp",
  },
  {
    desc: "Quickly create, organize, and track your customer leads",
    img: "/assets/p2.webp",
  },
  {
    desc: "Promote your business using your referral code",
    img: "/assets/p3.webp",
  },
  {
    desc: "One app to manage all your transactions effortlessly",
    img: "/assets/p4.webp",
  },
];

 const consultant = [
  {
    icon: <Users size={28} />,
    desc: "1000+ Partners",
    bg: "bg-blue-100 text-blue-700",
  },
  {
    icon: <Wallet size={28} />,
    desc: "Weekly Payments",
    bg: "bg-green-100 text-green-700",
  },
  {
    icon: <Smartphone size={28} />,
    desc: "Fintech Mobile App",
    bg: "bg-purple-100 text-purple-700",
  },
  {
    icon: <IndianRupee size={28} />,
    desc: "Upto ₹50,000 Earnings",
    bg: "bg-orange-100 text-orange-700",
  },
];
  
const custumer = [
  {
    desc: "Loan agents",
    img: "/assets/loan-against.webp",
  },
  {
    desc: "Former bank employee",
    img: "/assets/bank-employee.webp",
  },
  {
    desc: "Insurance agents",
    img: "/assets/ins-agent.webp",
  },
  {
    desc: "Wealth advisors",
    img: "/assets/piggy.webp",
  },
  {
    desc: "BFSI professionals",
    img: "/assets/bfsi.webp",
  },
];

const testimonials = [
    {
      id: 1,
      name: "Aakash Saxena",
      position: "Ducat Capital Fintech Certified Partner",
      message: "I joined Ducat Capital Fintech 5 months ago. The app is very user friendly and the personalized website and marketing features helped me get more customers. The partner support team is very supportive and cooperative as well. All my queries have been resolved by them quickly.",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Sanjay Yadav",
      position: "Ducat Capital Fintech Certified Partner",
      message: "I feel proud to be a Ducat Capital Fintech Partner. This job has earned me respect in society. Also I am very happy to help people when they are in financial difficulties. The appreciation that I get from my customers motivates me to always do my best.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Adesh Chaudhary",
      position: "Ducat Capital Fintech Certified Partner",
      message: "I am glad that I chose to associate myself with Ducat Capital Fintech . They have some unique financial products and selling those to people in need makes me very happy because through Ducat Capital Fintech I could make an impact in people's lives. They have the best commissions in the market.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];


 const Growdata = [
    {
      title: "GET CERTIFIED",
      desc: "Learn from video courses and webinars to become an expert.",
    },
    {
      title: "ACQUIRE CUSTOMERS",
      desc: "Use your personalized website and marketing materials.",
    },
    {
      title: "SELL FINANCIAL PRODUCTS",
      desc: "Sell our products and earn leading commissions.",
    },
  ];
    
  const successData = [
  {
    icon: <Package size={28} />,
    heading:"Customized products",
    desc: "Created for people traditional institutions do not serve.",
    bg: "bg-blue-100 text-blue-700",
  },
  {
    icon: <TrendingUp size={28} />,
    heading:"Huge unmet demand",
    desc: "300Mn customers in small towns across India.",
    bg: "bg-green-100 text-green-700",
  },
  {
    icon: <DollarSign size={28} />,
    heading:"Great commissions",
    desc: "Enjoy the industry's leading commissions.",
    bg: "bg-purple-100 text-purple-700",
  },
  {
    icon: <RotateCcw size={28} />,
    heading:"7-day payment cycle",
    desc: "Earnings credited 4 times in a month!",
    bg: "bg-orange-100 text-orange-700",
  },
  {
    icon: <Users size={28} />,
    heading:"Own your customers",
    desc: "Upto ₹50,000 Earnings",
    bg: "We don't sell directly to customers.",
  },
  {
    icon: <Smartphone size={28} />,
    heading:"App in your language",
    desc: "5 languages to choose from.",
    bg: "bg-orange-100 text-orange-700",
  },
];
  

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100 mt-8">

      {/* Background blur effect */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>

    <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

  {/* IMAGE → TOP ON MOBILE */}
  <div className="flex justify-center order-1 md:order-2">
    <img
      src="/assets/partnerimg.webp"
      alt="Finance App"
      className="w-full max-w-md rounded-2xl shadow-xl"
    />
  </div>

  {/* CONTENT */}
  <div className="space-y-6 order-2 md:order-1">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
        Aapki Apni Finance Ki Dukaan
      </span>
    </h1>

    <p className="text-lg text-gray-600">
      Your reliable partner for personal, home, business, and car loans.
      We simplify the loan process with expert guidance, bank partnerships,
      and fast approvals.
    </p>

    <p className="text-gray-600">
      Finance ki online dukaan app — now available in 5 languages
      to reach customers both online and offline.
    </p>

    {/* CTA Buttons */}
    <div className="flex gap-4 pt-4 flex-wrap">
      <button className="px-8 py-3 bg-blue-700 text-white rounded-xl shadow-lg hover:bg-blue-800 hover:scale-105 hover:shadow-xl transition duration-300">
        Become Partner
      </button>

      <button className="px-8 py-3 border border-blue-700 text-blue-700 rounded-xl hover:bg-blue-50 hover:scale-105 transition duration-300">
        Learn More
      </button>
    </div>
  </div>

</div>


      {/* Bottom CTA Bar */}
      <div className="mt-16 mx-4 md:mx-10 backdrop-blur-md bg-gray-500 border border-white/30 rounded-xl shadow-lg p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          <p className="text-gray-100 font-medium text-sm md:text-base">
            Are you looking to become a Ducat Capital Fintech Partner?
          </p>

          <button className="bg-green-600 px-6 py-3 rounded-xl text-white text-sm font-semibold hover:bg-green-700 hover:scale-105 transition">
            <span className="hidden md:inline text-sm">Contact Us</span>
            <span className="md:hidden">Download Now</span>
          </button>
        </div>
      </div>

   <div className="mt-16 text-center">
  <div className="text-center mb-10">
  <h1 className="text-3xl font-bold">
    Aapki Apni Finance Ki Dukaan
  </h1>

  <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
  rounded-full transition-all duration-500 
  hover:w-28"></div>
</div>

 

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
    {featureCard.map((card, i) => (
      <div
        key={i}
        className="group relative bg-white rounded-2xl shadow-lg 
        hover:shadow-2xl hover:-translate-y-3 
        transition duration-500 p-6 text-center overflow-hidden"
      >
        {/* Gradient Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-r 
        from-blue-500/10 to-indigo-500/10 opacity-0 
        group-hover:opacity-100 transition duration-500"></div>

        {/* Image */}
        <img
          src={card.img}
          alt=""
          className="w-20 mx-auto mb-4 rounded-xl 
          "
        />

        {/* Text */}
        <p className="text-gray-700 font-semibold relative z-10">
          {card.desc}
        </p>

        {/* Bottom underline animation */}
        <div className="h-1 w-0 bg-blue-600 
        group-hover:w-full transition-all duration-500 
        mx-auto mt-4 rounded"></div>
      </div>
    ))}
  </div>
</div>

 {/* Heading Section */}
<div className="text-center m-12">
  <h1 className="text-2xl md:text-4xl font-bold text-gray-800 
   transition duration-300">
    Why is Ducat Capital Fintech the #1 trusted platform 
    for financial consultants
  </h1>

  <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
  rounded-full transition-all duration-500 hover:w-32"></div>
</div>

{/* Consultant Cards */}
<div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 px-6">
  {consultant.map((item, i) => (
    <div
      key={i}
      className="group text-center cursor-pointer 
      transition duration-500 hover:-translate-y-3"
    >
      {/* Icon Circle */}
      <div
        className={`h-20 w-20 mx-auto rounded-full flex 
        items-center justify-center relative
        shadow-lg group-hover:shadow-2xl
        transition duration-500 ${item.bg}`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full 
        bg-gradient-to-r from-blue-500/20 to-indigo-500/20 
        opacity-0 group-hover:opacity-100 transition"></div>

        <span className="relative z-10">
          {item.icon}
        </span>
      </div>

      {/* Text */}
      <p className="font-bold text-gray-700 mt-6 
      group-hover:text-blue-700 transition duration-300 text-lg">
        {item.desc}
      </p>

      {/* Bottom line animation */}
      <div className="h-1 w-0 bg-blue-600 mx-auto mt-3 
      rounded-full group-hover:w-16 transition-all duration-500"></div>
    </div>
  ))}
</div>


 {/* who can earn section */}
<div>
    
     <div className="text-center m-12">
  <h1 className="text-2xl md:text-4xl font-bold text-gray-800 
   transition duration-300">
    Who can earn with Ducat Capital Fintech ?
  </h1>

  <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
  rounded-full transition-all duration-500 hover:w-32"></div>
</div>

   <div className="mt-16 mx-4 md:mx-10 backdrop-blur-md bg-gray-100 border border-white/30 rounded-xl shadow-lg p-4 flex justify-between items-center">

  {custumer.map((c, i) => (
    <div
      key={i}
      className="p-4 mx-8"
    >
      <img
        src={c.img}
        alt=""
        className="w-20 mx-auto mb-4 rounded-xl"
      />

      <p className="font-semibold text-gray-700">
        {c.desc}
      </p>

      {/* underline hover animation */}
      <div className="h-1 w-0 bg-blue-600 mx-auto mt-4 
      rounded-full group-hover:w-full 
      transition-all duration-500"></div>
    </div>
  ))}
</div>
</div>
      
      <div className="text-center m-12">
  <h1 className="text-2xl md:text-4xl font-bold text-gray-800 
   transition duration-300">
   Grow your business
  </h1>

  <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
  rounded-full transition-all duration-500 hover:w-32"></div>
</div>
   <div className="max-w-4xl mx-auto px-6 space-y-6">
  {Growdata.map((item, i) => (
    <div
      key={i}
      className="bg-white p-8 rounded-2xl shadow-lg
      hover:border-green-400 hover:border
       w-full flex flex-col justify-center"
    >
      <h1 className="text-xl font-bold text-blue-700 mb-3">
        {item.title}
      </h1>

      <p className="text-gray-600">
        {item.desc}
      </p>
    </div>
  ))}
</div>
  
  <div className="">
         
      <div className="text-center m-12">
  <h1 className="text-2xl md:text-4xl font-bold text-gray-800 
   transition duration-300">
   How we ensure your success
  </h1>

  <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
  rounded-full transition-all duration-500 hover:w-32"></div>
</div>

<div className="m-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {successData.map((item, i) => (
    <div
      key={i}
      className="group flex gap-5 items-start cursor-pointer
      p-6 rounded-2xl bg-white shadow-md
      hover:shadow-2xl hover:-translate-y-1
      transition duration-300"
    >
      {/* Fixed Icon Circle */}
      <div
        className={`min-w-[70px] h-[70px] rounded-full flex
        items-center justify-center text-xl
        shadow-lg transition duration-300
        group-hover:scale-110 ${item.bg}`}
      >
        {item.icon}
      </div>

      {/* Content */}
      <div>
        <h1 className="font-bold text-gray-800 text-lg mb-1">
          {item.heading}
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.desc}
        </p>

        {/* Hover underline */}
        <div className="h-1 w-0 bg-green-500 mt-2 rounded-full
          group-hover:w-16 transition-all duration-500">
        </div>
      </div>
    </div>
  ))}
</div>


  </div>

{/* capital */}

<div>
  <div className="text-center m-12">
  <h1 className="text-2xl md:text-4xl font-bold text-gray-800 
   transition duration-300">
   What our Ducat Capital Fintech Partners say
  </h1>

  <div className="h-1 w-16 bg-green-600 mx-auto mt-4 
  rounded-full transition-all duration-500 hover:w-32"></div>
</div>

 <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="text-left text-gray-700 relative">
                <span className="text-blue-700 text-2xl absolute -left-2 -top-2">“</span>
                <p className="mt-2">{t.message}</p>
              </div>
              <div className="flex items-center mt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-700"
                />
                <div className="ml-4 text-left">
                  <h4 className="font-semibold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.position}</p>
                </div>
              </div>

              
            </div>
          ))}
        </div>
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

export default BecomePartner;
