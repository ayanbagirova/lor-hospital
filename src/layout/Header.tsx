import logo from "../assets/images/Logo.png";
import search from "../assets/images/Icon-2.png";
import facebook from "../assets/images/Vector.png";
import insta from "../assets/images/Vector-2.png";
import profile from "../assets/images/Group 37.png";
import lang from "../assets/images/Language icon.png";
import phone from "../assets/images/Vector-3.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


const Header = () => {
    const location = useLocation();
    const [currentLang, setCurrentLang] = useState("AZ");
    const navigate = useNavigate();
    return (
        <header className="w-full">
            {/* TOP BAR */}
            <div className="bg-gray-200 text-sm ">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <img src={facebook} className="" />
                        <img src={insta} />
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-1 cursor-pointer">
                            <img src={profile} />
                            <span>Daxil olun</span>
                        </div>

                        {/* LANGUAGE DROPDOWN */}
                        {/* LANGUAGE SELECT */}
                        <div className="relative">
                            {/* HOVER AREA (IMPORTANT) */}
                            <div className="group inline-block">
                                {/* BUTTON */}
                                <div className="flex items-center gap-1 cursor-pointer text-gray-600 select-none">
                                    <img src={lang} />
                                    <span className="font-medium">{currentLang}</span>
                                    <span className="text-xs">▼</span>
                                </div>

                                {/* DROPDOWN */}
                                <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50">
                                    <div className="bg-white shadow-lg rounded-md w-24">
                                        <ul className="text-sm text-gray-600">
                                            {["AZ", "EN", "RU"].map((lng) => (
                                                <li
                                                    key={lng}
                                                    onClick={() => setCurrentLang(lng)}
                                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-sky-500 ${currentLang === lng ? "text-sky-500 font-semibold" : ""
                                                        }`}
                                                >
                                                    {lng}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN HEADER */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 cursor-pointer">
                    {/* LOGO */}
                    <div  onClick={() => navigate(`/`)} className="flex items-center gap-2">
                        
                        <img src={logo} className="w-40" />
                    </div>


                    <nav className="hidden lg:flex gap-8 text-gray-500 text-[21px] font-medium">
                        <div className="relative group ">
                            <Link
                                to="/about"
                                className={`font-medium text-[21px] transition ${location.pathname === "/about"
                                    ? "text-sky-500"
                                    : "text-gray-500 hover:text-black text-[21px]"
                                    }`}
                            >
                                Haqqımızda
                            </Link>

                            {/* FIRST DROPDOWN */}
                            <div className="absolute top-full left-0 hidden group-hover:block bg-[#FFFFFFE3] bg-blur shadow-lg rounded-md w-64 py-3 z-50">
                                <ul className="flex flex-col text-gray-600 text-sm">
                                    <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Tariximiz</li>
                                    <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Missiya və məqsəd</li>
                                    <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Keyfiyyət siyasəti</li>
                                    <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Keyfiyyətə nəzarət</li>
                                    <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Sertifikatlar</li>
                                    <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Beynəlxalq Əməkdaşlıq</li>

                                    {/* MERKEZLERIMIZ (NESTED DROPDOWN) */}
                                    <li className="relative group/inner px-4 py-2 hover:text-sky-500 cursor-pointer flex justify-between items-center">
                                        <span>Mərkəzlərimiz</span>


                                        {/* SECOND DROPDOWN */}
                                        <div className="absolute top-0 left-full hidden group-hover/inner:block bg-[#FFFFFFE3] bg-blur shadow-lg rounded-md w-72 py-3">
                                            <ul className="flex flex-col text-gray-600 text-sm">
                                                <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Başgicəllənmə Mərkəzi</li>
                                                <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Estetik və Plastik Cərrahiyyə</li>
                                                <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Səs Mərkəzi</li>
                                                <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Eşitmə Mərkəzi</li>
                                                <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Üz və Çənə Cərrahiyyə</li>
                                                <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Astma və Ağciyər</li>
                                                <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Yuxu Mərkəzi</li>
                                                <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Koxlear implantasiya</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Həkimlərimiz</li>
                                    <li className="px-4 py-2 hover:text-sky-500 cursor-pointer">Məmnunluq anketi</li>
                                </ul>
                            </div>
                        </div>
                        <Link to="#" className="hover:text-black text-[21px]">Xidmətlər</Link>
                        <a href="#" className="hover:text-black text-[21px]">Referans Eşitmə</a>
                        <a href="#" className="hover:text-black text-[21px]">Xəbərlər</a>
                        <a href="#" className="hover:text-black text-[21px]">Əlaqə</a>
                    </nav>

                    {/* RIGHT ACTIONS */}
                    <div className="flex justify-between items-center gap-4">
                        {/* Search */}
                        <div className="relative hidden md:block">
                            <img src={search} className="absolute top-3 left-2" />
                            <input
                                type="text"
                                placeholder="Axtarış"
                                className="w-27 bg-white border border-gray-300 rounded-full px-2 py-2 pl-8 text-sm focus:outline-none"
                            />

                        </div>

                        {/* Phone */}
                        <button className="w-27 flex items-center gap-2 bg-sky-500 text-white text-lg px-2 py-2 pr-5 rounded-full font-semibold hover:bg-sky-400 transition">
                            <img src={phone} />
                            *0111
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
