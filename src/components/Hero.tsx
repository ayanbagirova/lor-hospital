import arrow from "../assets/images/arrow_outward.png";
import phone from "../assets/images/Phone.png";
import wp from "../assets/images/Vector-4.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-[75vh] md:min-h-[85vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/moni 2.png')",
      }}
    >
      {/* OVERLAY (optional, improves readability on mobile) */}
      <div className="absolute inset-0 bg-white/70 md:bg-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 leading-snug">
            İxtisaslaşmış Tibbi <br />
            Xidmətin Tək Ünvanı!
          </h1>

          <button className="mt-8 md:mt-10 inline-flex items-center gap-2 bg-sky-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-sky-600 transition">
            Bütün xidmətlər
            <img src={arrow} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* FLOATING ACTION BUTTONS */}
      <div className=" relative flex flex-col gap-4 z-50">
         {/* WhatsApp */}
         <button className="absolute right-10 top-15 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg ">
           <img src={wp} alt="WhatsApp" className="w-7 h-7" />
        </button>

        {/* Phone */}
         <button className="absolute right-10 top-40 w-14 h-14 rounded-full bg-sky-500 flex items-center justify-center shadow-lg">
         <img src={phone}/>
         </button>
       </div>
    </section>
  );
};

export default Hero;