import BlurText from "../blocks/TextAnimations/BlurText/BlurText";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("Hero blur animation complete!");
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/IMG_0942.JPG')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] flex flex-col justify-center items-center h-full px-4 text-center">
        {/* 1) Bungkus dengan div full‑width + text-center */}
        <div className="w-full mb-4 text-center">
          <BlurText
            text="Selamat Datang di Desa Damai"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            // 2) Pastikan inline-block + mx-auto agar benar-benar centered
            className="inline-block mx-auto text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-2xl"
          />
        </div>

        <p className="text-base sm:text-lg md:text-xl text-white max-w-xl px-2 leading-relaxed">
          Desa yang damai, maju, dan bersinergi untuk masa depan yang lebih baik.
        </p>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 right-6 z-[3]">
        <a href="#profile">
          <div className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition duration-300">
            <svg
              className="h-6 w-6 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
