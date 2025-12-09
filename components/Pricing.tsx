import React from 'react';
import { Check, Gift } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  const bonuses = [
    { title: "Guia do Ventre Quente (O Hack Noturno)", value: "R$ 47,00" },
    { title: "Lista de Compras Anti-Inchaço", value: "R$ 27,00" },
    { title: "Protocolo de SOS Digestivo em 15 Minutos", value: "R$ 35,00" },
    { title: "Diário de Rastreamento de 72 Horas", value: "R$ 19,00" },
    { title: "Acesso à Comunidade VIP", value: "R$ 97,00" },
  ];

  const handleBuy = () => {
    window.location.href = "https://pay.kirvano.com/c8bb791a-5dcb-4066-97a3-87257561abe2";
  };

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-6">Seu Investimento Para Parecer e Se Sentir Como Você Merece</h2>
        
        <img 
          src="https://go.imfitgirl.com/hosted/images/e8/836188133948c2b6e04346db29d3b1/scientist-extractor.jpg" 
          alt="Extração Científica" 
          className="w-32 h-32 rounded-full mx-auto my-6 border-4 border-white shadow-lg object-cover" 
        />
        
        <div className="prose prose-lg mx-auto text-emerald-800 mb-8">
          <p>Talvez você esteja se perguntando quanto custa essa solução transformadora.</p>
          <p>Quero ser completamente transparente com você:</p>
          <p>Nós usamos ingredientes da mais alta qualidade, métodos de extração precisos e só conseguimos produzir quantidades limitadas para garantir a potência de cada lote.</p>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 my-6 inline-block">
            <p className="text-xl font-semibold flex flex-col items-center justify-center gap-1">
              <span>O preço normal da receita especial do Detox do Despertar Digestivo é de</span>
              <span className="text-red-600 text-5xl font-extrabold mt-2">R$ 97,00</span> 
              <span className="text-gray-500 text-sm">reais</span>
            </p>
          </div>
          
          <p>Esse preço é mais do que justo, especialmente considerando os resultados transformadores:</p>
            
          <ul className="text-left space-y-3 mt-6 mb-8 max-w-md mx-auto list-none pl-0">
            <li className="flex items-start gap-2 text-gray-700">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <span>Movimentos intestinais naturais, confortáveis e previsíveis todas as manhãs</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <span>Fim do inchaço que te faz parecer grávida</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <span>Mais energia e confiança em você mesma durante todo o dia</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
              <span>A segurança de usar roupas justas sem preocupações</span>
            </li>
          </ul>

          {/* New Limited Offer Section */}
          <div className="border-t-2 border-dashed border-emerald-200 mt-12 pt-12">
             <div className="bg-red-50 text-red-700 font-bold uppercase tracking-wider py-2 px-6 rounded-full inline-block mb-6 border border-red-100">
               Oferta especial por TEMPO LIMITADO
             </div>
             
             <p className="font-medium text-gray-800">
               No entanto, como eu mesma sofri com esse problema e entendo a sua frustração…
             </p>
             <p>
               E porque a minha missão é ajudar o máximo de mulheres possível a voltarem a ter seu melhor corpo e confiança em si mesmas…
             </p>
             <p className="font-bold text-emerald-700 text-xl bg-emerald-50 p-4 rounded-lg border border-emerald-100 my-4">
               Convenci a minha equipe a oferecer um desconto especial apenas para quem está lendo esta página hoje.
             </p>
             <p>
               Isso é menos do que custa um tratamento de spa…
             </p>
             <p className="text-lg font-bold text-gray-900">
               E sai por apenas <span className="bg-yellow-200 px-1">R$ 1,23 por dia</span> para você recuperar sua forma, sem precisar fazer dieta.
             </p>

             {/* Stack Breakdown */}
             <div className="mt-16 mb-8">
               <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
                 Tudo o que você precisa para ligar de volta o<br/>“despertador digestivo” do seu corpo
               </h3>
               <p className="text-gray-600 mb-8">Aqui está exatamente o que você recebe ao iniciar o Detox do Despertar Digestivo hoje:</p>
               
               <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-emerald-500 max-w-2xl mx-auto transform transition-all hover:scale-[1.01]">
                 
                 {/* Main Product Item */}
                 <div className="bg-emerald-50 p-6 border-b border-emerald-100 flex justify-between items-center text-left">
                   <div>
                     <span className="block font-bold text-lg text-emerald-900 leading-tight">Receita Detox do Despertar Digestivo</span>
                     <span className="text-xs uppercase tracking-wide text-emerald-600 font-bold">Protocolo Completo</span>
                   </div>
                   <div className="text-right">
                     <span className="block font-bold text-gray-400 line-through text-sm">R$ 97,00</span>
                   </div>
                 </div>

                 {/* Bonuses List */}
                 <div className="p-6 bg-white space-y-5">
                   {bonuses.map((bonus, idx) => (
                     <div key={idx} className="flex justify-between items-center border-b border-gray-50 last:border-0 pb-3 last:pb-0 group">
                       <div className="flex items-center gap-4 text-left">
                         <div className="bg-amber-100 p-2 rounded-full group-hover:bg-amber-200 transition-colors">
                           <Gift className="w-5 h-5 text-amber-600" />
                         </div>
                         <span className="font-semibold text-gray-700 text-sm md:text-base">{bonus.title}</span>
                       </div>
                       <div className="font-bold text-emerald-600 whitespace-nowrap">{bonus.value}</div>
                     </div>
                   ))}
                 </div>

                 {/* Total Value Calculation */}
                 <div className="bg-gray-50 p-5 text-center border-t border-gray-100">
                    <p className="text-gray-500 font-bold text-sm uppercase tracking-wide mb-1">Valor Total dos Bônus = <span className="line-through decoration-red-500 decoration-2">R$ 225,00</span></p>
                    <p className="text-emerald-700 font-black text-lg md:text-xl">PORÉM LEVANDO O DESPERTAR DIGESTIVO VOCÊ GANHA TODOS GRÁTIS</p>
                 </div>

                 {/* Final Price Card */}
                 <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-white relative overflow-hidden">
                   {/* Decorative circle */}
                   <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                   
                   <p className="uppercase tracking-widest text-emerald-100 font-semibold mb-2 text-sm">Preço Final Hoje</p>
                   <div className="flex justify-center items-end gap-3 mb-8">
                      <span className="text-2xl text-emerald-200 line-through mb-2 font-medium">R$ 97,00</span>
                      <span className="text-7xl font-extrabold text-white leading-none">R$ 37</span>
                      <span className="text-2xl text-emerald-100 mb-2 font-bold">,00</span>
                   </div>
                   
                   <Button 
                     fullWidth 
                     className="bg-green-500 hover:bg-green-400 text-white border-b-4 border-green-700 active:border-0 active:mt-1 text-lg md:text-xl py-5 shadow-xl animate-pulse w-full mb-4"
                     onClick={handleBuy}
                   >
                     EU QUERO O DESPERTAR DIGESTIVO
                   </Button>
                   
                   <div className="flex justify-center items-center gap-4 text-xs text-emerald-200 opacity-90 mt-4">
                     <span className="flex items-center gap-1"><Check size={12} /> Compra Segura</span>
                     <span className="flex items-center gap-1"><Check size={12} /> Entrega Imediata</span>
                     <span className="flex items-center gap-1"><Check size={12} /> Garantia de 60 Dias</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;