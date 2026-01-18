import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";
import { useState } from "react";

import doc from "../assets/images/Group 31.png";
import pasient from "../assets/images/Group 32.png";
import star from "../assets/images/Star icon.png";
import icon from "../assets/images/Group 38.png";

type TabType = "info" | "articles" | "reviews";

const DoctorDetailPage = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === Number(id));
  const [activeTab, setActiveTab] = useState<TabType>("info");

  if (!doctor) return <div className="p-10">Həkim tapılmadı</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="rounded-3xl w-full max-h-[420px] object-cover"
          />
        </div>

        {/* INFO */}
        <div className="lg:col-span-2 flex flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#0095DA]">
            {doctor.name}
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mt-1">
            {doctor.specialty}
          </p>

          {/* STATS */}
          <div className="mt-6 sm:mt-8 border rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-3 bg-white">
            {/* EXPERIENCE */}
            <div className="min-h-[120px] sm:h-[172px] flex items-center justify-center gap-3 px-4">
              <img src={doc} className="w-8 h-8 sm:w-10 sm:h-10" />
              <div>
                <span className="block text-2xl sm:text-4xl font-semibold">
                  5 il
                </span>
                <span className="text-lg sm:text-xl text-gray-500">
                  Təcrübə
                </span>
              </div>
            </div>

            {/* PATIENTS */}
            <div className="min-h-[120px] sm:h-[172px] flex items-center justify-center gap-3 px-4 border-y sm:border-y-0 sm:border-x">
              <img src={pasient} className="w-8 h-8 sm:w-10 sm:h-10" />
              <div>
                <span className="block text-2xl sm:text-4xl font-semibold">
                  0
                </span>
                <span className="text-sm sm:text-xl text-gray-500">
                  Pasiyent sayı
                </span>
              </div>
            </div>

            {/* REVIEWS */}
            <div className="min-h-[120px] sm:h-[172px] flex items-center justify-center gap-3 px-4">
              <img src={star} className="w-8 h-8 sm:w-10 sm:h-10" />
              <div>
                <span className="block text-2xl sm:text-4xl font-semibold">
                  0
                </span>
                <span className="text-sm sm:text-xl text-gray-500">
                  Rəylər
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="mt-10 sm:mt-14 border-b overflow-x-auto">
        <div className="flex min-w-max sm:justify-around gap-6 sm:gap-12 text-lg sm:text-[24px] px-2">
          {[
            { key: "info", label: "Məlumat" },
            { key: "articles", label: "Həkimin məqalələri" },
            { key: "reviews", label: "Rəylər" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabType)}
              className={`pb-3 font-medium whitespace-nowrap ${
                activeTab === tab.key
                  ? "border-b-2 border-[#0095DA] text-[#0095DA]"
                  : "text-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="mt-8 sm:mt-10">
        {activeTab === "info" && (
          <div className="space-y-8 sm:space-y-10">
            {/* POSITION */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 bg-green-50 rounded-2xl p-4 sm:p-6">
              <div className="font-semibold text-gray-600">Vəzifə</div>
              <div className="md:col-span-3">{doctor.position}</div>

              <div className="font-medium text-gray-600">Mərkəz</div>
              <div className="md:col-span-3">{doctor.center}</div>
            </div>

            {/* EDUCATION */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 bg-green-50 rounded-2xl p-4 sm:p-6">
              <div className="font-medium text-gray-600">Təhsil</div>
              <div className="md:col-span-3 space-y-4">
                {doctor.education.map((edu, index) => (
                  <div key={index} className="flex gap-3">
                    <img src={icon} className="w-5 h-5 mt-1" />
                    <p>
                      <span className="font-medium">{edu.year} </span>
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TREATMENT */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-4 sm:p-6">
              <div className="font-medium text-gray-600">
                Müayinə və müalicə istiqamətləri
              </div>
              <div className="md:col-span-3 space-y-3">
                {doctor.treatmentDirections.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <img src={icon} className="w-5 h-5 mt-1" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "articles" && (
          <div className="py-16 text-center text-gray-400">
            Həkimin məqalələri tezliklə əlavə olunacaq
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="py-16 text-center text-gray-400">
            Rəylər tezliklə əlavə olunacaq
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetailPage;