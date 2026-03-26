import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">U</span>
              </div>
              <span className="font-display font-bold text-xl text-white/95">
                Urumuri
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Skills & Reconciliation Platform for Genocide-Affected Youth in Rwanda.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/90">
              Programs
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Digital Skills Training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Job Matching</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentorship</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reconciliation</a></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/90">
              Partners
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>African Leadership University</li>
              <li>AERG</li>
              <li>IBUKA</li>
              <li>CNLG</li>
            </ul>
          </div>

          {/* Emergency & Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/90">
              Support & Emergency
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-secondary" />
                <span>ISANGE Hotline: 3029</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <span>info@urumuri.rw</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50">
              © 2026 Urumuri Skills & Reconciliation Platform. A student-led initiative at ALU.
            </p>
            <div className="flex gap-6 text-xs text-white/50">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-primary transition-colors">Data Protection</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
