import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FFF6EF] py-16 px-6 border-t border-[#D7D2CF]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3
              className="text-3xl text-[#E5B1B8] mb-4"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Tranças Artísticas
            </h3>
            <p className="text-[#B18775]/70 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Beleza, identidade e arte em cada trança. Transformando cabelos em obras de arte desde 2020.
            </p>
          </div>

          <div>
            <h4 className="text-lg text-[#B18775] mb-4 font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Horário de Atendimento
            </h4>
            <div className="space-y-2 text-[#B18775]/70" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p>Segunda a Sexta: 9h às 19h</p>
                  <p>Sábado: 9h às 17h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg text-[#B18775] mb-4 font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Localização
            </h4>
            <div className="flex items-start gap-2 text-[#B18775]/70 mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <p>Rua das Flores, 123<br />Bairro Jardim<br />São Paulo - SP</p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#E5B1B8]/10 flex items-center justify-center hover:bg-[#E5B1B8]/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#E5B1B8]" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#E5B1B8]/10 flex items-center justify-center hover:bg-[#E5B1B8]/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#E5B1B8]" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#D7D2CF]/30 text-center">
          <p className="text-[#B18775]/60 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
            © 2024 Tranças Artísticas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
