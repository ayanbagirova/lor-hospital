import lor from "../assets/images/Mask group-5.png";


const WhyLor: React.FC = () => {
  
    return (
        <section className="w-full bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-5xl font-semibold text-gray-900 mb-6">
                            Nəyə görə Lor Hospital?
                        </h2>

                        <p className="text-[#0F0F0F] text-lg leading-relaxed mb-6">
                            Lor Hospital – 2013-cü ildən fəaliyyət göstərən Azərbaycanın eləcə də Qafqazın ilk və yeganə ixtisaslaşmış Qulaq Burun Boğaz və Baş-Boyun Mərkəzidir. Azərbaycanda ilk Qulaq Burun Boğaz və Baş-Boyun Mərkəzi olmağımızın vermiş olduğu məsuliyyət ilə poliklinika, laboratoriya,funksional diaqnostika müayinələrindən sonra pasiyentlərimizə daha dəqiq diaqnoz qoyularaq lazımi müalicələr aparılır. Qüsursuz xidmət anlayışını əsas tutaraq Avropa standartlarına uyğun müasir müalicə və diaqnostika üsulları ilə xidmətlərimizin yüksək keyfiyyətini təmin edirik
                        </p>



                        <p className="text-[#0F0F0F] text-lg leading-relaxed">
                            Endoskopik, mikroskopik və lazer texnologiyalarının istifadəsi dəqiq
                            diaqnostikaya, hətta ən çətin əməliyyatlar zamanı minimal travmaya,
                            bərpa dövrünü qısaltmağa və qısa müddətdə normal gündəlik həyata
                            qayıtmağa imkan yaradır.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={lor}
                                alt="Lor Hospital"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyLor;