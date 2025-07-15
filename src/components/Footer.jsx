// src/components/Footer.jsx
import { Phone, MessageCircle, MapPin, Instagram, ArrowUp } from 'lucide-react';
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
            <span>08xxxxxxxxxx</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MessageCircle className="text-red-500 mr-3" size={20} />
            <span>08xxxxxxxxxx</span>
          </div>
        </div>

        {/* Alamat */}
        <div>
          <h3 className="text-xl font-bold mb-2">Alamat</h3>
          <div className="h-1 w-16 bg-red-600 mb-4"></div>
          <div className="flex items-start text-gray-300">
            <MapPin className="text-red-500 mr-3 mt-1" size={20} />
            <p className="leading-relaxed">
              Desa Damai, Kec. Watang<br />
              Sidenreng, Kab. Sidenreng<br />
              Rappang, Sulawesi Selatan
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
            href="https://www.tiktok.com/@kkn114desadamai?_t=ZS-8xf0MPW9ZpK&_r=1&fbclid=PAQ0xDSwLiE2lleHRuA2FlbQIxMQABp-iBdg5Zyd1fq4DARv7pGCfxzwIzS0Gz93RutKmhdpQNCDCXehtEpl3Tcf2a_aem_q0-gpFmsGNuGo1x0D6mMlQ"
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
        <img src="/Official_Logo_of_Sidenreng_Rappang_Regency.png" alt="Logo Sidrap" className="h-20" />
        <img src="/Logo-Resmi-Unhas.png" alt="Logo Unhas" className="h-20" />
        <img src="/Desa Damai New Logo Rmve BG.png" alt="Logo Desa Damai" className="h-20" />
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
