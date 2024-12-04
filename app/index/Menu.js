"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="menu-container">
      {/* Header */}
      <header className="header">
        <h1 className="title">AndroidMenu</h1>
        <button className="menu-button" onClick={toggleDropdown}>
          ☰
        </button>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="dropdown">
            <li onClick={() => navigateTo("/profil")}>Profil SMK</li>
            <li onClick={() => navigateTo("/struktur")}>Struktur Organisasi</li>
            <li onClick={() => navigateTo("/data")}>Data Siswa</li>
            <li onClick={() => navigateTo("/keluar")}>Keluar</li>
          </ul>
        )}
      </header>

      {/* Content */}
      <main className="content">
        <h2 className="subtitle">Ridho Abyakta Prayoga Pemrograman Android</h2>
        <h3 className="subheading">Tugas Modul</h3>
        <button
          className="profile-button"
          onClick={() => navigateTo("/profil")}
        >
          Profil SMK
        </button>
      </main>

      <style jsx>{`
        .menu-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #ffffff; /* Warna teks utama diubah menjadi putih */
          text-align: center;
          background-image: url('/pplg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh; /* Pastikan latar belakang memenuhi seluruh layar */
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.7); /* Transparansi untuk latar belakang header */
          color: #ffffff; /* Warna teks header diubah menjadi putih */
          padding: 1rem;
        }
        .title {
          font-size: 2rem;
          font-weight: bold;
        }
        .menu-button {
          background: none;
          border: none;
          color: #ffffff; /* Warna teks button menu */
          font-size: 1.5rem;
          cursor: pointer;
        }
        .dropdown {
          position: absolute;
          top: 60px;
          right: 20px;
          background-color: #333333;
          border: 1px solid #ffffff;
          border-radius: 5px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .dropdown li {
          padding: 10px 20px;
          cursor: pointer;
          color: #ffffff; /* Warna teks dropdown diubah menjadi putih */
          font-size: 1rem;
        }
        .dropdown li:hover {
          background-color: #444444;
        }
        .content {
          margin-top: 50px;
        }
        .subtitle {
          font-size: 1.5rem;
          color: #ffffff; /* Warna untuk subtitle diubah menjadi putih */
        }
        .subheading {
          font-size: 1.2rem;
          color: #ffffff; /* Warna untuk subheading diubah menjadi putih */
        }
        .profile-button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #333333;
          color: #ffffff; /* Warna teks button tetap putih */
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .profile-button:hover {
          background-color: #444444; /* Warna hover untuk button */
        }
      `}</style>
    </div>
  );
}
