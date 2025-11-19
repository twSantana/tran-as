import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          filter: 'blur(3px) brightness(0.7)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#E5B1B8]/30 via-transparent to-[#FFF6EF]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-block mb-4">
          <Sparkles className="w-12 h-12 text-[#E5B1B8] mx-auto animate-pulse" strokeWidth={1.5} />
        </div>

        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Tranças Artísticas
          <br />
          que Celebram Você
        </h1>

        <p
          className="text-3xl md:text-4xl text-[#FFF6EF] mb-12 opacity-90"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Beleza, identidade e arte em cada trança
        </p>

        <button className="bg-[#E5B1B8] hover:bg-[#d19fa7] text-white px-12 py-5 rounded-full text-lg font-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Agendar Horário ✨
        </button>
      </div>
    </section>
  );
}
