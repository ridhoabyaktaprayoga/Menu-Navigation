"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Struktur = () => {
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
      id="struktur"
      className="min-h-screen bg-gradient-to-bl from-black via-gray-900 to-black text-white flex flex-col"
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

      {/* Konten Struktur Organisasi */}
      <div className="flex flex-col justify-center items-center flex-grow px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider text-center mb-8">
          Struktur Organisasi <span className="text-blue-300">Kelas PPLG</span>
        </h1>

        <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg backdrop-blur-lg max-w-4xl">
          <h2 className="text-3xl text-center mb-6">Anggota Pengurus</h2>

          <ul className="space-y-4 text-lg md:text-xl leading-relaxed text-center">
            <li>
              <span className="font-bold text-blue-300">Ketua: </span> Ahmad Dhani
            </li>
            <li>
              <span className="font-bold text-blue-300">Wakil Ketua: </span> Rifaldi Ardiyansyah
            </li>
            <li>
              <span className="font-bold text-blue-300">Sekretaris 1: </span> Diva Feby
            </li>
            <li>
              <span className="font-bold text-blue-300">Sekretaris 2: </span> Raisyah
            </li>
            <li>
              <span className="font-bold text-blue-300">Bendahara 1: </span> Pipit
            </li>
            <li>
              <span className="font-bold text-blue-300">Bendahara 2: </span> Fabian
            </li>
          </ul>
        </div>

        {/* Tombol untuk kembali */}
        <div className="text-center mt-8">
          <button
            onClick={() => router.push("/")}
            className="bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-400 transition duration-300"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </section>
  );
};

export default Struktur;
