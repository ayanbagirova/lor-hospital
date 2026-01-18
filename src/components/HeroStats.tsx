import layer1 from "../assets/images/Layer_1.png";
import layer2 from "../assets/images/Layer_1-2.png";
import layer3 from "../assets/images/Layer_1-3.png";

const HeroStats = () => {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        
        {/* ITEM 1 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <img
            src={layer1}
            alt=""
            className="w-12 h-12 sm:w-auto sm:h-auto"
          />
          <p className="text-gray-700 text-base sm:text-lg font-medium">
            <span className="font-bold">Qafqazın ilk və tək</span>
            <br className="hidden sm:block" />
            ixtisaslaşmış mərkəzi
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <img
            src={layer2}
            alt=""
            className="w-12 h-12 sm:w-auto sm:h-auto"
          />
          <p className="text-gray-700 text-base sm:text-lg font-medium">
            <span className="font-bold">12 illik+</span>
            <br className="hidden sm:block" />
            təcrübə
          </p>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <img
            src={layer3}
            alt=""
            className="w-12 h-12 sm:w-auto sm:h-auto"
          />
          <p className="text-gray-700 text-base sm:text-lg font-medium">
            <span className="font-bold">Pasiyent</span>
            <br className="hidden sm:block" />
            yönümlü xidmət
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroStats;