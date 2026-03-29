import React from "react";
import SuggestedUser from "./SuggestedUser";
import assets , {people} from "../assets/assets";

const ExplorePeople = () => {
  
  return (
    <div className="w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4">
        Explore People
      </h2>

      {/* Subheading */}
      <p className="text-center text-gray-500 mb-12">
        Find people to learn from and share your skills with
      </p>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">


        {people.map((person,index)=>(
          <SuggestedUser  key={index} person={person} />

        ))}
        
  
        
        

      </div>
    </div>
  );
};

export default ExplorePeople;