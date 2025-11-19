import { Heart, Palette, Shield, Sparkles } from 'lucide-react';

const diferenciais = [
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Cuidado e atenção em cada detalhe do seu atendimento'
  },
  {
    icon: Palette,
    title: 'Tranças Artísticas',
    description: 'Estilos únicos e coloridos criados especialmente para você'
  },
  {
    icon: Shield,
    title: 'Alta Qualidade',
    description: 'Materiais premium que garantem durabilidade e beleza'
  },
  {
    icon: Sparkles,
    title: 'Ambiente Acolhedor',
    description: 'Vibe beauty e espaço pensado no seu conforto'
  }
];

export default function Diferenciais() {
  return (
    <section className="py-24 px-6 bg-[#FFF6EF]">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center text-[#B18775] mb-6"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Por que escolher a gente?
        </h2>

        <p className="text-center text-[#B18775]/70 mb-16 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Experiência completa de beleza e autocuidado
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center border border-[#D7D2CF]/30"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E5B1B8]/10 mb-6">
                <item.icon className="w-8 h-8 text-[#E5B1B8]" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-light text-[#B18775] mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {item.title}
              </h3>

              <p className="text-[#B18775]/60 text-sm leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
