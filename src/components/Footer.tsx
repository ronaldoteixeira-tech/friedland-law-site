import logo from "@/assets/friedland-law-gold-logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { locations } from "@/data/locations";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - Brand */}
          <div>
            <Link to="/" className="inline-block mb-2">
              <img src={logo} alt="Friedland Law" className="h-14 w-auto" />
            </Link>
            <p className="mt-3 text-sm text-primary-foreground/70 italic">Your Fight. Our Battle.™</p>
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-primary-foreground/50 hover:text-gold transition-colors" aria-label="Social media">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Practice Areas", "Attorneys", "Results", "About", "Contact", "Resources", "FAQ"].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Offices */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gold mb-4">Our Offices</h4>
            <ul className="space-y-3">
              {locations.map(loc => (
                <li key={loc.slug} className="text-sm text-primary-foreground/70">
                  <span className="font-medium text-primary-foreground">{loc.city}, {loc.state}</span><br />
                  {loc.address}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a href="tel:800-210-4878" className="block hover:text-gold transition-colors font-medium text-primary-foreground">
                800-210-HURT
              </a>
              <a href="mailto:info@friedlandlaw.com" className="block hover:text-gold transition-colors">
                info@friedlandlaw.com
              </a>
              <p>Available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/50">
          <p>© 2026 Friedland Law. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
