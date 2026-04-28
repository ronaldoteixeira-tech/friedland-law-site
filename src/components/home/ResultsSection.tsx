import React from "react";
import { ArrowRight } from "lucide-react";

// 1. Importações com caminhos relativos (mais seguros).
// AVISO: Se alguma das tuas imagens for .png ou .jpeg em vez de .jpg,
// basta alterares a extensão aqui nestas linhas!
import carImg from "../../assets/car-accident.jpg";
import truckImg from "../../assets/truck-accident.jpg";
import motoImg from "../../assets/motorcycle-accident.jpg";
import slipImg from "../../assets/slip-and-fall.jpg";
import deathImg from "../../assets/wrongful-death.jpg";
import brainImg from "../../assets/brain-injury.jpg";

// Dados dos vereditos e resultados
const caseResults = [
  {
    title: "Car Accidents",
    highlight: "$5.2 Million",
    subtitle: "Jury Verdict vs. $100k Offer",
    image: carImg, // Variável da imagem correspondente
    link: "/results/car-accidents",
  },
  {
    title: "Truck Accidents",
    highlight: "$8.5 Million",
    subtitle: "Settlement Secured",
    image: truckImg, // Variável da imagem correspondente
    link: "/results/truck-accidents",
  },
  {
    title: "Motorcycle Accidents",
    highlight: "20x",
    subtitle: "More Than Initial Insurance Offer",
    image: motoImg, // Variável da imagem correspondente
    link: "/results/motorcycle-accidents",
  },
  {
    title: "Slip & Fall",
    highlight: "$2.1 Million",
    subtitle: "Premises Liability Verdict",
    image: slipImg, // Variável da imagem correspondente
    link: "/results/slip-and-fall",
  },
  {
    title: "Wrongful Death",
    highlight: "$12 Million",
    subtitle: "Confidential Settlement",
    image: deathImg, // Variável da imagem correspondente
    link: "/results/wrongful-death",
  },
  {
    title: "Brain Injuries",
    highlight: "$4.5 Million",
    subtitle: "Trial Verdict for TBI",
    image: brainImg, // Variável da imagem correspondente
    link: "/results/brain-injuries",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da Seção de Resultados */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-navy mb-6 uppercase tracking-tight">
            +$1 Billion <span className="text-gold">Recovered for Clients.</span>
          </h2>
          <p className="text-lg text-gray-600">
            We don't just handle cases; we maximize them. Select your accident type below to see how we've defeated the
            insurance companies in situations just like yours.
          </p>
        </div>

        {/* Grade de Cards Estilo Veredito */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseResults.map((result, index) => (
            <a
              href={result.link}
              key={index}
              className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl block bg-black shadow-xl"
            >
              {/* Imagem de Fundo com Zoom no Hover */}
              <img
                src={result.image}
                alt={result.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
              />

              {/* Overlay Escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 group-hover:via-black/70"></div>

              {/* Conteúdo do Card (Fica na parte inferior) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                {/* O container de texto sobe ligeiramente quando passa o mouse */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Multiplicador / Veredito */}
                  <div className="text-gold text-4xl md:text-[3.25rem] font-black leading-none mb-2 tracking-tighter">
                    {result.highlight}
                  </div>

                  {/* Contexto do Veredito */}
                  <div className="text-white/80 text-sm md:text-base uppercase tracking-wider font-semibold mb-6">
                    {result.subtitle}
                  </div>

                  {/* Título da Área/Caso com Seta Animada */}
                  <h3 className="text-white text-2xl md:text-3xl font-bold flex items-center gap-3">
                    {result.title}
                    <ArrowRight className="w-6 h-6 text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" />
                  </h3>
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
