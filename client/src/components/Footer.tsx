import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-display">SOMA Kayanko</h3>
            <p className="text-slate-400">
              Consultant Junior en Capital Project et Ingénieur Génie Civil passionné par l'immobilier durable et la stratégie de projets.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:skayanko@gmail.com" className="hover:text-primary transition-colors">skayanko@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+33745539236" className="hover:text-primary transition-colors">+33 7 45 53 92 36</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Île-de-France</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Expérience</a></li>
              <li><a href="#education" className="hover:text-primary transition-colors">Formation</a></li>
              <li><a href="#certifications" className="hover:text-primary transition-colors">Certifications</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Réseaux</h4>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/kayanko" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SOMA Kayanko. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
