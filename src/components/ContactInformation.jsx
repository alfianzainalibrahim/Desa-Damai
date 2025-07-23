import React from 'react';

export default function ContactInformation() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-green-500">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Informasi Lokasi */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-green-600">Informasi Lokasi</h3>
          <p className="text-gray-700 mb-2"><strong>Alamat:</strong> Desa Damai, Watang Sidenreng, Sidenreng Rappang Regency</p>
          <p className="text-gray-700 mb-2"><strong>Jarak:</strong> ± 15 km dari Pusat Kota Pangkajene</p>
          <p className="text-gray-700 mb-4"><strong>Waktu Tempuh:</strong> ± 27 menit dari Pusat Kota Pangkajene</p>
          <a
            href="https://www.google.com/maps/place/Desa+Damai,+Watang+Sidenreng,+Sidenreng+Rappang+Regency,+South+Sulawesi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
          >
            Buka di Google Maps
          </a>
        </div>

        {/* Kontak */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-green-600">Kontak</h3>
          <p className="text-gray-700 mb-2"><strong>Telepon:</strong> +62 812 3456 7890</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> desadami@gmail.com</p>
          <p className="text-gray-700 mb-2"><strong>Instagram:</strong> <a href="https://instagram.com/kkndesadamai2025" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">@kkndesadamai2025</a></p>
          <p className="text-gray-700"><strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61556838180896" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">Pemerintah Desadamai</a></p>
        </div>

        {/* Jam Layanan */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-green-600">Jam Layanan</h3>
          <p className="text-gray-700 mb-2"><strong>Senin - Jumat:</strong> 08.00 - 16.00 WITA</p>
          <p className="text-gray-700"><strong>Pelayanan:</strong> Administrasi, Surat Menyurat, dan Pengaduan Warga</p>
        </div>
      </div>
    </section>
  );
}
