import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Galeria from './components/Galeria';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Depoimentos from './components/Depoimentos';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FFF6EF]">
      <Hero />
      <Diferenciais />
      <Galeria />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
