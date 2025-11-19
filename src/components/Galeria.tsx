const images = [
  'https://images.pexels.com/photos/3992860/pexels-photo-3992860.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3992865/pexels-photo-3992865.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3992871/pexels-photo-3992871.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3065218/pexels-photo-3065218.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3992868/pexels-photo-3992868.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3992869/pexels-photo-3992869.jpeg?auto=compress&cs=tinysrgb&w=600'
];

export default function Galeria() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#FFF6EF] to-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center text-[#B18775] mb-6"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Nossos Trabalhos
        </h2>

        <p className="text-center text-[#B18775]/70 mb-16 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Arte e beleza em cada criação
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={image}
                alt={`Trabalho ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
