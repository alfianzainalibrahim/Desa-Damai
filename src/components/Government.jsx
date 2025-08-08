// src/components/GovernmentList.jsx
import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

// Inisialisasi Supabase client (pastikan REACT_APP_… sudah di .env)
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY
const supabase    = createClient(supabaseUrl, supabaseKey)

export default function GovernmentList() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGovernmentMembers = async () => {
      setLoading(true)
      // ambil all, urut order_number asc, batasi 4 record
      const { data, error } = await supabase
        .from('government_members')
        .select('*')
        .order('order_number', { ascending: true })
        .limit(4)

      if (error) {
        console.error('Supabase Error:', error)
        setError(error)
        setMembers([])
      } else {
        setMembers(data || [])
      }
      setLoading(false)
    }

    fetchGovernmentMembers()
  }, [])

  if (loading)
    return <p className="text-center py-16">Loading struktur pemerintahan…</p>

  if (error)
    return (
      <div className="max-w-lg mx-auto text-center text-red-600 bg-red-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">
          Gagal mengambil data struktur pemerintahan
        </h2>
        <pre className="whitespace-pre-wrap text-sm">{error.message}</pre>
      </div>
    )

  if (members.length < 4)
    return (
      <p className="text-center py-16">
        Data struktur pemerintahan belum lengkap (harus 4 slot).
      </p>
    )

  // Destructure array: [kepala, sekretaris, kaurKeu, kaurUmum]
  const [kepala, sekretaris, kaurKeu, kaurUmum] = members

  return (
    <section
      id="government"
      className="relative bg-gradient-to-b from-white via-green-50 to-green-100 py-16 px-4 md:px-8 lg:px-16"
    >
      {/* Judul Section */}
      <h2 className="text-4xl font-bold text-green-800 text-center mb-14 drop-shadow-sm">
        Struktur Pemerintahan Desa
      </h2>

      <div className="flex flex-col items-center gap-10 relative">
        {/* Kepala Desa */}
        <MemberCard member={kepala} level="top" />

        {/* Garis Penghubung */}
        <ConnectorLine height="40px" />

        {/* Sekretaris Desa */}
        <MemberCard member={sekretaris} />

        {/* Garis Penghubung */}
        <ConnectorLine height="40px" />

        {/* Kaur Keuangan & Kaur Umum */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <MemberCard member={kaurKeu} />
          <MemberCard member={kaurUmum} />
        </div>
      </div>
    </section>
  )
}

// Komponen kartu member
function MemberCard({ member, level }) {
  const ringColor = level === 'top' ? 'ring-green-600' : 'ring-green-400'

  return (
    <div className="flex flex-col items-center text-center group transition duration-300">
      <div
        className={`rounded-full ring-4 ${ringColor} shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105`}
      >
        <img
          src={member.image_url}
          alt={member.name}
          className="w-36 h-36 object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-green-800 group-hover:text-green-600">
        {member.name}
      </h3>
      <p className="text-sm text-gray-600 italic">{member.position}</p>
      <p className="text-xs text-gray-500 mt-1 max-w-xs">
        {member.bio}
      </p>
    </div>
  )
}

// Garis penghubung antar card
function ConnectorLine({ height }) {
  return (
    <div
      className="w-1 bg-green-300 rounded-full"
      style={{ height: height || '32px' }}
    />
  )
}
