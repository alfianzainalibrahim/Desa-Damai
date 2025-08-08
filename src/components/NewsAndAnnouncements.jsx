// src/components/NewsAndAnnouncements.jsx
import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

// 1) Baca URL & KEY dari .env
const SUPA_URL = process.env.REACT_APP_SUPABASE_URL
const SUPA_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY

// Debug cepat, pastikan tidak undefined
if (!SUPA_URL || !SUPA_KEY) {
  console.error('❌ Supabase URL or Key is missing!')
}

const supabase = createClient(SUPA_URL, SUPA_KEY)

export default function NewsAndAnnouncements() {
  const [news, setNews] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 2) Ambil data langsung dari Supabase
    supabase
      .from('news')
      .select('id, title, description, date, image_url')
      .order('date', { ascending: true }) // ascending = tanggal terdekat dulu
      .then(({ data, error }) => {
        if (error) {
          console.error('Supabase fetch error:', error)
        } else {
          setNews(data)
        }
        setLoading(false)
      })
  }, [])

  // tombol navigasi
  const nextSlide = () =>
    setCurrentSlide(prev => (prev === news.length - 1 ? 0 : prev + 1))
  const prevSlide = () =>
    setCurrentSlide(prev => (prev === 0 ? news.length - 1 : prev - 1))

  if (loading) {
    return <p className="text-center py-16">Loading news…</p>
  }
  if (!news.length) {
    return <p className="text-center py-16">No news available.</p>
  }

  return (
    <section id="news" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-green-800 drop-shadow-sm">
        News & Announcements
      </h2>

      <div className="relative">
        {/* Tombol ← */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white/80 text-gray-600 hover:text-black hover:bg-white shadow rounded-full w-10 h-10 flex items-center justify-center transition"
          aria-label="Previous Slide"
        >
          ←
        </button>

        {/* Tombol → */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white/80 text-gray-600 hover:text-black hover:bg-white shadow rounded-full w-10 h-10 flex items-center justify-center transition"
          aria-label="Next Slide"
        >
          →
        </button>

        {/* Slide container */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {news.map((item, i) => (
              <div key={item.id} className="w-full min-w-full px-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={item.image_url || '/default-news.png'}
                    alt={item.title}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {new Date(item.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
