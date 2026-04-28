import { Link } from "react-router-dom";
import { Car, Truck, Bike, Smartphone, AlertTriangle, HardHat, Stethoscope, Heart, Brain, Dog, Footprints, Building, type LucideIcon } from "lucide-react";
import CTAButton from "../CTAButton";
import { practiceAreas } from "@/data/practiceAreas";

const iconMap: Record<string, LucideIcon> = {
  Car, Truck, Bike, Smartphone, AlertTriangle, HardHat, Stethoscope, Heart, Brain, Dog, Footprints, Building,
};

const PracticeAreasGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-gray-light/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4 uppercase tracking-tight">
            How Were You Injured?
          </h2>
          <div className="h-1.5 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            With decades of experience, we specialize in a wide range of personal injury cases. 
            Select your situation below to learn how we can fight for your rights.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {practiceAreas.map(area => {
            const Icon = iconMap[area.icon] || Car;
            return (
              <Link
                key={area.slug}
                to={`/practice-areas/${area.slug}`}
                className="group relative flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-white hover:bg-navy hover:border-navy transition-all duration-500 text-center shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* Decorative background element on hover */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500 rounded-2xl"></div>
                
                <div className="relative z-10 p-4 rounded-full bg-gray-light group-hover:bg-gold/20 transition-colors duration-500 mb-4">
                  <Icon size={36} className="text-gold group-hover:text-gold transition-colors" />
                </div>
                
                <span className="relative z-10 text-base font-bold text-navy group-hover:text-white transition-colors duration-300">
                  {area.name}
                </span>
                
                <div className="relative z-10 mt-3 h-0.5 w-0 group-hover:w-8 bg-gold transition-all duration-500"></div>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center">
          <CTAButton text="View All Practice Areas →" href="/practice-areas" variant="dark" className="!px-10" />
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasGrid;
