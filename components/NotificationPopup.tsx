import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const NotificationPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', location: '', time: '' });

  const names = [
    "Ana P.", "Mariana S.", "Carla D.", "Fernanda L.", "Juliana M.", 
    "Patrícia R.", "Beatriz C.", "Camila O.", "Larissa T.", "Roberta B."
  ];
  
  const locations = [
    "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", 
    "Curitiba, PR", "Porto Alegre, RS", "Salvador, BA", "Recife, PE", 
    "Brasília, DF", "Fortaleza, CE", "Goiânia, GO"
  ];

  useEffect(() => {
    // Primeira aparição após 5 segundos
    const initialTimer = setTimeout(() => {
      showNotification();
    }, 5000);

    const intervalTimer = setInterval(() => {
      showNotification();
    }, 20000); // Repete a cada 20 segundos

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const showNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomTime = Math.floor(Math.random() * 5) + 1; // 1 a 5 minutos atrás

    setData({
      name: randomName,
      location: randomLocation,
      time: `${randomTime} min atrás`
    });

    setVisible(true);

    // Esconde após 5 segundos
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-20 md:top-4 right-2 md:right-4 z-[60] animate-fade-in-down bg-white rounded shadow-lg border border-emerald-100 p-2 flex items-center gap-2 max-w-[200px] transition-all duration-500">
      <div className="bg-emerald-100 p-1 rounded-full flex-shrink-0">
        <CheckCircle className="w-3 h-3 text-emerald-600" />
      </div>
      <div className="flex flex-col">
        <p className="text-[10px] font-bold text-gray-800 leading-tight">
          {data.name} - {data.location}
        </p>
        <p className="text-[9px] text-gray-600 leading-tight">
          Comprou <span className="text-emerald-600 font-semibold">Detox do Despertar</span>
        </p>
        <p className="text-[8px] text-gray-400 mt-0.5 leading-none">
          {data.time}
        </p>
      </div>
    </div>
  );
};

export default NotificationPopup;