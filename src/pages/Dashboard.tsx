import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen, Briefcase, Heart, BarChart3, LogOut, User,
  ChevronRight, Clock, TrendingUp, Target, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<{ full_name: string | null } | null>(null);
  const [roles, setRoles] = useState<string[]>([]);
  const [jobMatches, setJobMatches] = useState<any[]>([]);
  const [mentorSessions, setMentorSessions] = useState<any[]>([]);
  const [stats, setStats] = useState({ jobCount: 0, sessionCount: 0 });
  const [redirecting, setRedirecting] = useState(true);

  // Role-based redirect: non-learners go to their specific dashboard
  useEffect(() => {
    if (!user) return;
    // Mock: assume learner role
    setRedirecting(false);
  }, [user, navigate]);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const [profileRes, rolesRes, jobsRes, sessionsRes] = await Promise.all([
        Promise.resolve({ data: { full_name: "John Doe" } }),
        Promise.resolve({ data: [{ role: "learner" }] }),
        Promise.resolve({ data: [] }),
        Promise.resolve({ data: [] }),
      ]);

      setProfile(profileRes.data);
      setRoles(rolesRes.data?.map((r) => r.role) || []);
      setJobMatches(jobsRes.data || []);
      setMentorSessions(sessionsRes.data || []);
      setStats({
        jobCount: jobsRes.data?.length || 0,
        sessionCount: sessionsRes.data?.length || 0,
      });
    };
    fetchData();
  }, [user]);

  const displayName = profile?.full_name || user?.user_metadata?.full_name || user?.email?.split("@")[0] || "User";

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  // Static skill tracks (would come from a learning table in the future)
  const skillTracks = [
    { name: "Web Development", progress: 45, modules: 12, completed: 5, color: "bg-primary" },
    { name: "Data Analysis", progress: 20, modules: 10, completed: 2, color: "bg-secondary" },
    { name: "Digital Marketing", progress: 0, modules: 8, completed: 0, color: "bg-warmth" },
  ];

  if (redirecting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">U</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Urumuri</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <User size={16} />
              <span>{displayName}</span>
              {roles.length > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize">
                  {roles[0]}
                </span>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={signOut} className="text-muted-foreground">
              <LogOut size={16} className="mr-1" /> Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <motion.div {...fadeIn} className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">
            Welcome back, {displayName} 👋
          </h1>
          <p className="text-muted-foreground mt-1">Here's your learning journey overview</p>
        </motion.div>

        {/* Quick stats */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: BookOpen, label: "Courses Enrolled", value: "3", color: "text-primary" },
            { icon: Target, label: "Skills Completed", value: "7", color: "text-secondary" },
            { icon: Briefcase, label: "Job Listings", value: String(stats.jobCount), color: "text-warmth" },
            { icon: TrendingUp, label: "Mentor Sessions", value: String(stats.sessionCount), color: "text-earth" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-5">
              <stat.icon size={20} className={stat.color} />
              <div className="text-2xl font-bold text-foreground mt-2">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Skills Progress */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <BookOpen size={18} className="text-primary" /> Skills Progress
                </h2>
                <Link to="/learn" className="text-sm text-primary hover:underline flex items-center gap-1">
                  Browse courses <ChevronRight size={14} />
                </Link>
              </div>
              <div className="space-y-5">
                {skillTracks.map((track) => (
                  <div key={track.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{track.name}</span>
                      <span className="text-xs text-muted-foreground">{track.completed}/{track.modules} modules</span>
                    </div>
                    <Progress value={track.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mentor Sessions - REAL DATA */}
          <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-5">
                <Heart size={18} className="text-secondary" /> Upcoming Sessions
              </h2>
              <div className="space-y-4">
                {mentorSessions.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No sessions booked yet.{" "}
                    <Link to="/mentors" className="text-primary hover:underline">Find a mentor</Link>
                  </p>
                ) : (
                  mentorSessions.map((session) => (
                    <div key={session.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                      <div className="font-semibold text-sm text-foreground">{session.topic}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-1.5 py-0.5 rounded text-xs font-medium capitalize ${
                          session.status === "confirmed" ? "bg-secondary/10 text-secondary" :
                          session.status === "pending" ? "bg-accent/10 text-accent" :
                          "bg-muted text-muted-foreground"
                        }`}>{session.status}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(session.scheduled_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {new Date(session.scheduled_at).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <Link to="/mentors">
                <Button variant="outline" size="sm" className="w-full mt-4">
                  {mentorSessions.length > 0 ? "View All Sessions" : "Find a Mentor"}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Job Matches - REAL DATA */}
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <Briefcase size={18} className="text-warmth" /> Available Jobs
                </h2>
                <Link to="/jobs" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View all jobs <ChevronRight size={14} />
                </Link>
              </div>
              {jobMatches.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-6">
                  No job postings available yet. Check back soon!
                </p>
              ) : (
                <div className="grid md:grid-cols-3 gap-4">
                  {jobMatches.map((job) => (
                    <div key={job.id} className="p-5 rounded-xl border border-border bg-muted/30 hover:shadow-soft transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                          {job.job_type}
                        </span>
                        <span className="text-xs text-muted-foreground">{job.location}</span>
                      </div>
                      <h3 className="font-semibold text-foreground">{job.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{job.company}</p>
                      <Link to="/jobs">
                        <Button variant="outline" size="sm" className="mt-4 w-full">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div {...fadeIn} transition={{ delay: 0.5 }} className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Continue Learning", icon: BookOpen, link: "/learn", color: "bg-primary/10 text-primary" },
            { label: "Browse Jobs", icon: Briefcase, link: "/jobs", color: "bg-warmth/10 text-warmth" },
            { label: "Find a Mentor", icon: Heart, link: "/mentors", color: "bg-secondary/10 text-secondary" },
            { label: "Reconciliation", icon: BarChart3, link: "/reconciliation", color: "bg-earth/10 text-earth" },
          ].map((action) => (
            <Link key={action.label} to={action.link}>
              <div className="p-4 bg-card border border-border rounded-xl hover:shadow-soft transition-shadow text-center">
                <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mx-auto mb-2`}>
                  <action.icon size={18} />
                </div>
                <span className="text-sm font-medium text-foreground">{action.label}</span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
