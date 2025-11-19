export default function Sobre() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2
              className="text-4xl md:text-5xl text-[#B18775] mb-6"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Sobre mim
            </h2>

            <p
              className="text-3xl text-[#E5B1B8] mb-8 leading-relaxed"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              "Celebrando beleza, identidade e arte através das tranças."
            </p>

            <div className="space-y-4 text-[#B18775]/80" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <p className="leading-relaxed">
                Sou apaixonada pela arte de trançar e pela transformação que cada penteado traz para a vida das minhas clientes. Com anos de experiência e dedicação, aprendi que tranças são muito mais que um penteado – são expressão de identidade, cultura e beleza única.
              </p>

              <p className="leading-relaxed">
                Cada atendimento é pensado com carinho para que você se sinta especial, acolhida e valorizada. Uso apenas materiais de alta qualidade e técnicas que garantem conforto durante todo o processo.
              </p>

              <p className="leading-relaxed">
                Meu objetivo é criar não apenas tranças perfeitas, mas momentos de autocuidado e conexão. Aqui, você é protagonista da sua própria história de beleza.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E5B1B8]/20 rounded-full blur-3xl" />
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profissional"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
