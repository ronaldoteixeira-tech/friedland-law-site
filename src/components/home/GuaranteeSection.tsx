import React, { useRef } from "react";
import { Handshake, Gavel, Clock } from "lucide-react";

// Os teus textos e ícones originais mantidos e estruturados
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

  // Função que rastreia o mouse para criar o efeito de "lanterna"
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
      {/* Efeito de brilho Dourado (Gold Glow) que segue o mouse */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(197, 165, 114, 0.15), transparent 40%)`,
        }}
      />

      {/* Conteúdo do Card (z-10 para ficar por cima do brilho) */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Ícone com fundo arredondado e borda sutil */}
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
    <section className="py-20 lg:py-28 bg-navy relative border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        {/* Título Original Mantido */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your Lawyer. Not a Case Manager. <span className="text-gold">Guaranteed.</span>
          </h2>
        </div>

        {/* Grade ajustada para 3 colunas (md:grid-cols-3) já que tens 3 itens */}
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
