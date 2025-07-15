// src/components/Location.jsx
import React from 'react';
import { Clock, LandPlot, MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="container mx-auto px-4 py-16">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center text-black mb-4">
        Lokasi Desa Damai
      </h2>
      <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        Temukan keindahan Desa Damai yang berlokasi di Kecamatan Watang Sidenreng, Kabupaten Sidenreng Rappang (Sidrap), Sulawesi Selatan.
      </p>

      {/* Map and Location Info */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Map */}
        <div className="w-full md:w-2/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.484545975777!2d120.38365881477858!3d-2.7548496979579267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee3b9460a2889%3A0xb9d2a6c8f1f1a7b1!2sDesa%20Damai%2C%20Watang%20Sidenreng%2C%20Sidenreng%20Rappang%20Regency%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1687062484783!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Location Information */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-green-700">Informasi Lokasi</h3>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin className="text-green-500 mt-1" size={45} />
              <div>
                <p className="text-sm font-semibold">Alamat:</p>
                <p className="text-gray-700">
                  Desa Damai, Kec. Watang Sidenreng, Kab. Sidenreng Rappang (Sidrap), Sulawesi Selatan
                </p>
              </div>
            </div>

            {/* Distance */}
            <div className="flex items-start space-x-3">
              <LandPlot className="text-green-500 mt-1" size={25} />
              <div>
                <p className="text-sm font-semibold">Jarak:</p>
                <p className="text-gray-700">± 15 km dari Pusat Kota Pangkajene Sidrap</p>
              </div>
            </div>

            {/* Travel Time */}
            <div className="flex items-start space-x-3">
              <Clock className="text-green-500 mt-1" size={25} />
              <div>
                <p className="text-sm font-semibold">Waktu Tempuh:</p>
                <p className="text-gray-700">± 27 menit dari Pusat Kota Pangkajene</p>
              </div>
            </div>

            {/* Button */}
            <div className="text-center pt-2">
              <a
                href="https://www.google.com/maps/place/Desa+Damai,+Watang+Sidenreng,+Sidenreng+Rappang+Regency,+South+Sulawesi/@-2.7548497,120.3836588,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
