import logo from "../assets/images/Logo-2.png";
import face from "../assets/images/Vector-7.png";
import insta from "../assets/images/Group 1000008421.png";
import youtube from "../assets/images/Vector-8.png";
import wp from "../assets/images/Vector-9.png";
import phone from "../assets/images/phone icon.png";
import mail from "../assets/images/mail icon.png";
import loc from "../assets/images/location icon.png";
import facebook from "../assets/images/facebook icon.png";
import instagram from "../assets/images/instagram icon.png";
import question from "../assets/images/Vector-10.png";
import arrow from "../assets/images/Vector-11.png";
const Footer = () => {
  return (
    <footer className="bg-[#0095DA] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="space-y-6">
            <img
              src={logo}
              alt="LOR Hospital"
              className="w-40 md:w-48"
            />

            <p className="text-lg leading-relaxed max-w-md">
              Qafqazın ilk və yeganə <br />
              <span className="font-semibold">
                QULAQ BURUN BOĞAZ VƏ <br /> BAŞ-BOYUN MƏRKƏZİ!
              </span>
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 ">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <img src={face} className="w-3" />
              </div>

              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <img src={insta} className="w-5 h-5" />
              </div>

              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <img src={youtube} className="w-5" />
              </div>

              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <img src={wp} className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">ƏLAQƏ</h4>

            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-3">
                <img src={phone} className="w-5 h-5" />
                <span>*0111</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={mail} className="w-5" />
                <span>info@lorhospital.az</span>
              </div>

              <div className="flex items-start gap-3">
                <img src={loc} className="w-4 mt-1" />
                <span className="leading-relaxed">
                  Bakı ş., Nərimanov r., Əhməd <br />
                  Rəcəbli 19K, AZ1075
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">ABUNƏ OLUN</h4>

            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-3">
                <img src={facebook} className="w-[8.98px] h-[15.72px]" />
                <span>Lor Hospital</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={instagram} className="w-[15.16px] h-[15.16px]" />
                <span>Lor Hospital</span>
              </div>
            </div>
          </div>
        </div>

        {/* QUESTION INPUT */}
        <div className="mt-16 flex justify-end">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Sualınız var?"
              className="w-full py-4 pl-6 pr-16 rounded-full bg-transparent border border-white text-white placeholder-white outline-none"
            />

            <div className="absolute right-1 top-1 bottom-1 w-14 rounded-full bg-[#19B6FF] flex items-center justify-center">
              <img src={question} className="w-[25.2px] h-[17.96px]" />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/40 my-5"></div>

        {/* SCROLL TOP */}
        <div className="flex justify-end">
          <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
            <img src={arrow} className="w-[19.9px] h-[9.15px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;