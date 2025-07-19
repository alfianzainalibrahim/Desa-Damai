import React from "react";
import { Building, Briefcase, Smartphone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // import WhatsApp icon


export default function GovernmentServices() {
  const services = [
    {
      name: "Kabupaten Government",
      description: "Website resmi pemerintah kabupaten.",
      icon: <Building className="w-6 h-6 text-green-600" />,
      url: "https://sidrapkab.go.id/",
    },
    {
      name: "DPMPTSP",
      description: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu.",
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
      url: "https://dpmptsp.sidrapkab.go.id/",
    },
    {
      name: "WhatsApp Desa Damai",
      description: "Hubungi kami melalui WhatsApp.",
      icon: <FaWhatsapp className="w-6 h-6 text-white" />,
      url: "https://wa.me/1234567890",
      whatsapp: true,
    },
  ];

  return (
    <section
      id="government-services"
      className="relative bg-gradient-to-b from-green-100 via-white to-green-50 py-16 px-4 md:px-8 lg:px-16"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-green-800 drop-shadow-sm">
          Layanan Pemerintah Terkait
        </h2>
        <p className="text-gray-600 mt-2">
          Akses cepat ke layanan pemerintah terkait Desa Damai
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

// ServiceCard Component
function ServiceCard({ service }) {
  const { name, description, icon, url, whatsapp } = service;

  const cardClass = whatsapp
    ? "bg-green-600 text-white hover:bg-green-700"
    : "bg-white border border-green-300 hover:border-green-400 shadow-md hover:shadow-lg";

  const iconContainerClass = whatsapp
    ? "bg-green-700"
    : "bg-green-100";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center p-6 rounded-lg transform transition duration-300 hover:scale-[1.03] ${cardClass}`}
    >
      <div className={`rounded-full p-3 mb-4 ${iconContainerClass}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className={`text-sm text-center ${whatsapp ? 'text-white/90' : 'text-gray-600'}`}>
        {description}
      </p>
    </a>
  );
}
