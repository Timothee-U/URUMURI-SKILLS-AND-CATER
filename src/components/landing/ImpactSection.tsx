import { motion } from "framer-motion";

const stats = [
  { value: "400+", label: "Genocide-affected learners supported", suffix: "" },
  { value: "50%", label: "Employment placement rate target", suffix: "" },
  { value: "70%", label: "Course completion rate goal", suffix: "" },
  { value: "150+", label: "Cross-community connections", suffix: "" },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 md:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase mb-3 block text-white/80">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            Measurable Change, Real Lives
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
            Within 18 months, we aim to transform employment outcomes and reconciliation
            participation among genocide-affected youth in Rwanda.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl backdrop-blur-sm border"
              style={{
                backgroundColor: "hsla(0, 0%, 100%, 0.08)",
                borderColor: "hsla(0, 0%, 100%, 0.15)",
              }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold mb-2 text-white/80">
                {stat.value}
              </div>
              <div className="text-sm leading-snug text-white/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
