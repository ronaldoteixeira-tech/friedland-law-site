import logo from "@/assets/friedland-law-gold-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import CTAButton from "./CTAButton";
import { megaMenuCategories } from "@/data/practiceAreas";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="w-full z-50 relative">
      {/* Top Bar */}
      <div className="bg-navy text-primary-foreground border-b border-white/10">
        <div className="container mx-auto px-4 flex items-center justify-between h-10 text-sm">
          <a href="tel:800-210-4878" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone size={14} /> 800-210-HURT
          </a>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-xs border border-primary-foreground/30 px-2 py-0.5 rounded">Se Habla Español</span>
            <span className="text-xs border border-primary-foreground/30 px-2 py-0.5 rounded">Falamos Português</span>
          </div>
          <CTAButton text="Free Consultation" href="/contact" variant="primary" className="!py-1.5 !px-4 !text-xs" />
        </div>
      </div>

      {/* Main Nav */}
      <div className="sticky top-0 bg-navy shadow-sm z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Friedland Law" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-white hover:text-gold transition-colors">Home</Link>
            <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
              <button className="text-sm font-medium text-white hover:text-gold transition-colors flex items-center gap-1">
                Practice Areas <ChevronDown size={14} />
              </button>
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-background shadow-xl rounded-xl border border-border p-6 w-[700px] grid grid-cols-4 gap-6 mt-2">
                  {megaMenuCategories.map(cat => (
                    <div key={cat.title}>
                      <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-3">{cat.title}</h4>
                      <ul className="space-y-2">
                        {cat.areas.map(area => (
                          <li key={area.slug}>
                            <Link to={`/practice-areas/${area.slug}`} className="text-sm text-charcoal hover:text-gold transition-colors"
                              onClick={() => setMegaOpen(false)}>
                              {area.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/attorneys" className="text-sm font-medium text-white hover:text-gold transition-colors">Attorneys</Link>
            <Link to="/results" className="text-sm font-medium text-white hover:text-gold transition-colors">Results</Link>
            <Link to="/locations" className="text-sm font-medium text-white hover:text-gold transition-colors">Locations</Link>
            <Link to="/resources" className="text-sm font-medium text-white hover:text-gold transition-colors">Resources</Link>
            <Link to="/contact" className="text-sm font-medium text-white hover:text-gold transition-colors">Contact</Link>
          </nav>

          <div className="hidden lg:block">
            <CTAButton text="Free Case Review" href="/contact" variant="primary" className="!py-2.5 !px-6 !text-sm" />
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-white hover:text-gold transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy border-t border-white/10 px-4 py-6 space-y-4 shadow-lg">
            {[
              { to: "/", label: "Home" },
              { to: "/practice-areas", label: "Practice Areas" },
              { to: "/attorneys", label: "Attorneys" },
              { to: "/results", label: "Results" },
              { to: "/locations", label: "Locations" },
              { to: "/resources", label: "Resources" },
              { to: "/contact", label: "Contact" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="block text-lg font-medium text-white hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <CTAButton text="Free Case Review" href="/contact" variant="primary" className="w-full mt-4" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
