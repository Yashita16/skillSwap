import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const Connection = ({ users, connections, currentUserId }) => {
  const {navigate}=useAppContext()
  const [search, setSearch] = useState("");

  // ✅ Safe access
  const connectionIds = connections?.[currentUserId] || [];

  // ✅ Convert IDs → full user data
  const userConnections = users.filter(user =>
    connectionIds.includes(user.id)
  );

  // ✅ Search filter
  const filtered = userConnections.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">
        Your Connections ({userConnections.length})
      </h1>

      {/* No connections case */}
      {userConnections.length === 0 && (
        <p className="text-gray-500">No connections found 😢</p>
      )}

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto mb-6">
        {userConnections.map((user) => (
          <div key={user.id} className="text-center min-w-[80px]">
            <img
              src={user.image}
              alt=""
              className="w-16 h-16 rounded-full object-cover"
            />
            <p className="text-sm mt-1">{user.name}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search connection..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      {/* List */}
      <div className="space-y-3">
        {filtered.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div className="flex items-center gap-3">
              <img
                src={user.image}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <p>{user.name}</p>
            </div>

            <button
              className="bg-primary text-white px-3 py-1 rounded cursor-pointer"
              onClick={() => navigate(`/chat/${user.id}`)}
            >
              Message
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Connection;