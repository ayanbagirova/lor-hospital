import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import DoctorsGrid from "../components/DoctorsGrid";

type Section =
  | "tariximiz"
  | "missiya"
  | "keyfiyyet"
  | "nezaret"
  | "sertifikat"
  | "emekdasliq"
  | "merkezler"
  | "hekimler"
  | "anket";

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("hekimler");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* LEFT MENU */}
          <SideMenu
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3">

            {/* ✅ THIS LINE DOES THE MAGIC */}
            {activeSection === "hekimler" ? (
              <DoctorsGrid />
            ):<p>Məlumat tapılmadı</p>}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;