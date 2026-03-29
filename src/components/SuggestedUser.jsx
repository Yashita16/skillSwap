import React from "react";

const SuggestedUser = ({ person }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  if (!person) return null; // safety

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-80 h-[420px] rounded-xl p-0.5 bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-300 cursor-pointer"
    >
      
      {/* Glow Effect */}
      {visible && (
        <div
          className="pointer-events-none blur-2xl opacity-40 bg-gradient-to-r from-primary via-primary-dull to-secondary size-60 absolute z-0 transition-opacity duration-300"
          style={{ top: position.y - 120, left: position.x - 120 }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center text-center">

        {/* Avatar */}
        <img
          src={person.icon}
          alt="Profile"
          className="w-20 h-20 rounded-full shadow-md mb-3 border-2 border-gray-200"
        />

        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800">
          {person.name}
        </h2>

        {/* Bio */}
        <p className="text-sm text-gray-500 mb-4">
          {person.bio}
        </p>

        {/* Offers */}
        <div className="mb-3">
          <p className="text-xs text-gray-400">Offers</p>
          <div className="flex flex-wrap justify-center gap-2 mt-1">
            {person.offers.map((offer, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full"
              >
                {offer}
              </span>
            ))}
          </div>
        </div>

        {/* Wants */}
        <div className="mb-5">
          <p className="text-xs text-gray-400">Wants</p>
          <div className="flex flex-wrap justify-center gap-2 mt-1">
            {person.wants.map((want, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
              >
                {want}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="mt-auto w-full py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
          Connect
        </button>
      </div>
    </div>
  );
};

export default SuggestedUser;