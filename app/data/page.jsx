"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi

const SiswaPage = () => {
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState([]);
  const [siswaList, setSiswaList] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter(); // Inisialisasi router

  const handleHobbyChange = (event) => {
    const value = event.target.value;
    setHobby((prevHobby) =>
      prevHobby.includes(value)
        ? prevHobby.filter((h) => h !== value)
        : [...prevHobby, value]
    );
  };

  const handleAddSiswa = () => {
    if (nama && gender) {
      const newSiswa = {
        id: nextId,
        nama,
        gender,
        hobby,
      };
      setSiswaList((prevList) => [...prevList, newSiswa]);
      setNextId(nextId + 1);
      setNama("");
      setGender("");
      setHobby([]);
    } else {
      alert("Nama dan Gender harus diisi!");
    }
  };

  const handleDeleteSiswa = (id) => {
    setSiswaList(siswaList.filter((siswa) => siswa.id !== id));
  };

  const handleLogout = () => {
    // Tambahkan logika untuk logout (misalnya hapus token, session, dll)
    // Misalnya jika menggunakan localStorage untuk menyimpan data login:
    // localStorage.removeItem('user');
    // Kemudian navigasi ke halaman utama (dashboard)
    router.push('/'); // Arahkan ke halaman utama/dashboard
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigateTo = (path) => {
    setIsDropdownOpen(false); // Menutup dropdown setelah navigasi
    router.push(path);
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-white p-6">
      {/* Header sebagai Navbar */}
      <header className="header flex justify-between items-center px-6 py-4 bg-black bg-opacity-90">
        <h1 className="title text-2xl font-bold">AndroidMenu</h1>
        <button className="menu-button text-2xl" onClick={toggleDropdown}>
          ☰
        </button>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="dropdown absolute right-6 top-16 bg-black bg-opacity-90 rounded-lg shadow-lg">
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

      <h1 className="text-4xl font-extrabold mb-8 text-center">Data Siswa</h1>

      <div className="max-w-xl mx-auto bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Tambah Siswa</h2>
        <div className="mb-4">
          <label className="block mb-2">Nama:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-md"
            placeholder="Masukkan nama siswa"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Gender:</label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="laki-laki"
                name="gender"
                value="Laki-laki"
                checked={gender === "Laki-laki"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="laki-laki">Laki-laki</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="perempuan"
                name="gender"
                value="Perempuan"
                checked={gender === "Perempuan"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="perempuan">Perempuan</label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Hobby:</label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hobby1"
                value="Baca Buku"
                onChange={handleHobbyChange}
                checked={hobby.includes("Baca Buku")}
                className="mr-2"
              />
              <label htmlFor="hobby1">Baca Buku</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hobby2"
                value="Olahraga"
                onChange={handleHobbyChange}
                checked={hobby.includes("Olahraga")}
                className="mr-2"
              />
              <label htmlFor="hobby2">Olahraga</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hobby3"
                value="Gaming"
                onChange={handleHobbyChange}
                checked={hobby.includes("Gaming")}
                className="mr-2"
              />
              <label htmlFor="hobby3">Gaming</label>
            </div>
          </div>
        </div>

        <button
          onClick={handleAddSiswa}
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-400 transition duration-300"
        >
          Tambah Siswa
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Daftar Siswa</h2>
        <div className="space-y-4">
          {siswaList.map((siswa) => (
            <div
              key={siswa.id}
              className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="font-bold">{siswa.nama}</p>
                <p>Gender: {siswa.gender}</p>
                <p>Hobby: {siswa.hobby.join(", ")}</p>
              </div>
              <button
                onClick={() => handleDeleteSiswa(siswa.id)}
                className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-400 transition duration-300"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiswaPage;
