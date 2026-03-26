import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Users,
  HeartHandshake,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Skills Training",
    description:
      "Trauma-informed courses in web development, data analysis, graphic design, and digital marketing with flexible scheduling during Kwibuka.",
    color: "bg-hope-light",
    iconColor: "text-secondary",
  },
  {
    icon: Briefcase,
    title: "Bias-Free Job Matching",
    description:
      "AI-powered matching that excludes ethnic name signals, with blind resume applications and interview preparation for genocide-affected youth.",
    color: "bg-earth-light",
    iconColor: "text-earth",
  },
  {
    icon: Users,
    title: "Trauma-Informed Mentorship",
    description:
      "Trained mentors matched through safe algorithms, with encrypted messaging, crisis detection, and wellbeing check-ins.",
    color: "bg-warmth-light",
    iconColor: "text-warmth",
  },
  {
    icon: HeartHandshake,
    title: "Reconciliation & Mental Health",
    description:
      "CNLG-approved content, moderated cross-community forums, facilitated dialogues, PHQ-9 screening, and counseling referrals.",
    color: "bg-hope-light",
    iconColor: "text-primary",
  },
  {
    icon: BarChart3,
    title: "Impact Analytics",
    description:
      "Track employment rates, psychosocial wellbeing, community investments, and algorithmic bias — with full data privacy and encryption.",
    color: "bg-earth-light",
    iconColor: "text-secondary",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary mb-3 block">
            Platform Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Five Pillars of Transformation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            An integrated digital ecosystem that treats skills, jobs, reconciliation,
            and mental health as one interconnected system.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <feature.icon size={22} className={feature.iconColor} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
