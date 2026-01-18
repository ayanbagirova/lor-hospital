import React from "react";
import MenuItem from "./MenuItem";

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

interface SideMenuProps {
  activeSection: Section;
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
}

const SideMenu: React.FC<SideMenuProps> = ({
  activeSection,
  setActiveSection,
}) => {
  return (
    <aside className="space-y-3">
      <MenuItem
        label="Tariximiz"
        active={activeSection === "tariximiz"}
        onClick={() => setActiveSection("tariximiz")}
      />

      <MenuItem
        label="Missiya və Məqsəd"
        active={activeSection === "missiya"}
        onClick={() => setActiveSection("missiya")}
      />

      <MenuItem
        label="Keyfiyyət siyasəti"
        active={activeSection === "keyfiyyet"}
        onClick={() => setActiveSection("keyfiyyet")}
      />

      <MenuItem
        label="Keyfiyyətə nəzarət"
        active={activeSection === "nezaret"}
        onClick={() => setActiveSection("nezaret")}
      />

      <MenuItem
        label="Sertifikatlar"
        active={activeSection === "sertifikat"}
        onClick={() => setActiveSection("sertifikat")}
      />

      <MenuItem
        label="Beynəlxalq Əməkdaşlıq"
        active={activeSection === "emekdasliq"}
        onClick={() => setActiveSection("emekdasliq")}
      />

      <MenuItem
        label="Mərkəzlərimiz"
        active={activeSection === "merkezler"}
        onClick={() => setActiveSection("merkezler")}
      />

      <MenuItem
        label="Həkimlərimiz"
        active={activeSection === "hekimler"}
        onClick={() => setActiveSection("hekimler")}
      />

      <MenuItem
        label="Məmnunluq anketi"
        active={activeSection === "anket"}
        onClick={() => setActiveSection("anket")}
      />
    </aside>
  );
};

export default SideMenu;