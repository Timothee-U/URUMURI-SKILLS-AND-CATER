import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart, Users, Calendar, Clock, Star, LogOut, User,
  ChevronRight, BookOpen, TrendingUp, CheckCircle, XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const MentorDashboard = () => {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<{ full_name: string | null } | null>(null);
  const [mentorProfile, setMentorProfile] = useState<any>(null);
  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const [profileRes, mentorRes, sessionsRes] = await Promise.all([
        /* removed supabase call */
        /* removed supabase call */
        /* removed supabase call */
      ]);
      setProfile(profileRes.data);
      setMentorProfile(mentorRes.data);
      setSessions(sessionsRes.data || []);
      setLoading(false);
    };
    fetchData();
  }, [user]);

  const displayName = profile?.full_name || user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Mentor";

  const handleSessionAction = async (sessionId: string, status: string) => {
    const { error } = await /* removed supabase call */;
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setSessions((prev) => prev.map((s) => (s.id === sessionId ? { ...s, status } : s)));
      toast({ title: `Session ${status}` });
    }
  };

  const setupProfile = async () => {
    const { error } = await /* removed supabase call */
      user_id: user!.id,
      expertise: [],
      bio: "",
    }]);
    if (error && error.code !== "23505") {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      const { data } = await /* removed supabase call */;
      setMentorProfile(data);
      toast({ title: "Profile created!" });
    }
  };

  const fadeIn = { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } };

  const pendingSessions = sessions.filter((s) => s.status === "pending");
  const confirmedSessions = sessions.filter((s) => s.status === "confirmed");

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
            <span className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <User size={16} />
              <span>{displayName}</span>
              <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">Mentor</span>
            </span>
            <Button variant="ghost" size="sm" onClick={signOut} className="text-muted-foreground">
              <LogOut size={16} className="mr-1" /> Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <motion.div {...fadeIn} className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">
            Welcome, {displayName} 🌱
          </h1>
          <p className="text-muted-foreground mt-1">Manage your mentorship sessions and profile</p>
        </motion.div>

        {!mentorProfile && !loading && (
          <motion.div {...fadeIn} className="mb-8 p-6 bg-card border border-border rounded-xl text-center">
            <Heart size={32} className="text-secondary mx-auto mb-3" />
            <h2 className="font-display text-lg font-bold text-foreground mb-2">Set Up Your Mentor Profile</h2>
            <p className="text-muted-foreground text-sm mb-4">Create your profile so learners can find and book sessions with you.</p>
            <Button onClick={setupProfile} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Create Mentor Profile
            </Button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: "Total Sessions", value: String(mentorProfile?.total_sessions || 0), color: "text-primary" },
            { icon: Star, label: "Rating", value: mentorProfile?.rating ? `${mentorProfile.rating}/5` : "N/A", color: "text-accent" },
            { icon: Calendar, label: "Pending Requests", value: String(pendingSessions.length), color: "text-warmth" },
            { icon: TrendingUp, label: "Upcoming", value: String(confirmedSessions.length), color: "text-secondary" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-5">
              <stat.icon size={20} className={stat.color} />
              <div className="text-2xl font-bold text-foreground mt-2">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Pending requests */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-5">
                <Clock size={18} className="text-warmth" /> Session Requests
              </h2>
              {pendingSessions.length === 0 ? (
                <p className="text-sm text-muted-foreground py-4 text-center">No pending requests</p>
              ) : (
                <div className="space-y-3">
                  {pendingSessions.map((session) => (
                    <div key={session.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                      <div className="font-semibold text-sm text-foreground">{session.topic}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {new Date(session.scheduled_at).toLocaleDateString("en-US", {
                          weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
                        })}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline" className="text-secondary border-secondary/30 hover:bg-secondary/10"
                          onClick={() => handleSessionAction(session.id, "confirmed")}>
                          <CheckCircle size={14} className="mr-1" /> Accept
                        </Button>
                        <Button size="sm" variant="outline" className="text-destructive border-destructive/30 hover:bg-destructive/10"
                          onClick={() => handleSessionAction(session.id, "cancelled")}>
                          <XCircle size={14} className="mr-1" /> Decline
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Upcoming confirmed */}
          <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-5">
                <Calendar size={18} className="text-primary" /> Upcoming Sessions
              </h2>
              {confirmedSessions.length === 0 ? (
                <p className="text-sm text-muted-foreground py-4 text-center">No upcoming sessions</p>
              ) : (
                <div className="space-y-3">
                  {confirmedSessions.map((session) => (
                    <div key={session.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                      <div className="font-semibold text-sm text-foreground">{session.topic}</div>
                      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(session.scheduled_at).toLocaleDateString("en-US", {
                            weekday: "short", month: "short", day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {new Date(session.scheduled_at).toLocaleTimeString("en-US", {
                            hour: "2-digit", minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick actions */}
        <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Browse Mentees", icon: Users, link: "/mentors", color: "bg-primary/10 text-primary" },
            { label: "Learning Hub", icon: BookOpen, link: "/learn", color: "bg-secondary/10 text-secondary" },
            { label: "Reconciliation", icon: Heart, link: "/reconciliation", color: "bg-warmth/10 text-warmth" },
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

export default MentorDashboard;
