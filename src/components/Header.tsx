import logo from "@/assets/friedland-law-gold-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import CTAButton from "./CTAButton";
import { megaMenuCategories } from "@/data/practiceAreas";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  // Função para acionar o Google Translate oculto
  const translatePage = (lang: string) => {
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <header className="w-full z-50 relative">
      {/* Top Bar */}
      <div className="bg-navy text-primary-foreground border-b border-white/10">
        <div className="container mx-auto px-4 flex items-center justify-between h-10 text-sm">
          <a href="tel:800-210-4878" className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-medium">
            <Phone size={14} /> 800-210-HURT
          </a>
          <div className="hidden sm:flex items-center gap-4">
            <button 
              onClick={() => translatePage('en')}
              className="text-xs border border-primary-foreground/30 px-2 py-0.5 rounded hover:text-gold hover:border-gold transition-colors cursor-pointer">
              English
            </button>
            <button 
              onClick={() => translatePage('es')}
              className="text-xs border border-primary-foreground/30 px-2 py-0.5 rounded hover:text-gold hover:border-gold transition-colors cursor-pointer">
              Español
            </button>
            <button 
              onClick={() => translatePage('pt')}
              className="text-xs border border-primary-foreground/30 px-2 py-0.5 rounded hover:text-gold hover:border-gold transition-colors cursor-pointer">
              Português
            </button>
          </div>
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
              
              {/* O AQUI ESTÁ A CORREÇÃO: 3 colunas e 600px de largura */}
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-background shadow-xl rounded-xl border border-border p-6 w-[600px] grid grid-cols-3 gap-6">
                    {megaMenuCategories.map(cat => (
                      <div key={cat.title}>
                        <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-3">{cat.title}</h4>
                        <ul className="space-y-2">
                          {cat.areas.map(area => (
                            <li key={area.slug}>
                              <Link to={`/practice-areas/${area.slug}`} className="text-sm text-charcoal hover:text-gold transition-colors block"
                                onClick={() => setMegaOpen(false)}>
                                {area.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
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
