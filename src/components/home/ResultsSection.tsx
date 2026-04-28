import React from "react";
import { ArrowRight } from "lucide-react";
import CountUp from "../ui/CountUp";

// 1. Importações com caminhos relativos (mais seguros).
import settlement1 from "../../assets/results/settlement-1.png";
import settlement2 from "../../assets/results/settlement-2.png";
import settlement3 from "../../assets/results/settlement-3.png";
import settlement4 from "../../assets/results/settlement-4.jfif";

// Dados dos vereditos e resultados atualizados com valores numéricos para o CountUp
const caseResults = [
  {
    title: "Car Accidents",
    value: 5.2,
    prefix: "$",
    suffix: " Million",
    decimals: 1,
    subtitle: "Jury Verdict vs. $100k Offer",
    image: settlement1,
    link: "/results/car-accidents",
  },
  {
    title: "Truck Accidents",
    value: 8.5,
    prefix: "$",
    suffix: " Million",
    decimals: 1,
    subtitle: "Settlement Secured",
    image: settlement2,
    link: "/results/truck-accidents",
  },
  {
    title: "Motorcycle Accidents",
    value: 20,
    prefix: "",
    suffix: "x",
    decimals: 0,
    subtitle: "More Than Initial Insurance Offer",
    image: settlement3,
    link: "/results/motorcycle-accidents",
  },
  {
    title: "Slip & Fall",
    value: 2.1,
    prefix: "$",
    suffix: " Million",
    decimals: 1,
    subtitle: "Premises Liability Verdict",
    image: settlement4,
    link: "/results/slip-and-fall",
  },
  {
    title: "Wrongful Death",
    value: 12,
    prefix: "$",
    suffix: " Million",
    decimals: 0,
    subtitle: "Confidential Settlement",
    image: settlement1,
    link: "/results/wrongful-death",
  },
  {
    title: "Brain Injuries",
    value: 4.5,
    prefix: "$",
    suffix: " Million",
    decimals: 1,
    subtitle: "Trial Verdict for TBI",
    image: settlement2,
    link: "/results/brain-injuries",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da Seção de Resultados */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-navy mb-6 uppercase tracking-tighter">
            +<CountUp from={0.1} to={1} decimals={1} prefix="$" suffix=" Billion" className="text-gold" />
            <br className="md:hidden" /> 
            <span className="md:ml-4">Recovered for Clients.</span>
          </h2>
          <div className="h-2 w-32 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            We don't just handle cases; we maximize them. Our track record speaks for itself with 
            over a billion dollars secured for victims of negligence.
          </p>
        </div>

        {/* Grade de Cards Estilo Veredito */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseResults.map((result, index) => (
            <a
              href={result.link}
              key={index}
              className="group relative h-[450px] overflow-hidden rounded-3xl block bg-black shadow-2xl border border-white/10"
            >
              {/* Imagem de Fundo com Zoom no Hover */}
              <img
                src={result.image}
                alt={result.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-30"
              />

              {/* Overlay Gradiente dinâmico */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:via-black/60"></div>

              {/* Conteúdo do Card */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  {/* Veredito Animado */}
                  <div className="text-gold text-5xl md:text-6xl font-black leading-none mb-3 tracking-tighter">
                    <CountUp 
                      from={0} 
                      to={result.value} 
                      decimals={result.decimals} 
                      prefix={result.prefix} 
                      suffix={result.suffix} 
                    />
                  </div>

                  {/* Contexto do Veredito */}
                  <div className="text-white/90 text-sm md:text-base uppercase tracking-[0.2em] font-bold mb-8 border-l-2 border-gold pl-4">
                    {result.subtitle}
                  </div>

                  {/* Título da Área/Caso */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
                      {result.title}
                    </h3>
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                      <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
