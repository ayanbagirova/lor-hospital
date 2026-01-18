import arrow1 from "../assets/images/Frame 1171278881.png";
import arrow2 from "../assets/images/Frame 1171278880.png";
import doc1 from "../assets/images/Mask group.png";
import doc2 from "../assets/images/Mask group-2.png";
import doc3 from "../assets/images/Mask group-3.png";
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Doctors = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <section className="bg-sky-500 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-white text-4xl font-bold">Həkimlər</h2>

          {/* Arrows */}
          <div className="flex gap-3">
            <button className="w-12 h-12 flex items-center justify-center">
              <img src={arrow1} alt="Prev" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center">
              <img src={arrow2} alt="Next" />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* CARD 1 */}
          <div className="bg-white rounded-3xl overflow-hidden  hover:shadow-lg transition">
            <img
              src={doc1}
              alt="Dr. Aqil Ağayev"
              className="w-full h-[360px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Dr. Aqil Ağayev
              </h3>
              <p className="text-gray-600 mt-2">
                Qulaq Burun Boğaz cərrahı,<br />
                Otonevroloq
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl overflow-hidden  hover:shadow-lg transition">
            <img
              src={doc2}
              alt="Dr. Nigar Muradova"
              className="w-full h-[360px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Dr. Nigar Muradova
              </h3>
              <p className="text-gray-600 mt-2">
                Qulaq Burun Boğaz cərrahı,<br />
                Otonevroloq
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl overflow-hidden  hover:shadow-lg transition">
            <img
              src={doc3}
              alt="Dr. Xəyyam Musayev"
              className="w-full h-[360px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Dr. Xəyyam Musayev
              </h3>
              <p className="text-gray-600 mt-2">
                Qulaq Burun Boğaz və Baş-Boyun<br />
                Cərrahiyyəsi uzmanı
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Doctors;