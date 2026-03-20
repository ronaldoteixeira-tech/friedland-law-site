import { Link } from "react-router-dom";
import { Car, Truck, Bike, Smartphone, AlertTriangle, HardHat, Stethoscope, Heart, Brain, Dog, Footprints, Building, type LucideIcon } from "lucide-react";
import CTAButton from "../CTAButton";
import { practiceAreas } from "@/data/practiceAreas";

const iconMap: Record<string, LucideIcon> = {
  Car, Truck, Bike, Smartphone, AlertTriangle, HardHat, Stethoscope, Heart, Brain, Dog, Footprints, Building,
};

const PracticeAreasGrid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-charcoal mb-12">
          How Were You Injured?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {practiceAreas.map(area => {
            const Icon = iconMap[area.icon] || Car;
            return (
              <Link
                key={area.slug}
                to={`/practice-areas/${area.slug}`}
                className="group flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-background hover:bg-navy hover:border-navy transition-all duration-300 text-center"
              >
                <Icon size={32} className="text-gold group-hover:text-primary-foreground transition-colors mb-3" />
                <span className="text-sm font-medium text-charcoal group-hover:text-primary-foreground transition-colors">
                  {area.name}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="text-center">
          <CTAButton text="View All Practice Areas →" href="/practice-areas" variant="dark" />
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasGrid;
