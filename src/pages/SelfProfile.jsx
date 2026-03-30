import React, { useState } from "react";
import { users } from "../assets/assets";

const SelfProfile = () => {

  // 👉 user state
  const [user, setUser] = useState(users[0]);

  // 👉 edit toggle
  const [isEditing, setIsEditing] = useState(false);

  // 👉 form state
  const [formData, setFormData] = useState(user);

  // 👉 incoming requests (demo)
  const [requests, setRequests] = useState([
    { id: "2", name: "Rahul" },
    { id: "3", name: "Priya" },
  ]);

  // 👉 reviews (demo)
  const [reviews, setReviews] = useState([
    { id: 1, name: "Aditya", text: "Great learning experience!", rating: 4 },
    { id: 2, name: "Sneha", text: "Very helpful and patient.", rating: 5 },
  ]);

  // 👉 handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 👉 save profile
  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  // 👉 accept request
  const handleAccept = (id) => {
    setRequests(requests.filter((req) => req.id !== id));
  };

  // 👉 reject request
  const handleReject = (id) => {
    setRequests(requests.filter((req) => req.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* 🔹 Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">

        {isEditing ? (
          <div className="space-y-4">

            <input name="name" value={formData.name} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="bio" value={formData.bio} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="location" value={formData.location} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="availability" value={formData.availability} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="offers" value={formData.offers} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Skills I Offer (comma separated)" />
            <input name="wants" value={formData.wants} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Skills I Want (comma separated)" />

            <div className="flex gap-3">
              <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">Save</button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-400 text-white px-4 py-2 rounded cursor-pointer">Cancel</button>
            </div>

          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-6">

            <img src={user.image} className="w-28 h-28 rounded-full object-cover" />

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-semibold">{user.name}</h1>
              <p className="text-gray-500 text-sm mt-1">{user.bio}</p>
              <p className="text-sm text-gray-400 mt-2">📍 {user.location}</p>
              <p className="text-sm mt-2">⭐ {user.rating} ({user.reviews} reviews)</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="bg-primary text-white px-4 py-2 rounded-md text-sm cursor-pointer"
            >
              Edit Profile
            </button>

          </div>
        )}
      </div>

      {/* 🔹 Skills */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="font-semibold mb-3 text-green-600">Skills I Offer</h2>
          <div className="flex flex-wrap gap-2">
            {(Array.isArray(user.offers) ? user.offers : user.offers.split(",")).map((skill, i) => (
              <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="font-semibold mb-3 text-primary">Skills I Want</h2>
          <div className="flex flex-wrap gap-2">
            {(Array.isArray(user.wants) ? user.wants : user.wants.split(",")).map((skill, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* 🔹 Availability */}
      <div className="bg-white rounded-xl shadow-sm p-5 mt-6">
        <h2 className="font-semibold mb-2">Availability</h2>
        <p className="text-gray-500 text-sm">{user.availability}</p>
      </div>

      {/* 🔹 Incoming Requests */}
      <div className="bg-white rounded-xl shadow-sm p-5 mt-6">
        <h2 className="font-semibold mb-4">Incoming Requests</h2>

        {requests.length === 0 ? (
          <p className="text-gray-500 text-sm">No requests</p>
        ) : (
          requests.map((req) => (
            <div key={req.id} className="flex justify-between items-center border-b pb-2 mb-2">
              <div>
                <p className="font-medium">{req.name}</p>
                <p className="text-xs text-gray-400">ID: {req.id}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleAccept(req.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded text-xs cursor-pointer"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(req.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-xs cursor-pointer"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔹 Reviews */}
      <div className="bg-white rounded-xl shadow-sm p-5 mt-6">
        <h2 className="font-semibold mb-4">Reviews</h2>

        {reviews.map((rev) => (
          <div key={rev.id} className="border-b pb-3 mb-3">
            <p className="font-medium">{rev.name}</p>
            <p className="text-sm text-gray-500">
              {"⭐".repeat(rev.rating)} - {rev.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SelfProfile;