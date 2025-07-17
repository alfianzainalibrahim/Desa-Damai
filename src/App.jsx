import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Location from './components/Location';
import Government from './components/Government';
import Facilities from './components/Facilities';
import Footer from './components/Footer';

const App = () => {

  const newsAnnouncements = [
    { title: "Village Festival 2023", date: "October 15, 2023", description: "Join us in celebrating the annual Village Festival with traditional performances and delicious food.", image: "https://placehold.co/600x400 " },
    { title: "Community Cleaning Drive", date: "September 1, 2023", description: "Help keep our village clean by participating in the Community Cleaning Drive.", image: "https://placehold.co/600x400 " },
    { title: "New Health Clinic Opening", date: "August 15, 2023", description: "Our new health clinic is now open, offering advanced healthcare services.", image: "https://placehold.co/600x400 " },
  ];

  const servicesForResidents = [
    { title: "Health Services", description: "Access to healthcare facilities and regular health check-ups.", icon: <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2zm10-10V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2h20V10z"></path></svg> },
    { title: "Education Support", description: "Scholarships and educational resources for children.", icon: <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5"></path></svg> },
    { title: "Social Services", description: "Assistance for the elderly, disabled, and underprivileged.", icon: <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3H6a3 3 0 00-3 3v2h5m6 0v-8a3 3 0 01-3-3H6a3 3 0 01-3 3v8m6 0h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2h2m7-10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v5h12z"></path></svg> },
  ];

  const contactInformation = {
    address: "Desa Damai, Watang Sidenreng, Sidenreng Rappang Regency",
    phone: "+62 812 3456 7890",
    email: "desadami@gmail.com",
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === newsAnnouncements.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? newsAnnouncements.length - 1 : prev - 1));
  };

  return (
    <div className="bg-green-100 text-gray-900 min-h-screen">

{/* Navbar */}
<Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Village Profile */}
      <Profile />
      
      {/* Location Section */}
      <Location />

      {/* Facilities Section */}
       <Facilities />

      {/* Local Government Structure */}
      <Government />

      {/* News & Announcements */}
      <section id="news" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-green-500">News & Announcements</h2>
        <div className="relative">
          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none transition-transform duration-300 hover:scale-110">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none transition-transform duration-300 hover:scale-110">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          <div className="overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {newsAnnouncements.map((news, index) => (
                <div key={index} className="w-full min-w-full px-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <img src={news.image} alt={news.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                    <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                    <p className="text-gray-700 mb-2">{news.date}</p>
                    <p className="text-gray-700">{news.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Information */}
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
            <p className="text-gray-700"><strong>Facebook:</strong> <a href="#" className="text-green-600 hover:underline">Desa Damai Official</a></p>
          </div>

          {/* Jam Layanan */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-green-600">Jam Layanan</h3>
            <p className="text-gray-700 mb-2"><strong>Senin - Jumat:</strong> 08.00 - 16.00 WITA</p>
            <p className="text-gray-700 mb-2"><strong>Sabtu:</strong> 08.00 - 12.00 WITA</p>
            <p className="text-gray-700"><strong>Pelayanan:</strong> Administrasi, Surat Keterangan, dan Pengaduan Warga</p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;