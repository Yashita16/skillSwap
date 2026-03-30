import React from "react";
import { useParams } from "react-router-dom";

import { users } from "../assets/assets";
const Profile = () => {

  // 👉 abhi demo ke liye first user le rahe hai
   const { id } = useParams();
  const user = users[id];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* 🔹 Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center gap-6">
        
        <img
          src={user.image}   // ✅ dynamic image
          className="w-28 h-28 rounded-full object-cover"
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-semibold">{user.name}</h1>
          <p className="text-gray-500 text-sm mt-1">{user.bio}</p>

          <p className="text-sm text-gray-400 mt-2">
            📍 {user.location}
          </p>

          <p className="text-sm mt-2">
            ⭐ {user.rating} ({user.reviews} reviews)
          </p>
        </div>

        <div className="flex gap-3">
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary-dull cursor-pointer">
            Request Swap
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer">
            Message
          </button>
        </div>
      </div>

      {/* 🔹 Skills Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">

        {/* Offers */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="font-semibold mb-3 text-green-600">
            Skills I Offer
          </h2>
          <div className="flex flex-wrap gap-2">
            {user.offers.map((skill, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Wants */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="font-semibold mb-3 text-primary">
            Skills I Want
          </h2>
          <div className="flex flex-wrap gap-2">
            {user.wants.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Stats */}
      <div className="bg-white rounded-xl shadow-sm p-5 mt-6 grid grid-cols-3 text-center">
        <div>
          <h3 className="text-lg font-semibold">{user.swaps}</h3>
          <p className="text-gray-500 text-sm">Swaps</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{user.reviews}</h3>
          <p className="text-gray-500 text-sm">Reviews</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{user.rating}</h3>
          <p className="text-gray-500 text-sm">Rating</p>
        </div>
      </div>

      {/* 🔹 Availability */}
      <div className="bg-white rounded-xl shadow-sm p-5 mt-6">
        <h2 className="font-semibold mb-2">Availability</h2>
        <p className="text-gray-500 text-sm">{user.availability}</p>
      </div>

      {/* 🔹 Reviews */}
      <div className="bg-white rounded-xl shadow-sm p-5 mt-6">
        <h2 className="font-semibold mb-4">Reviews</h2>

        <div className="space-y-4">
          <div className="border-b pb-3">
            <p className="font-medium">Aditya</p>
            <p className="text-sm text-gray-500">
              ⭐⭐⭐⭐ - Great learning experience!
            </p>
          </div>

          <div className="border-b pb-3">
            <p className="font-medium">Sneha</p>
            <p className="text-sm text-gray-500">
              ⭐⭐⭐⭐⭐ - Very helpful and patient.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;