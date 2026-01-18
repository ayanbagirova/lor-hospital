import photo1 from "../assets/images/Timpanometriya 1.png";
import photo2 from "../assets/images/image 3.png";
import photo3 from "../assets/images/boğaz 1.png";
import photo4 from "../assets/images/d9f8263f-95b9-4a0a-a4a9-f2ffd64f2505 1.png";
import arrow1 from "../assets/images/Frame 1171278881-2.png";
import arrow2 from "../assets/images/Frame 1171278880-2.png";


const UsefulInfoSection = () => {

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* HEADER */}
      <div
        className="flex items-center justify-between mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-[40px] font-semibold text-[#4A4A4A]">
          Faydalı Məlumatlar
        </h2>

        {/* ARROWS (STATIC IMG) */}
        <div className="flex gap-4">
          <img
            src={arrow1}
            alt="prev"
            className="w-12 h-12 cursor-pointer"
          />
          <img
            src={arrow2}
            alt="next"
            className="w-12 h-12 cursor-pointer"
          />
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* CARD 1 */}
        <div
          className="bg-white rounded-2xl overflow-hidden shadow-sm"
          data-aos="fade-up"
        >
          <div className="h-[230px]">
            <img
              src={photo1}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="p-6 flex flex-col h-[180px]">
            <p className="text-sm text-[#606060] mb-2">28 mart 2025</p>

            <h4 className="text-lg font-semibold text-gray-800">
              Qulaq xəstəlikləri
            </h4>

            {/* PUSH LINK TO BOTTOM */}
            <a className="mt-auto text-[#00AEEF] inline-flex items-center gap-1 font-medium cursor-pointer">
              Ətraflı →
            </a>
          </div>
        </div>

        {/* CARD 2 (BLUE IMAGE OVERLAY TEXT) */}
        <div
          className="rounded-2xl overflow-hidden shadow-sm relative "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={photo2}
            className="w-full h-[230px] object-cover"
            alt=""
          />



          <div className="p-6 flex flex-col h-[180px] ">
            <p className="text-sm text-[#606060] mb-2">24 iyun 2025</p>
            <h4 className="text-lg font-semibold text-gray-800">
              Burun xəstəlikləri
            </h4>
            <a className="mt-auto text-[#00AEEF] inline-flex items-center gap-1 font-medium cursor-pointer">
              Ətraflı →
            </a>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          className="rounded-2xl overflow-hidden shadow-sm relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={photo3}
            className="w-full h-[230px] object-cover"
            alt=""
          />

          <div className="p-6 flex flex-col h-[180px]">
            <p className="text-sm text-[#606060] mb-2">1 avqust 2025</p>
            <h4 className="text-lg font-semibold text-gray-800">
              Baş-Boyun cərrahiyyəsi
            </h4>
            <a className="mt-auto text-[#00AEEF] inline-flex items-center gap-1 font-medium cursor-pointer">
              Ətraflı →
            </a>
          </div>
        </div>

        {/* CARD 4 */}
        <div
          className="bg-white rounded-2xl overflow-hidden shadow-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="h-[230px]">
            <img
              src={photo4}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="p-6 flex flex-col h-[180px]">
            <p className="text-sm text-[#606060] mb-2">28 mart 2025</p>
            <h4 className="text-lg font-semibold text-gray-800">
              Lor əməliyyatı zamanı anesteziya
            </h4>
           <a className="mt-auto text-[#00AEEF] inline-flex items-center gap-1 font-medium cursor-pointer">
              Ətraflı →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulInfoSection;