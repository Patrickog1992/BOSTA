import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800 pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-amber-500" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para funcionar?",
      answer: "A maioria das mulheres nota uma diferença nas primeiras 72 horas. Muitas relatam a primeira evacuação completa e satisfatória em menos de 3 dias depois de começar e um abdômen mais plano. Para resultados ideais, recomendamos usar o Detox do Despertar Digestivo por pelo menos 2–3 semanas para eliminar completamente a massinha pegajosa acumulada."
    },
    {
      question: "É seguro usar a longo prazo?",
      answer: "Absolutamente. Ao contrário dos laxantes, que criam dependência, o Detox do Despertar Digestivo trabalha junto com seu corpo para manter sua barriga naturalmente plana. Muitas clientes o usam como parte da rotina de manutenção, especialmente após viagens, mudanças hormonais ou períodos de estresse, quando o sistema tende a desregular."
    },
    {
      question: "Vai funcionar para mim se eu já “tentei de tudo”?",
      answer: "Se você já tentou dietas, cintas, exercícios abdominais e nada funcionou, é provável que esteja tratando os sintomas — não a causa raiz: a massinha pegajosa que empurra sua barriga para fora. O Detox do Despertar Digestivo atua especificamente nesse problema fundamental que outros produtos ignoram completamente. Em nosso estudo, 91% das mulheres que já “tinham tentado de tudo” pareciam visivelmente mais magras nos primeiros 5 dias."
    },
    {
      question: "Tem efeitos colaterais ou causa cólicas?",
      answer: "Ao contrário de produtos que causam inchaço temporário, o Detox do Despertar Digestivo foi formulado para criar um aplanamento suave e natural da barriga. Não causa o inchaço rebote associado a outros produtos. Ele simplesmente elimina a massinha pegajosa que seu corpo vinha acumulando."
    },
    {
      question: "É compatível com medicamentos?",
      answer: "O Detox do Despertar Digestivo usa ingredientes naturais que, em geral, não interferem com medicamentos. Porém, como acontece com qualquer suplemento, é sempre recomendável consultar o seu médico, especialmente se você toma remédios prescritos."
    },
    {
      question: "Quantos frascos eu devo pedir?",
      answer: "Para melhores resultados, recomendamos começar com pelo menos um suprimento de 3 meses. Isso permite eliminar completamente a massinha pegajosa acumulada ao longo de anos. Muitas mulheres percebem que, depois de 2–3 meses, mantêm a barriga plana naturalmente e podem reduzir para uma manutenção de apenas 2–3 cápsulas por semana."
    },
    {
      question: "O que o diferencia de outros suplementos?",
      answer: "A maioria dos suplementos digestivos não trata o problema que faz a barriga “pular para fora”. O Detox do Despertar Digestivo é radicalmente diferente porque elimina a massinha pegajosa, fazendo com que você pareça mais magra instantaneamente, sem precisar perder peso."
    },
    {
      question: "Quando vou receber meu pedido?",
      answer: "Processamos todos os pedidos em até 24 horas e enviamos com prioridade. A maioria das nossas clientes nos EUA recebe o pacote em 3–5 dias úteis. Você receberá um e-mail com o seu código de rastreamento assim que o pedido for enviado."
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
      <h3 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h3>
      <div className="divide-y divide-gray-100">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;