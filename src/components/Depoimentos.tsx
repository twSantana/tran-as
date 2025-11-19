import { Star } from 'lucide-react';

const depoimentos = [
  {
    nome: 'Mariana Silva',
    texto: 'Atendimento impecável! Me senti super acolhida e o resultado ficou perfeito.',
    estrelas: 5
  },
  {
    nome: 'Júlia Santos',
    texto: 'Zero dor durante o processo e as tranças ficaram lindas. Super recomendo!',
    estrelas: 5
  },
  {
    nome: 'Beatriz Costa',
    texto: 'Trança perfeita do jeitinho que pedi. Amei cada detalhe!',
    estrelas: 5
  },
  {
    nome: 'Amanda Oliveira',
    texto: 'Profissional incrível! Cuidadosa, atenciosa e super talentosa.',
    estrelas: 5
  },
  {
    nome: 'Camila Rocha',
    texto: 'Melhor experiência! Ambiente lindo e resultado impecável.',
    estrelas: 5
  },
  {
    nome: 'Larissa Alves',
    texto: 'Minhas tranças duraram muito tempo e continuaram lindas. Voltarei sempre!',
    estrelas: 5
  }
];

export default function Depoimentos() {
  return (
    <section className="py-24 px-6 bg-[#FFF6EF]">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center text-[#B18775] mb-6"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          O que dizem sobre nós
        </h2>

        <p className="text-center text-[#B18775]/70 mb-16 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Depoimentos reais de clientes satisfeitas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E5B1B8]/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(depoimento.estrelas)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#B18775] text-[#B18775]"
                    strokeWidth={1}
                  />
                ))}
              </div>

              <p className="text-[#B18775]/80 mb-4 leading-relaxed italic" style={{ fontFamily: 'Manrope, sans-serif' }}>
                "{depoimento.texto}"
              </p>

              <p
                className="text-[#E5B1B8] text-lg"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {depoimento.nome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
