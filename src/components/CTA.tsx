import { Calendar } from 'lucide-react';

export default function CTA() {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20✨";

  return (
    <section className="py-24 px-6 bg-[#E5B1B8]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-8">
          <Calendar className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>

        <h2
          className="text-4xl md:text-5xl text-white mb-6"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Pronta para transformar seu visual?
        </h2>

        <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Agende seu horário agora e venha viver uma experiência única de beleza e autocuidado. Cada trança é feita com carinho especial para você!
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#B18775] hover:bg-[#9f7565] text-white px-12 py-5 rounded-full text-lg font-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Quero agendar meu horário ✨
        </a>

        <p className="text-white/70 mt-8 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Resposta rápida via WhatsApp
        </p>
      </div>
    </section>
  );
}
