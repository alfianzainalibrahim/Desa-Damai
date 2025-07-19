import React from "react";

const governmentData = [
  {
    name: "Suharto",
    position: "Kepala Desa",
    bio: "Experienced leader with over 10 years of service.",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Siti Aisyah",
    position: "Sekretaris Desa",
    bio: "Dedicated to administrative excellence and community welfare.",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Ahmad Rizky",
    position: "Kaur Keuangan",
    bio: "Financial expert ensuring transparency and efficiency.",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Nurul Hidayah",
    position: "Kaur Umum",
    bio: "Focused on community development and social services.",
    image: "https://placehold.co/300x300",
  },
];

export default function Government() {
  return (
    <section
      id="government"
      className="relative bg-gradient-to-b from-white via-green-50 to-green-100 py-16 px-4 md:px-8 lg:px-16"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-green-800 text-center mb-14 drop-shadow-sm">
        Struktur Pemerintahan Desa
      </h2>

      <div className="flex flex-col items-center gap-10 relative">
        {/* Kepala Desa */}
        <MemberCard member={governmentData[0]} level="top" />

        {/* Line */}
        <ConnectorLine height="40px" />

        {/* Sekretaris */}
        <MemberCard member={governmentData[1]} />

        {/* Line */}
        <ConnectorLine height="40px" />

        {/* Kaur - Dual Columns */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {governmentData.slice(2).map((member, idx) => (
            <MemberCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member, level }) {
  const ringColor =
    level === "top" ? "ring-green-600" : "ring-green-400";

  return (
    <div className="flex flex-col items-center text-center group transition duration-300">
      <div
        className={`rounded-full ring-4 ${ringColor} shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105`}
      >
        <img
          src={member.image}
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
  );
}

function ConnectorLine({ height }) {
  return (
    <div
      className="w-1 bg-green-300 rounded-full"
      style={{ height: height || "32px" }}
    ></div>
  );
}
