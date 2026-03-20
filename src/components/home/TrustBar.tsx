import React from "react";

// Citações de sucesso focadas nos principais nichos da empresa
const successCases = [
  { amount: "$5.2 Million", type: "Truck Accident" },
  { amount: "$2.1 Million", type: "Car Accident" },
  { amount: "$4.5 Million", type: "Truck Accident" },
  { amount: "$1.8 Million", type: "Car Accident" },
  { amount: "$3.0 Million", type: "Truck Accident" },
  { amount: "$2.5 Million", type: "Car Accident" },
  { amount: "$6.1 Million", type: "Truck Accident" },
  { amount: "$1.2 Million", type: "Car Accident" },
];

const TrustBar = () => {
  return (
    <section className="bg-navy py-8 border-b border-white/10 overflow-hidden relative flex flex-col justify-center">
      {/* Sombras laterais para o efeito de fade (suavidade na entrada e saída do texto) */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none"></div>

      {/* Container animado com hover para pausar a leitura */}
      <div className="flex w-max animate-marquee hover:pause cursor-default">
        {/* Triplicamos a lista de casos no array para garantir o loop infinito perfeito sem espaços vazios */}
        {[...successCases, ...successCases, ...successCases].map((item, index) => (
          <div key={index} className="flex items-center mx-6 md:mx-10 space-x-3 md:space-x-4">
            <span className="text-gold font-bold text-2xl md:text-3xl">{item.amount}</span>
            <span className="text-white/90 text-lg md:text-xl font-medium tracking-wide uppercase">{item.type}</span>
            <span className="mx-6 md:mx-10 text-white/20 text-2xl md:text-3xl">•</span>
          </div>
        ))}
      </div>

      {/* Estilos da animação embutidos para rodar imediatamente */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          /* Move exatamente 1/3 do tamanho total já que triplicamos o array */
          100% { transform: translateX(-33.3333%); } 
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustBar;
