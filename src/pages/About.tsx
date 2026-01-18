// import React, { useState } from "react";
// import MenuItem from "../components/MenuItem";
// import DoctorsGrid from "../components/DoctorsGrid";
// type Section =
//   | "tariximiz"
//   | "missiya"
//   | "keyfiyyet"
//   | "nezaret"
//   | "sertifikat"
//   | "emekdasliq"
//   | "merkezler"
//   | "hekimler"
//   | "anket";

// const About: React.FC = () => {
//   const [activeSection, setActiveSection] = useState<Section>("tariximiz");

//   return (
//     <section className="w-full bg-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
//           {/* LEFT MENU */}
//           <aside className="space-y-3">
//             <MenuItem
//               label="Tariximiz"
//               active={activeSection === "tariximiz"}
//               onClick={() => setActiveSection("tariximiz")}
//             />
//             <MenuItem
//               label="Missiya və Məqsəd"
//               active={activeSection === "missiya"}
//               onClick={() => setActiveSection("missiya")}
//             />
//             <MenuItem
//               label="Keyfiyyət siyasəti"
//               active={activeSection === "keyfiyyet"}
//               onClick={() => setActiveSection("keyfiyyet")}
//             />
//             <MenuItem
//               label="Keyfiyyətə nəzarət"
//               active={activeSection === "nezaret"}
//               onClick={() => setActiveSection("nezaret")}
//             />
//             <MenuItem
//               label="Sertifikatlar"
//               active={activeSection === "sertifikat"}
//               onClick={() => setActiveSection("sertifikat")}
//             />
//             <MenuItem
//               label="Beynəlxalq Əməkdaşlıq"
//               active={activeSection === "emekdasliq"}
//               onClick={() => setActiveSection("emekdasliq")}
//             />
//             <MenuItem
//               label="Mərkəzlərimiz"
//               active={activeSection === "merkezler"}
//               onClick={() => setActiveSection("merkezler")}
//             />
//             <MenuItem
//               label="Həkimlərimiz"
//               active={activeSection === "hekimler"}
//               onClick={() => setActiveSection("hekimler")}
//             />
//             <MenuItem
//               label="Məmnunluq anketi"
//               active={activeSection === "anket"}
//               onClick={() => setActiveSection("anket")}
//             />
//           </aside>

//           {/* RIGHT CONTENT */}
//           <div className="lg:col-span-3">
//            <DoctorsGrid/>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
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