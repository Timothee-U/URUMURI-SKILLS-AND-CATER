import { motion } from "framer-motion";
import { Target, Handshake } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary mb-3 block">
            Our Mission
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ending Unemployment & Building Unity
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Three decades after the genocide against the Tutsi, Rwanda's youth — especially
            genocide survivors' children — face unemployment rates 2.3x higher than their peers.
            Urumuri addresses both economic barriers and social healing as one integrated mission.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-hope-light border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-5">
              <Target size={24} className="text-secondary" />
            </div>
            <h3 className="font-display text-xl font-bold text-black mb-3">
              Economic Empowerment
            </h3>
            <p className="text-black leading-relaxed">
              Digital skills training in web development, data analysis, graphic design, and
              digital marketing — paired with job placement connecting youth to Rwanda's
              growing tech sector.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-warmth-light border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
              <Handshake size={24} className="text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-black mb-3">
              Reconciliation & Healing
            </h3>
            <p className="text-black leading-relaxed">
              Testimonial therapy, history education, psychological support groups, and dialogue
              therapy — creating safe spaces for survivors and perpetrators' children to build
              shared futures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
