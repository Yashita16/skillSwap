import React from "react";
import { Code, Palette, Mic, BookOpen, Globe } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const skills = [
  {
    icon: <Code size={28} />,
    title: "Web Development",
    desc: "HTML, CSS, React",
  },
  {
    icon: <Palette size={28} />,
    title: "Graphic Design",
    desc: "Photoshop, Figma",
  },
  {
    icon: <Mic size={28} />,
    title: "Public Speaking",
    desc: "Communication skills",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Academics",
    desc: "Maths, Science",
  },
  {
    icon: <Globe size={28} />,
    title: "Languages",
    desc: "English, Spanish",
  },
];

const FeaturedSkills = () => {
  const {navigate} =useAppContext()
  return (
    <div className="w-full py-10 px-6 bg-gray-50">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-14">
        Popular Skills
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center bg-white rounded-2xl p-6 hover:bg-gray hover:shadow-xl transition duration-300 cursor-pointer" onClick={() => navigate(`/explore?skill=${skill.title}`)}
          >
            
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white mb-4 shadow-md group-hover:scale-110 transition duration-300">
              {skill.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold mb-1">
              {skill.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-gray-500">
              {skill.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default FeaturedSkills;