import React, { useRef } from "react";
import { Handshake, Gavel, Clock } from "lucide-react";

// 1. Importação da nova imagem de fundo (usando caminho relativo para evitar erros)
// AVISO: Se a tua imagem for .png ou .webp, altera a extensão aqui!
import skylineBg2 from "../../assets/skyline-bg-2.jpg";

const guarantees = [
  {
    icon: Handshake,
    title: "Direct Attorney Access",
    text: "You speak to the lawyer handling your case. Always.",
  },
  {
    icon: Gavel,
    title: "Trial-Ready Preparation",
    text: "Every case is prepared as if going to jury trial.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    text: "Day or night, your attorney is a call away.",
  },
];

// Componente individual do Card com a animação de hover e rastreio do mouse
const GuaranteeCard = ({ title, text, icon: Icon }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-white/5 border border-white/10 p-8 rounded-xl group transition-colors duration-300 hover:border-gold/50 cursor-default backdrop-blur-sm flex flex-col items-center text-center shadow-lg"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(197, 165, 114, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-navy/50 rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:border-gold/30 transition-colors backdrop-blur-md">
          <Icon className="w-8 h-8 text-gold" />
        </div>

        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>

        <p className="text-white/80 leading-relaxed text-sm md:text-base">{text}</p>
      </div>
    </div>
  );
};

const GuaranteeSection = () => {
  return (
    // 2. Adicionado bg-fixed (efeito paralax), bg-cover e bg-center
    <section
      className="py-20 lg:py-28 relative border-t border-white/5 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${skylineBg2})` }}
    >
      {/* 3. Máscara Azul MAIS FORTE (bg-navy/90). 
          Isso deixará a imagem de fundo bem subtil e o azul predominante. */}
      <div className="absolute inset-0 bg-navy/90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título com drop-shadow para destacar ainda mais sobre o fundo */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Your Lawyer. Not Only a Case Manager. <span className="text-gold">Guaranteed.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {guarantees.map((item, index) => (
            <GuaranteeCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
