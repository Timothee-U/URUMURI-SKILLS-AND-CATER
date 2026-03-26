import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, MapPin, Building2, Eye, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const jobs = [
  { title: "Junior Web Developer", company: "Kigali Tech Hub", location: "Kigali", type: "Full-time", match: 92, posted: "2 days ago" },
  { title: "Data Analyst Intern", company: "IREMBO", location: "Kigali", type: "Internship", match: 87, posted: "5 days ago" },
  { title: "Graphic Designer", company: "CCI Rwanda", location: "Remote", type: "Contract", match: 78, posted: "1 week ago" },
  { title: "Digital Marketing Assistant", company: "Andela", location: "Kigali", type: "Full-time", match: 85, posted: "3 days ago" },
  { title: "Frontend Developer", company: "BAG Innovation", location: "Kigali", type: "Full-time", match: 90, posted: "1 day ago" },
  { title: "UX/UI Designer", company: "Muraho Technology", location: "Remote", type: "Part-time", match: 75, posted: "1 week ago" },
];

const Jobs = () => {
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
              <Briefcase size={20} className="text-secondary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Job Board</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Bias-Free Opportunities
            </h1>
            <p className="text-lg max-w-2xl text-white/80">
              AI-matched jobs that focus on your skills — not your background.
              Blind applications protect your identity until both sides express interest.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Job listings */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground">{jobs.length} opportunities matched to your profile</p>
          <Link to="/register">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Building2 size={14} className="mr-2" /> Post a Job
            </Button>
          </Link>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title + i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Building2 size={13} /> {job.company}</span>
                  <span className="flex items-center gap-1"><MapPin size={13} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={13} /> {job.posted}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-hope-light text-secondary">
                  {job.match}% match
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                  {job.type}
                </span>
                <Link to="/register">
                  <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">
                    <Eye size={14} className="mr-1" /> View
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
