"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigateTo = (path) => {
    setIsDropdownOpen(false); // Menutup dropdown setelah navigasi
    router.push(path);
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-bl from-black to-gray-800 text-white flex flex-col"
    >
   
      {/* Header */}
      <header className="header flex justify-between items-center px-6 py-4 bg-black bg-opacity-40">
        <h1 className="title text-2xl font-bold">AndroidMenu</h1>
        <button className="menu-button text-2xl" onClick={toggleDropdown}>
          ☰
        </button>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="dropdown absolute right-6 top-16 bg-black bg-opacity-80 rounded-lg shadow-lg">
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigateTo("/profil")}
            >
              Profil SMK
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigateTo("/struktur")}
            >
              Struktur Organisasi
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigateTo("/data")}
            >
              Data Siswa
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigateTo("/")}
            >
              Keluar
            </li>
          </ul>
        )}
      </header>

      {/* Konten */}
      <div className="flex flex-col justify-center items-center flex-grow px-6 py-12">
        {/* Judul Section */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider text-center mb-8">
          Tentang <span className="text-blue-300">Kelas PPLG</span>
        </h1>

        {/* Konten Singkat */}
        <div className="max-w-4xl bg-white bg-opacity-10 rounded-xl p-8 shadow-lg backdrop-blur-lg">
          <p className="text-lg md:text-xl leading-relaxed text-center mb-6">
            ✨ Selamat datang di{" "}
            <span className="text-blue-300 font-bold">Kelas PPLG</span> SMK 21
            Jakarta! Kami belajar dan menciptakan teknologi masa depan melalui{" "}
            <i>Pengembangan Perangkat Lunak dan Gim</i>.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-center">
            🔧 Fokus kami meliputi{" "}
            <span className="text-blue-300 font-bold">Backend Development</span>
            , <span className="text-blue-300 font-bold">Pengembangan Gim</span>,
            dan{" "}
            <span className="text-blue-300 font-bold">Pemrograman Web</span>.{" "}
            <br /> 🚀 Bersama, mari berinovasi untuk masa depan teknologi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
 