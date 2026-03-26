import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const SkillsPage = () => {
  const { navigate } = useAppContext()
  const [skills, setSkills] = useState([
    { name: "", priority: "" },
    { name: "", priority: "" },
    { name: "", priority: "" }
  ]);

  const [offeredSkill, setOfferedSkill] = useState("");
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");
  const [timing, setTiming] = useState("");

  const handleSkillChange = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate('/')

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-primary border border-gray-300 rounded-lg shadow-md p-8 w-[600px]">

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">




          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg text-secondary">Skills Wanted</h2>


            {skills.map((skill, index) => (
              <div key={index} className="flex gap-4">

                <input
                  type="text"
                  placeholder={`Skill ${index + 1}`} required
                  value={skill.name}
                  onChange={(e) =>
                    handleSkillChange(index, "name", e.target.value)
                  }
                  className="border p-2 rounded w-full border border-gray-300/60 rounded-2xl bg-white"
                />

                <select
                  value={skill.priority}
                  onChange={(e) =>
                    handleSkillChange(index, "priority", e.target.value)
                  }
                  className="border p-2 rounded w-40 border border-gray-300/60 rounded-2xl bg-white"
                >
                  <option value="">Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>

              </div>
            ))}
          </div>

          {/* Offered Skill + Experience */}

          <h2 className="font-semibold text-lg text-secondary">Your Skill</h2>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Skill you want to offer"
              value={offeredSkill}
              onChange={(e) => setOfferedSkill(e.target.value)} required
              className="border p-2 rounded w-full border border-gray-300/60 rounded-2xl bg-white"
            />

            <input
              type="number"
              placeholder="Experience (years)"
              value={experience}
              onChange={(e) => setExperience(e.target.value)} required
              className="border p-2 rounded w-40 border border-gray-300/60 rounded-2xl bg-white"
            />
          </div>


          {/* Availability */}
          <h2 className="font-semibold text-lg text-secondary"> Availability </h2>
          <div className="flex gap-6 ">
            <label>
              <input
                type="radio"
                value="Online"
                checked={availability === "Online"}
                onChange={(e) => setAvailability(e.target.value)}
                
              /> Online
            </label>

            <label>
              <input
                type="radio"
                value="Offline"
                checked={availability === "Offline"}
                onChange={(e) => setAvailability(e.target.value)}
              /> Offline
            </label>
          </div>

          {/* Timing */}
          <h2 className="font-semibold text-lg text-secondary"> Suitable Timing </h2>
          <div className="flex gap-6">
            {["Morning", "Evening", "Night"].map((time) => (
              <label key={time}>
                <input
                  type="radio"
                  value={time}
                  checked={timing === time}
                  onChange={(e) => setTiming(e.target.value)} required
                /> {time}
              </label>
            ))}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-secondary text-white py-2 rounded cursor-pointer"
          >
            Submit
          </button>

        </form>
      </div>

    </div>
  );
};

export default SkillsPage;