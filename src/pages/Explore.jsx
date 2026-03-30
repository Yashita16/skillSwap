import React, { useState } from "react";
import { assets, users } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 6;

  // ✅ Skill checkbox handler
  const handleSkillChange = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  // ✅ FILTER LOGIC
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.wants.some((w) =>
        w.toLowerCase().includes(search.toLowerCase())
      ) ||
      user.offers.some((o) =>
        o.toLowerCase().includes(search.toLowerCase())
      );

    const matchesSkill =
      selectedSkills.length === 0 ||
      selectedSkills.some(
        (skill) =>
          user.wants.includes(skill) ||
          user.offers.includes(skill)
      );

    const matchesLevel =
      selectedLevel === "" || user.level === selectedLevel;

    return matchesSearch && matchesSkill && matchesLevel;
  });

  // ✅ PAGINATION LOGIC
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;

  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  return (
    <div className="py-10 px-8 bg-gray-50 min-h-screen">

      {/* 🔹 Heading */}
      <h1 className="text-3xl font-bold">Explore Skill Swaps</h1>
      <p className="text-gray-500 mt-1">
        Find the right learning partners
      </p>

      {/* 🔍 Search */}
      <div className="mt-6 bg-white rounded-xl p-4 flex gap-4 shadow">
        <div className="flex items-center gap-2 border rounded-md px-3 py-2 w-full md:w-1/3">
          <img src={assets.search_icon} className="w-4" />
          <input
            type="text"
            placeholder="Search skills or users..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full outline-none text-sm"
          />
        </div>

        <button
          onClick={() => {
            setSearch("");
            setSelectedSkills([]);
            setSelectedLevel("");
            setCurrentPage(1);
          }}
          className="bg-primary text-white px-4 py-2 rounded-md"
        >
          Clear
        </button>
      </div>

      <div className="flex gap-6 mt-6">

        {/* 🔹 Sidebar */}
        <div className="w-1/4 bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-3">Filters</h2>

          <p className="text-sm mb-2">Skills</p>
          {["React", "DSA", "UI Design", "Python", "Java", "SQL"].map((skill) => (
            <label key={skill} className="flex gap-2 text-sm mb-1">
              <input
                type="checkbox"
                checked={selectedSkills.includes(skill)}
                onChange={() => {
                  handleSkillChange(skill);
                  setCurrentPage(1);
                }}
              />
              {skill}
            </label>
          ))}

          <p className="text-sm mt-4 mb-2">Level</p>
          {["Beginner", "Intermediate", "Expert"].map((lvl) => (
            <label key={lvl} className="flex gap-2 text-sm mb-1">
              <input
                type="radio"
                name="level"
                checked={selectedLevel === lvl}
                onChange={() => {
                  setSelectedLevel(lvl);
                  setCurrentPage(1);
                }}
              />
              {lvl}
            </label>
          ))}
        </div>

        {/* 🔹 Cards */}
        <div className="w-3/4">

          <p className="text-right text-sm text-gray-500 mb-3">
            {filteredUsers.length} results
          </p>

          <div className="grid grid-cols-2 gap-6">
            {currentUsers.map((user) => {
              const realIndex = users.indexOf(user); // 🔥 FIX

              return (
                <div
                  key={realIndex}
                  onClick={() => navigate(`/profile/${realIndex}`)}
                  className="bg-white rounded-xl p-4 shadow hover:shadow-lg hover:scale-105 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={user.image}
                      className="w-12 h-12 rounded-full"
                    />
                    <h3 className="font-semibold">{user.name}</h3>
                  </div>

                  <p className="text-sm mt-3">
                    <span className="text-primary">Wants:</span>{" "}
                    {user.wants.join(", ")}
                  </p>

                  <p className="text-sm">
                    <span className="text-green-600">Offers:</span>{" "}
                    {user.offers.join(", ")}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Level: {user.level || "Intermediate"}
                  </p>

                  <button className="mt-4 w-full bg-primary text-white py-2 rounded-md text-sm">
                    Request Swap
                  </button>
                </div>
              );
            })}
          </div>

          {/* ❌ No result */}
          {filteredUsers.length === 0 && (
            <p className="text-center mt-6 text-gray-500">
              No users found 😕
            </p>
          )}

          {/* 🔥 Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;