import React, { useState } from 'react';

const newsAnnouncements = [
  {
    title: "Village Festival 2023",
    date: "October 15, 2023",
    description: "Join us in celebrating the annual Village Festival with traditional performances and delicious food.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Community Cleaning Drive",
    date: "September 1, 2023",
    description: "Help keep our village clean by participating in the Community Cleaning Drive.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "New Health Clinic Opening",
    date: "August 15, 2023",
    description: "Our new health clinic is now open, offering advanced healthcare services.",
    image: "https://placehold.co/600x400",
  },
];

export default function NewsAndAnnouncements() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === newsAnnouncements.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? newsAnnouncements.length - 1 : prev - 1
    );
  };

  return (
    <section id="news" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-green-500">News & Announcements</h2>
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none transition-transform duration-300 hover:scale-110 z-10"
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none transition-transform duration-300 hover:scale-110 z-10"
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Slide Content */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newsAnnouncements.map((news, index) => (
              <div key={index} className="w-full min-w-full px-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
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
  );
}