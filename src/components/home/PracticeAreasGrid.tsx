import React from "react";
import { ArrowRight } from "lucide-react";
// Usando uma imagem que sabemos que existe no projeto como placeholder
import placeholderImg from "@/assets/hero-bg.jpg";

// Dados da grade combinando Áreas de Atuação com Vereditos (Estilo Morgan & Morgan)
const practiceAreas = [
  {
    title: "Car Accidents",
    highlight: "$5.2 Million",
    subtitle: "Jury Verdict vs. $100k Offer",
    image: placeholderImg,
    link: "/practice-areas/car-accidents",
  },
  {
    title: "Truck Accidents",
    highlight: "$8.5 Million",
    subtitle: "Settlement Secured",
    image: placeholderImg,
    link: "/practice-areas/truck-accidents",
  },
  {
    title: "Motorcycle Accidents",
    highlight: "20x",
    subtitle: "More Than Initial Insurance Offer",
    image: placeholderImg,
    link: "/practice-areas/motorcycle-accidents",
  },
  {
    title: "Slip & Fall",
    highlight: "$2.1 Million",
    subtitle: "Premises Liability Verdict",
    image: placeholderImg,
    link: "/practice-areas/slip-and-fall",
  },
  {
    title: "Wrongful Death",
    highlight: "$12 Million",
    subtitle: "Confidential Settlement",
    image: placeholderImg,
    link: "/practice-areas/wrongful-death",
  },
  {
    title: "Brain Injuries",
    highlight: "$4.5 Million",
    subtitle: "Trial Verdict for TBI",
    image: placeholderImg,
    link: "/practice-areas/brain-injuries",
  },
];

const PracticeAreasGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy relative border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Victories. <span className="text-gold">Your Practice Areas.</span>
          </h2>
          <p className="text-lg text-white/80">
            We don't just handle cases; we maximize them. Select your accident type below to see how we've defeated the
            insurance companies in situations just like yours.
          </p>
        </div>

        {/* Grade de Cards Estilo Veredito */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => (
            <a
              href={area.link}
              key={index}
              className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl block bg-black"
            >
              {/* Imagem de Fundo com Zoom no Hover */}
              <img
                src={area.image}
                alt={area.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
              />

              {/* Overlay Escuro para garantir a leitura do texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 group-hover:via-black/70"></div>

              {/* Conteúdo do Card (Fica na parte inferior) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                {/* O container de texto sobe ligeiramente quando passa o mouse */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Multiplicador / Veredito */}
                  <div className="text-gold text-4xl md:text-[3.25rem] font-black leading-none mb-2 tracking-tighter">
                    {area.highlight}
                  </div>

                  {/* Contexto do Veredito */}
                  <div className="text-white/80 text-sm md:text-base uppercase tracking-wider font-semibold mb-6">
                    {area.subtitle}
                  </div>

                  {/* Título da Área com Seta Animada */}
                  <h3 className="text-white text-2xl md:text-3xl font-bold flex items-center gap-3">
                    {area.title}
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

export default PracticeAreasGrid;
