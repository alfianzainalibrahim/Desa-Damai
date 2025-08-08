// src/components/Footer.jsx
import { Phone, MessageCircle, GraduationCap, Instagram, ArrowUp } from 'lucide-react';
import { RiTiktokFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#060D34] text-white pt-16 relative">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 text-sm">
        
        {/* Kontak */}
        <div>
          <h3 className="text-xl font-bold mb-2">Kontak</h3>
          <div className="h-1 w-16 bg-red-600 mb-4"></div>
          <div className="flex items-center mb-3 text-gray-300">
            <Phone className="text-red-500 mr-3" size={20} />
            <span>+62 813-5487-9799</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MessageCircle className="text-red-500 mr-3" size={20} />
            <span>+62 813-5487-9799</span>
          </div>
        </div>

        {/* Dibuat Oleh */}
        <div>
          <h3 className="text-xl font-bold mb-2">Dibuat Oleh</h3>
          <div className="h-1 w-16 bg-red-600 mb-4"></div>
          <div className="flex items-start text-gray-300">
            <GraduationCap className="text-red-500 mr-3 mt-1" size={20} />
            <p className="leading-relaxed">
              Website ini dibuat oleh <br />
              <span className="font-semibold text-white">
                Andi Muhammad Alfian Zainal Ibrahim
              </span>,<br />
              Mahasiswa KKN-T 114 <br />
              Universitas Hasanuddin 2025
            </p>
          </div>
        </div>

        {/* Media Sosial */}
        <div>
          <h3 className="text-xl font-bold mb-2">KKN-T 114 Unhas</h3>
          <div className="h-1 w-16 bg-red-600 mb-4"></div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kkn114desadamai?igsh=bXM4N254cnFzbGxz&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-3 text-gray-300 hover:text-red-400 transition duration-300"
          >
            <Instagram className="text-red-500 mr-3" size={20} />
            <span>@kkn114desadamai</span>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@kkn114desadamai?_t=ZS-8xf0MPW9ZpK&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-red-400 transition duration-300"
          >
            <RiTiktokFill className="text-2xl text-red-500 mr-3" />
            <span>@kkn114desadamai</span>
          </a>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="flex justify-center flex-wrap gap-8 mt-12 mb-4">
        <img src="/footer/1.png" alt="Logo UNHAS" className="h-20" />
        <img src="/footer/2.png" alt="Logo KKN" className="h-20" />
        <img src="/footer/3.png" alt="Logo SIDRAP" className="h-20" />
        <img src="/footer/4.png" alt="Logo KKN-T 114 DESA DAMAI" className="h-20" />
        <img src="/footer/5.png" alt="Logo DAMAI BERAKSI" className="h-20" />
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © 2025 KKNT 114 Universitas Hasanuddin. All rights reserved.
      </div>

      {/* Scroll to top */}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg fixed bottom-6 right-6 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
