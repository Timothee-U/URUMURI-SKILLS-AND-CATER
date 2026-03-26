import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Handshake, Users, BookOpen, HeartHandshake, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  { icon: BookOpen, title: "History Education", desc: "CNLG-approved content about Rwanda's history, presented with care and content warnings." },
  { icon: Users, title: "Community Dialogues", desc: "Facilitated sessions bringing survivors and perpetrators' children together in safe spaces." },
  { icon: HeartHandshake, title: "Peer Support Groups", desc: "Connect with others who share similar experiences in moderated, supportive environments." },
  { icon: Phone, title: "Mental Health Resources", desc: "PHQ-9 screening, counselor referrals, and direct access to ISANGE One Stop Centers." },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-white/80">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-4">
              <Handshake size={20} className="text-secondary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Reconciliation</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Healing & Reconciliation
            </h1>
            <p className="text-lg max-w-2xl text-white/80">
              Building bridges between communities through dialogue, education, and shared healing.
              All content is CNLG-approved and presented with trauma-informed care.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-warmth-light flex items-center justify-center mb-4">
                <p.icon size={20} className="text-warmth" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Emergency contacts */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-warmth-light border border-border text-center">
          <h3 className="font-display text-lg font-bold text-foreground mb-2">Need Immediate Support?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            If you're experiencing a crisis, help is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground">
              <Phone size={14} className="text-secondary" /> ISANGE Hotline: 3029
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground">
              <Phone size={14} className="text-primary" /> Emergency: 112
            </span>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/register">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              Join a Program <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Partners;
