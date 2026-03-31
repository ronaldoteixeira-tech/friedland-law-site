import React, { useRef } from "react";
import { Scale, Phone, ShieldCheck, DollarSign } from "lucide-react";
// 1. O arquivo da imagem que você fará o upload:
import skylineBg from "@/assets/skyline-bg.jpg";

const reasons = [
  {
    title: "Direct Attorney Access",
    description:
      "You won't just talk to paralegals or case managers. You will have direct access to your dedicated attorney throughout your entire case.",
    icon: Phone,
  },
  {
    title: "No Win, No Fee Guarantee",
    description:
      "We work on a contingency fee basis. This means you pay absolutely nothing out of pocket, and we only get paid if we win your case.",
    icon: DollarSign,
  },
  {
    title: "Proven Track Record",
    description:
      "Our attorneys have successfully recovered millions of dollars in verdicts and settlements for accident victims across the state.",
    icon: Scale,
  },
  {
    title: "24/7 Availability",
    description:
      "Accidents don't just happen during business hours. Our legal team is available around the clock to provide the support you need.",
    icon: ShieldCheck,
  },
];

// Componente individual da Carta com a animação de hover
const ReasonCard = ({ title, description, icon: Icon }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Função que rastreia o mouse e atualiza as variáveis CSS da carta
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
      className="relative overflow-hidden bg-white/5 border border-white/10 p-8 rounded-xl group transition-colors duration-300 hover:border-gold/50 cursor-default backdrop-blur-sm"
    >
      {/* Efeito de brilho Dourado (Gold Glow) que segue o mouse. */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(197, 165, 114, 0.15), transparent 40%)`,
        }}
      />

      {/* Conteúdo da carta (z-10 para ficar acima do brilho) */}
      <div className="relative z-10">
        <div className="w-14 h-14 bg-navy/50 rounded-lg flex items-center justify-center mb-6 border border-white/5 group-hover:border-gold/30 transition-colors backdrop-blur-md">
          <Icon className="w-7 h-7 text-gold" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

const ProblemAmplification = () => {
  return (
    // 2. Container principal com a imagem de fundo e efeito paralax (bg-fixed)
    <section
      className="relative py-20 lg:py-28 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${skylineBg})` }}
    >
      {/* 3. Máscara azul transparente (85% de opacidade). 
          Se quiseres ver MAIS a imagem, muda para bg-navy/70 ou bg-navy/60 
          Se quiseres ver MENOS a imagem, muda para bg-navy/90 ou bg-navy/95 
      */}
      <div className="absolute inset-0 bg-navy/85 z-0"></div>

      {/* Conteúdo real da seção (z-10 para ficar por cima do fundo e da máscara) */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Why Choose <span className="text-gold">Friedland Law?</span>
          </h2>
          <p className="text-lg text-white/90 drop-shadow-md">
            When you're dealing with the aftermath of an accident, you need a legal team that puts your recovery first.
            Here is why clients trust us with their most critical cases.
          </p>
        </div>

        {/* Grid com os Cards Animados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemAmplification;
