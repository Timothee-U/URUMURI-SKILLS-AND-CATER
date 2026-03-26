import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Code, BarChart3, Palette, Megaphone, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: Code,
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React and build real-world projects for Rwanda's tech sector.",
    duration: "12 weeks",
    level: "Beginner",
    color: "bg-hope-light",
    iconColor: "text-secondary",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Master Excel, SQL, Python, and data visualization to unlock insights from data.",
    duration: "10 weeks",
    level: "Beginner",
    color: "bg-warmth-light",
    iconColor: "text-warmth",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Create professional designs using Canva, Figma, and Adobe tools for digital media.",
    duration: "8 weeks",
    level: "Beginner",
    color: "bg-earth-light",
    iconColor: "text-earth",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Learn social media marketing, SEO, content strategy, and e-commerce fundamentals.",
    duration: "8 weeks",
    level: "Beginner",
    color: "bg-hope-light",
    iconColor: "text-primary",
  },
];

const Learn = () => {
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
              <BookOpen size={20} style={{ color: "hsl(148, 32%, 65%)" }} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "hsl(148, 32%, 65%)" }}>Skills Training</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(0, 0%, 100%)" }}>
              Start Your Learning Journey
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(150, 15%, 80%)" }}>
              Free, trauma-informed digital skills courses designed for genocide-affected youth.
              Flexible scheduling during Kwibuka, with mentorship and job placement support.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Courses */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <course.icon size={22} className={course.iconColor} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{course.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                <span className="flex items-center gap-1"><Award size={12} /> {course.level}</span>
              </div>
              <Link to="/register">
                <Button variant="outline" size="sm" className="w-full border-border text-foreground hover:bg-muted">
                  Enroll Now <ArrowRight size={14} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
