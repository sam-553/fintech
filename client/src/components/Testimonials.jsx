import React from "react";

const Testimonials=() =>{
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Entrepreneur",
      message: "FinanceCorp helped me get a business loan in just 2 days!",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Anjali Verma",
      position: "Homeowner",
      message: "Their home loan service was smooth and very transparent.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Sameer Tiwari",
      position: "Investor",
      message: "I trusted FinanceCorp with my investments, and they delivered amazing returns.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12">
          Real feedback from clients who trusted us with their financial goals.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center mb-4">
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

              <div className="text-left text-gray-700 relative">
                <span className="text-blue-700 text-2xl absolute -left-2 -top-2">“</span>
                <p className="mt-2">{t.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials