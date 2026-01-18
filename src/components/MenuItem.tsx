import arrow from "../assets/images/Vector-5.png";
import back from "../assets/images/Rectangle 23405.png";
import arrow2 from "../assets/images/Vector-6.png";
import back2 from "../assets/images/Rectangle 23405-2.png";

interface MenuItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  active,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full bg-[#F7FAFF] flex items-center justify-between px-5 py-4 rounded-lg transition group"
    >
      {/* LABEL */}
      <span
        className={`transition font-medium ${
          active
            ? "font-semibold text-black"
            : "text-gray-700 group-hover:font-semibold group-hover:text-black"
        }`}
      >
        {label}
      </span>

      {/* BACK IMAGE */}
      <img
        src={active ? back2 : back}
        className={`absolute top-3 left-58 w-12 transition-opacity ${
          active ? "opacity-100" : "opacity-100 group-hover:opacity-0"
        }`}
      />
      <img
        src={back2}
        className={`absolute top-3 left-58 w-12 transition-opacity ${
          active ? "opacity-0" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* ARROW */}
      <img
        src={active ? arrow2 : arrow}
        className={`w-3 z-50 transition-opacity ${
          active ? "opacity-100" : "opacity-100 group-hover:opacity-0"
        }`}
      />
      <img
        src={arrow2}
        className={`w-3 z-50 absolute right-5 transition-opacity ${
          active ? "opacity-0" : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default MenuItem;