import CTAButton from "../CTAButton";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold leading-tight text-primary-foreground mb-4">
            Your Fight,{" "}
            <span className="text-gold">Our Battle.</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
            Your Case Isn't Just a Number. It's Your Life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <CTAButton text="Start Your Free Strategy Session" href="/contact" variant="primary" />
            <CTAButton text="Call Direct: 800-210-HURT" href="tel:800-210-4878" variant="hero-outline" icon={<Phone size={18} />} />
          </div>
          <div className="flex flex-wrap gap-2">
            {["No Win, No Fee", "Se Habla Español", "Falamos Português"].map(badge => (
              <span key={badge} className="text-xs text-primary-foreground/80 border border-primary-foreground/30 px-3 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
