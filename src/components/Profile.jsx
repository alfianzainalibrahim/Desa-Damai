import React from "react";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import ScrollFloat from "../blocks/TextAnimations/ScrollFloat/ScrollFloat";

export default function Profile() {
  const features = [
    {
      icon: "🌾",
      title: "Pertanian Berkelanjutan & Kearifan Lokal",
      desc: "Desa Damai dikenal sebagai wilayah agraris dengan sistem pertanian yang diwariskan secara turun-temurun. Budaya gotong royong dan pengelolaan lahan yang bijaksana menjadi identitas kuat desa ini.",
    },
    {
      icon: "🏞️",
      title: "Wisata Alam & Edukasi Lingkungan",
      desc: "Terdapat potensi wisata berbasis alam seperti persawahan, embung, dan kawasan hijau yang cocok dikembangkan sebagai destinasi edukatif dan rekreatif.",
    },
    {
      icon: "💡",
      title: "Inovasi Layanan & Transformasi Digital",
      desc: "Melalui pemanfaatan teknologi, Desa Damai mulai mengadopsi sistem informasi desa dan layanan digital untuk mendukung tata kelola yang transparan, cepat, dan akurat.",
    },
    {
      icon: "🌻",
      title: "Pengembangan UMKM & Produk Lokal",
      desc: "Warga Desa Damai aktif dalam kegiatan usaha mikro seperti produksi kerajinan, kuliner tradisional, dan hasil pertanian olahan yang berdaya saing tinggi.",
    },
  ];

  return (
    <section id="profile" className="bg-green-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://placehold.co/800x600"
            alt="Desa Damai"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600">
            <SplitText text="🌱 Desa Damai, Watang Sidenreng" splitType="chars" delay={20} />
          </h2>

          <p className="text-base md:text-lg font-semibold text-gray-800">
            <SplitText text="Menapaki Jejak Damai dalam Era Digital" splitType="words" delay={25} />
          </p>

          <blockquote className="text-left text-sm md:text-base text-gray-700 leading-relaxed border-l-4 border-green-400 pl-4 italic">
            <SplitText
              text="Digitalisasi menjadi pintu masuk untuk memperkenalkan potensi Desa Damai ke dunia luar. Terletak di Kecamatan Watang Sidenreng, Kabupaten Sidenreng Rappang, desa ini menyimpan nilai-nilai kearifan lokal yang berpadu dengan semangat pembangunan. Keindahan alam, kerukunan masyarakat, dan berbagai inovasi desa menjadi kekuatan utama Desa Damai menuju desa cerdas dan mandiri."
              splitType="words"
              delay={10}
              className="text-left"
            />
          </blockquote>

          <SplitText splitType="chars" delay={10}>
            <a
              href="#learn-more"
              className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition duration-300"
            >
              Pelajari lebih lanjut →
            </a>
          </SplitText>
        </div>
      </div>

      {/* Additional Features Section */}
      <section className="mt-20 container mx-auto px-4 py-16 bg-green-200 rounded-2xl shadow-inner">
        <ScrollFloat delay={0.1}>
          <h2 className="text-3xl font-bold mb-10 text-green-700 text-left">
            <SplitText text="✨ Potensi Unggulan Desa Damai" splitType="chars" delay={15} />
          </h2>
        </ScrollFloat>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 snap-x snap-mandatory scroll-smooth min-w-full px-1">
            {features.map((feature, i) => (
              <ScrollFloat key={i} delay={0.2 + i * 0.1}>
                <div className="snap-start min-w-[280px] max-w-sm bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex-shrink-0 text-left">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mb-4 text-xl">
                    {feature.icon}
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-left">
                    <SplitText text={feature.title} splitType="words" delay={10} />
                  </h3>

                  <p className="text-gray-700 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollFloat>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
