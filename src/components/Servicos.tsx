const servicos = [
  {
    titulo: 'Box Braids',
    descricao: 'Tranças boxeadas clássicas e elegantes, perfeitas para qualquer ocasião',
    preco: 'A partir de R$ 200'
  },
  {
    titulo: 'Knotless Braids',
    descricao: 'Tranças sem nó, mais leves e naturais, com acabamento impecável',
    preco: 'A partir de R$ 250'
  },
  {
    titulo: 'Twist',
    descricao: 'Torções delicadas que combinam estilo e praticidade',
    preco: 'A partir de R$ 180'
  },
  {
    titulo: 'Feed-in Braids',
    descricao: 'Técnica gradual para tranças com aspecto natural e sem tensão',
    preco: 'A partir de R$ 220'
  },
  {
    titulo: 'Tranças Coloridas',
    descricao: 'Estilos personalizados com cores vibrantes e criativas',
    preco: 'A partir de R$ 280'
  },
  {
    titulo: 'Manutenção',
    descricao: 'Cuidados para manter suas tranças sempre perfeitas',
    preco: 'A partir de R$ 100'
  }
];

export default function Servicos() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#FFF6EF]">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center text-[#B18775] mb-6"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Serviços
        </h2>

        <p className="text-center text-[#B18775]/70 mb-16 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Escolha o estilo perfeito para você
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#D7D2CF]/30"
            >
              <h3
                className="text-2xl text-[#E5B1B8] mb-4"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {servico.titulo}
              </h3>

              <p className="text-[#B18775]/70 mb-4 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {servico.descricao}
              </p>

              <p className="text-[#B18775] font-light text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {servico.preco}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
