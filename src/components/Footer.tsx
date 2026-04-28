import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/friedland-law-gold-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Coluna 1 - Logo e Info (Ajustada com lg:pl-8 para empurrar levemente para a direita) */}
          <div className="lg:pl-8">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Friedland Law" className="h-16 w-auto max-w-full object-contain" />
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Your Case Isn't Just a Number. It's Your Life. We provide direct attorney access for personal injury cases across Florida, New York, and New Jersey.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:800-210-4878" className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors text-sm">
                <Phone size={16} className="text-gold" /> 800-210-HURT
              </a>
              <a href="mailto:myattorney@friedlandlaw.com" className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors text-sm">
                <Mail size={16} className="text-gold" /> myattorney@friedlandlaw.com
              </a>
            </div>
          </div>

          {/* Coluna 2 - Quick Links */}
          <div className="lg:justify-self-center">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Attorneys", "Practice Areas", "Results", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} className="text-white/70 hover:text-gold transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Practice Areas */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Practice Areas</h3>
            <ul className="space-y-3">
              {["Car Accident", "Truck Accident", "Motorcycle Accident", "Slip & Fall", "Wrongful Death", "Brain Injury"].map((item) => (
                <li key={item}>
                  <Link to={`/practice-areas/${item.toLowerCase().replace(/ /g, "-").replace("&", "and")}`} className="text-white/70 hover:text-gold transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Locations */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Locations</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span><strong>New York:</strong> 50 Broad St #1502<br/>New York, NY 10004</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span><strong>Florida:</strong> 6620 Southpoint Dr S #115-E<br/>Jacksonville, FL 32216</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span><strong>New Jersey:</strong> 70 Grand Ave #107<br/>River Edge, NJ 07661</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs text-center md:text-left lg:pl-8">
            © {new Date().getFullYear()} Friedland Law. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
