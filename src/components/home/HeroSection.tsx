import CTAButton from "../CTAButton";
import { Phone } from "lucide-react";
import heroVideo from "@/assets/hero-video-friedland.mp4";
import headerImg from "@/assets/header-img.png";

const HeroSection = () => {
  return (
    // 1. AQUI ESTÁ A MUDANÇA PRINCIPAL: min-h-[80vh] lg:min-h-[90vh] em vez de min-h-[600px]
    <section className="relative w-full min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-navy">
      {/* Vídeo de Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-navy/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-20">
        {/* Textos à esquerda */}
        <div className="max-w-2xl flex-1 text-left mt-8 lg:mt-0">
          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-tight text-white mb-6">
            Your Fight, <span className="text-gold">Our Battle.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg">
            Your Case Isn't Just a Number. It's Your Life. We provide direct attorney access for every client.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <CTAButton text="Start Your Free Strategy Session" href="/contact" variant="primary" />
            <CTAButton
              text="Call: 800-210-HURT"
              href="tel:800-210-4878"
              variant="hero-outline"
              icon={<Phone size={18} />}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {["No Win, No Fee", "Se Habla Español", "Falamos Português"].map((badge) => (
              <span
                key={badge}
                className="text-sm text-white/90 border border-white/30 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Imagem dos Sócios Sobreposta (header-img) à direita */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none relative">
          <img
            src={headerImg}
            alt="Friedland Law Attorneys"
            // AQUI TAMBÉM MUDOU: Adicionado lg:max-h-[750px] para acompanhar o novo tamanho da tela
            className="w-full h-auto object-contain max-h-[550px] lg:max-h-[750px] drop-shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
