import React from "react";
import ScrollFloat from "../blocks/TextAnimations/ScrollFloat/ScrollFloat";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const facilities = [
  {
    title: "Pelayanan Publik",
    images: [
      "/sarana/DSC00411.JPG",
      "/sarana/DSC00580.JPG",
      "/sarana/DSC00404.JPG"
    ],
  },
  {
    title: "Fasilitas Umum",
    image: "/sarana/DSC09791.JPG",
  },
  {
    title: "Destinasi Menarik",
    image: "/sarana/DSC00176.JPG",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="scroll-mt-24 bg-green-50 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollFloat delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
            <SplitText text="🏛️ Sarana dan Prasarana" splitType="chars" delay={15} />
          </h2>
        </ScrollFloat>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} delay={0.2 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityCard({ facility, delay }) {
  const isSlideshow = Array.isArray(facility.images);

  return (
    <ScrollFloat delay={delay}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
        {isSlideshow ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="rounded-t-2xl"
          >
            {facility.images.map((imgSrc, i) => (
              <SwiperSlide key={i}>
                <img
                  src={imgSrc}
                  alt={`${facility.title} ${i + 1}`}
                  className="w-full h-60 object-cover rounded-t-2xl transition-all duration-500 ease-in-out"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src={facility.image}
            alt={facility.title}
            className="rounded-t-2xl w-full h-60 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {facility.title}
          </h3>
        </div>
      </div>
    </ScrollFloat>
  );
}