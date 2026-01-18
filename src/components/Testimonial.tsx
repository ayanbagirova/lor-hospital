import avatar from "../assets/images/confident-professional-young-woman-blue-blouse-pointing-finger-upper-left-corner-looking-camera-persuade-customer-make-right-choice-sign-deal-with-her-company-white-background 1.png";
import quote from "../assets/images/Group 12.png";
import stars from "../assets/images/Frame 52.png"

const PatientSatisfaction: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-14">
          Pasiyent məmnunluğu
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="relative bg-[#F9F9F9] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <img
              src={quote}
              alt="quote"
              className="absolute top-6 right-6 w-8 h-8"
            />

            <div className="flex flex-col items-start mb-4">
              <img
                src={avatar}
                alt="Aysel Bağışlı"
                className="w-12 h-12 rounded-full object-cover mb-2"
              />

              <h4 className="font-semibold text-gray-900">
                Aysel Bağışlı
              </h4>

              <img
                src={stars}
                alt="stars"
                className="mt-1 h-4"
              />
            </div>

            <p className="text-[#1C1C1C] leading-relaxed text-sm">
              5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız
              hospital! Hər birinizə uğurlar.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-[#F9F9F9] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <img
              src={quote}
              alt="quote"
              className="absolute top-6 right-6 w-8 h-8"
            />

            <div className="flex flex-col items-start mb-4">
              <img
                src={avatar}
                alt="Aysel Bağışlı"
                className="w-12 h-12 rounded-full object-cover mb-2"
              />

              <h4 className="font-semibold text-gray-900">
                Aysel Bağışlı
              </h4>

              <img
                src={stars}
                alt="stars"
                className="mt-1 h-4"
              />
            </div>

            <p className="text-[#1C1C1C] leading-relaxed text-sm">
              5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız
              hospital! Hər birinizə uğurlar.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="relative bg-[#F9F9F9] rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <img
              src={quote}
              alt="quote"
              className="absolute top-6 right-6 w-8 h-8"
            />

            <div className="flex flex-col items-start mb-4">
              <img
                src={avatar}
                alt="Aysel Bağışlı"
                className="w-12 h-12 rounded-full object-cover mb-2"
              />

              <h4 className="font-semibold text-gray-900">
                Aysel Bağışlı
              </h4>

              <img
                src={stars}
                alt="stars"
                className="mt-1 h-4"
              />
            </div>

            <p className="text-[#1C1C1C] leading-relaxed text-sm">
              5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız
              hospital! Hər birinizə uğurlar.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PatientSatisfaction;