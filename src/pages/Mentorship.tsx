import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Users, ShieldCheck, MessageCircle, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: ShieldCheck, title: "Trauma-Informed Training", desc: "Complete a 3-hour training program to support genocide-affected youth safely." },
  { icon: MessageCircle, title: "Encrypted Messaging", desc: "Communicate securely with mentees through end-to-end encrypted channels." },
  { icon: Calendar, title: "Flexible Scheduling", desc: "Set your availability and match with learners at times that work for both." },
  { icon: Users, title: "Crisis Support", desc: "Access crisis detection tools and direct referral paths to counselors." },
];

const steps = [
  "Create your account and select 'Mentor' role",
  "Complete the trauma-informed mentorship training",
  "Get matched with learners based on skills and availability",
  "Start guiding, with ongoing support and wellbeing check-ins",
];

const Mentorship = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 text-sm font-medium" style={{ color: "hsl(150, 15%, 75%)" }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-4">
              <Heart size={20} style={{ color: "hsl(148, 32%, 65%)" }} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "hsl(148, 32%, 65%)" }}>Mentorship</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(0, 0%, 100%)" }}>
              Become a Mentor
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(150, 15%, 80%)" }}>
              Guide genocide-affected youth through their professional journey with
              trauma-informed mentorship. Your experience can change lives.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-hope-light flex items-center justify-center mb-4">
                <b.icon size={20} className="text-secondary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">How It Works</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-section-alt border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground text-sm font-bold">{i + 1}</span>
                </div>
                <p className="text-foreground text-sm leading-relaxed pt-1">{step}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/register">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8">
                Apply as Mentor <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
