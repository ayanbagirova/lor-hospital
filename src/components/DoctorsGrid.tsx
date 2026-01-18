import React, { useState } from "react";
import { doctors } from "../data/doctors";
import { useNavigate } from "react-router-dom";

const DoctorsGrid: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Həkimin Adı, Soyadı"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-150 bg-gray-100 text-gray font-400 text-lg mb-8 px-6 py-4 border rounded-xl"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => navigate(`/doctors/${doctor.id}`)}
              className="bg-[#F9F9FA] rounded-3xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[360px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {doctor.specialty}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">
            Həkim tapılmadı
          </p>
        )}
      </div>
    </>
  );
};

export default DoctorsGrid;