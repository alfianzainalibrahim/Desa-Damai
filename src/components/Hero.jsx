import BlurText from "../blocks/TextAnimations/BlurText/BlurText"; // Ubah jika path-nya berbeda

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("Hero blur animation complete!");
  };

  return (
    <section
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: "url('/IMG_0942.JPG')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 text-center relative z-[2] flex flex-col justify-center items-center h-full">
        <BlurText
          text="Welcome to Desa Damai"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        />
        <p className="text-lg md:text-xl text-white">
          A peaceful and vibrant community in Sidenreng Rappang Regency.
        </p>
      </div>
    </section>
  );
}
