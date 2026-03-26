import { motion } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const roles = [
  {
    icon: GraduationCap,
    title: "For Learners",
    description: "Access free digital skills training, find jobs without bias, and connect with mentors who understand your journey.",
    cta: "Start Learning",
    link: "/learn",
    color: "bg-hope-light",
    iconColor: "text-secondary",
  },
  {
    icon: Building2,
    title: "For Employers",
    description: "Access a talent pool of trained, motivated youth. Demonstrate inclusive hiring and invest in Rwanda's future.",
    cta: "Post Opportunities",
    link: "/jobs",
    color: "bg-warmth-light",
    iconColor: "text-warmth",
  },
  {
    icon: Heart,
    title: "For Mentors",
    description: "Guide young people through trauma-informed mentorship. Receive training and tools to make a lasting impact.",
    cta: "Become a Mentor",
    link: "/mentorship",
    color: "bg-earth-light",
    iconColor: "text-earth",
  },
];

const GetInvolvedSection = () => {
  return (
    <section id="involved" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary mb-3 block">
            Get Involved
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join the Urumuri Community
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you're a young person seeking skills, an employer looking for talent,
            or a mentor wanting to guide — there's a place for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl ${role.color} flex items-center justify-center mb-5`}>
                <role.icon size={22} className={role.iconColor} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {role.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {role.description}
              </p>
              <Link to={role.link}>
                <Button variant="outline" className="w-full border-border text-foreground hover:bg-muted">
                  {role.cta}
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
