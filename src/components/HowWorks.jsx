import React from "react";
import { User, Search, MessageCircle, BookOpen } from "lucide-react";

const steps = [
  {
    icon: <User size={28} />,
    title: "Create Profile",
    desc: "Add your skills and what you want to learn",
  },
  {
    icon: <Search size={28} />,
    title: "Find Match",
    desc: "Discover people with matching interests",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "Connect & Swap",
    desc: "Send requests and start skill exchange",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Learn & Teach",
    desc: "Grow together by teaching each other",
  },
];

const HowWorks = () => {
  return (
    <div className="w-full py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-16">
        How It Works
      </h2>

      {/* Container */}
      <div className="max-w-6xl mx-auto relative flex items-center justify-between gap-6 overflow-x-auto">

        {/* Connecting Line */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gray-200 z-0"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center text-center min-w-[220px] bg-white  border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
          >
            
            {/* Icon Circle */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white mb-4 shadow-lg">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">
              {step.title}
            </h3>

            {/* Desc */}
            <p className="text-gray-600 text-sm">
              {step.desc}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;