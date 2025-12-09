import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Maria S.",
      location: "São Paulo, SP",
      image: "https://i.imgur.com/AJCfcXk.jpg",
      text: "Eu estava cética, mas depois de 3 dias, minhas calças fecharam sem esforço. É incrível como o inchaço sumiu.",
      rating: 5
    },
    {
      name: "Carla D.",
      location: "Rio de Janeiro, RJ",
      image: "https://i.imgur.com/TAUXKtX.jpg",
      text: "Finalmente algo que não me dá cólicas! Me sinto leve e meu intestino funciona como um relógio agora.",
      rating: 5
    },
    {
      name: "Fernanda L.",
      location: "Belo Horizonte, MG",
      image: "https://i.imgur.com/S5Aj7OJ.jpg",
      text: "A massinha pegajosa era real. Me sinto 10 anos mais jovem só de não ter aquele peso na barriga.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative max-w-xl mx-auto my-10 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div 
        className="flex transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((t, index) => (
          <div key={index} className="w-full flex-shrink-0 flex flex-col">
            {/* Imagem no topo */}
            <div className="w-full h-80 relative bg-gray-100">
              <img 
                src={t.image} 
                alt={`Resultado de ${t.name}`} 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
            </div>

            {/* Depoimento embaixo */}
            <div className="p-8 text-center flex flex-col items-center flex-grow">
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
              </div>
              
              <p className="text-gray-700 italic text-lg mb-6 leading-relaxed font-medium">
                "{t.text}"
              </p>
              
              <div className="mt-auto">
                <div className="text-lg font-bold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-emerald-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;