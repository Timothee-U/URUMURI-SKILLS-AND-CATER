import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield, Users, Briefcase, Heart, BarChart3, LogOut, User,
  Search, ChevronRight, Trash2, UserCheck, AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

type UserWithRole = {
  user_id: string;
  full_name: string | null;
  location: string | null;
  created_at: string;
  roles: string[];
};

const roleColors: Record<string, string> = {
  learner: "bg-primary/10 text-primary",
  employer: "bg-accent/10 text-accent",
  mentor: "bg-secondary/10 text-secondary",
  counselor: "bg-warmth/10 text-warmth",
  admin: "bg-destructive/10 text-destructive",
};

const AdminPortal = () => {
  const { user, signOut } = useAuth();
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [sessions, setSessions] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    if (!user) return;
    // Mock: assume admin
    setIsAdmin(true);
  }, [user]);

  useEffect(() => {
    if (!isAdmin) return;
    const fetchAll = async () => {
      const [profilesRes, rolesRes, jobsRes, sessionsRes] = await Promise.all([
        Promise.resolve({ data: [] }),
        Promise.resolve({ data: [] }),
        Promise.resolve({ data: [] }),
        Promise.resolve({ data: [] }),
      ]);

      const rolesMap: Record<string, string[]> = {};
      (rolesRes.data || []).forEach((r) => {
        if (!rolesMap[r.user_id]) rolesMap[r.user_id] = [];
        rolesMap[r.user_id].push(r.role);
      });

      const enriched: UserWithRole[] = (profilesRes.data || []).map((p) => ({
        user_id: p.user_id,
        full_name: p.full_name,
        location: p.location,
        created_at: p.created_at,
        roles: rolesMap[p.user_id] || [],
      }));

      setUsers(enriched);
      setJobs(jobsRes.data || []);
      setSessions(sessionsRes.data || []);
      setLoading(false);
    };
    fetchAll();
  }, [isAdmin]);

  if (isAdmin === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center">
          <AlertTriangle size={48} className="text-destructive mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-6">You need admin privileges to access this page.</p>
          <Link to="/dashboard"><Button>Go to Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  const filteredUsers = users.filter(
    (u) =>
      (u.full_name || "").toLowerCase().includes(search.toLowerCase()) ||
      u.roles.some((r) => r.includes(search.toLowerCase()))
  );

  const stats = {
    totalUsers: users.length,
    learners: users.filter((u) => u.roles.includes("learner")).length,
    employers: users.filter((u) => u.roles.includes("employer")).length,
    mentors: users.filter((u) => u.roles.includes("mentor")).length,
    activeJobs: jobs.filter((j) => j.is_active).length,
    totalSessions: sessions.length,
  };

  const fadeIn = { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } };

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
              <Shield size={16} />
              <span>Admin</span>
            </span>
            <Button variant="ghost" size="sm" onClick={signOut} className="text-muted-foreground">
              <LogOut size={16} className="mr-1" /> Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <motion.div {...fadeIn} className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">Admin Portal</h1>
          <p className="text-muted-foreground mt-1">Platform overview and user management</p>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { icon: Users, label: "Total Users", value: stats.totalUsers, color: "text-primary" },
            { icon: User, label: "Learners", value: stats.learners, color: "text-primary" },
            { icon: Briefcase, label: "Employers", value: stats.employers, color: "text-accent" },
            { icon: Heart, label: "Mentors", value: stats.mentors, color: "text-secondary" },
            { icon: Briefcase, label: "Active Jobs", value: stats.activeJobs, color: "text-warmth" },
            { icon: BarChart3, label: "Sessions", value: stats.totalSessions, color: "text-earth" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-4">
              <stat.icon size={18} className={stat.color} />
              <div className="text-2xl font-bold text-foreground mt-2">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="sessions">Mentor Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <div className="bg-card border border-border rounded-xl">
              <div className="p-4 border-b border-border">
                <div className="relative max-w-sm">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search users by name or role..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-medium text-muted-foreground">Name</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Location</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Roles</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr><td colSpan={4} className="p-8 text-center text-muted-foreground">Loading...</td></tr>
                    ) : filteredUsers.length === 0 ? (
                      <tr><td colSpan={4} className="p-8 text-center text-muted-foreground">No users found</td></tr>
                    ) : (
                      filteredUsers.map((u) => (
                        <tr key={u.user_id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium text-foreground">{u.full_name || "—"}</td>
                          <td className="p-4 text-muted-foreground">{u.location || "—"}</td>
                          <td className="p-4">
                            <div className="flex gap-1.5 flex-wrap">
                              {u.roles.map((r) => (
                                <span key={r} className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${roleColors[r] || "bg-muted text-muted-foreground"}`}>
                                  {r}
                                </span>
                              ))}
                              {u.roles.length === 0 && <span className="text-xs text-muted-foreground">No role</span>}
                            </div>
                          </td>
                          <td className="p-4 text-muted-foreground">
                            {new Date(u.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="jobs">
            <div className="space-y-4">
              {jobs.length === 0 ? (
                <div className="bg-card border border-border rounded-xl p-8 text-center text-muted-foreground">
                  No job postings yet
                </div>
              ) : (
                jobs.map((job) => (
                  <div key={job.id} className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{job.title}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          job.is_active ? "bg-secondary/10 text-secondary" : "bg-muted text-muted-foreground"
                        }`}>{job.is_active ? "Active" : "Closed"}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {job.company} · {job.location} · {job.job_type}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(job.created_at).toLocaleDateString()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="sessions">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-medium text-muted-foreground">Topic</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Scheduled</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessions.length === 0 ? (
                      <tr><td colSpan={4} className="p-8 text-center text-muted-foreground">No sessions yet</td></tr>
                    ) : (
                      sessions.map((s) => (
                        <tr key={s.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium text-foreground">{s.topic}</td>
                          <td className="p-4 text-muted-foreground">
                            {new Date(s.scheduled_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${
                              s.status === "confirmed" ? "bg-secondary/10 text-secondary" :
                              s.status === "pending" ? "bg-accent/10 text-accent" :
                              s.status === "cancelled" ? "bg-destructive/10 text-destructive" :
                              "bg-muted text-muted-foreground"
                            }`}>{s.status}</span>
                          </td>
                          <td className="p-4 text-muted-foreground">{s.duration_minutes} min</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPortal;
