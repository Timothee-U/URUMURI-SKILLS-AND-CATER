import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Briefcase, Plus, Users, TrendingUp, Eye, BarChart3,
  LogOut, User, ChevronRight, X, Loader2, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

// Mock data — replace with DB queries once job_postings are populated
const mockJobs = [
  { id: "1", title: "Junior Web Developer", location: "Kigali", job_type: "Full-time", applications: 12, status: "active", posted: "Mar 10, 2026" },
  { id: "2", title: "Data Analyst Intern", location: "Kigali", job_type: "Internship", applications: 28, status: "active", posted: "Mar 5, 2026" },
  { id: "3", title: "UX Designer", location: "Remote", job_type: "Contract", applications: 8, status: "closed", posted: "Feb 20, 2026" },
];

const mockApplicants = [
  { id: "a1", name: "Alice M.", job: "Junior Web Developer", status: "pending", match: 92, applied: "Mar 12, 2026" },
  { id: "a2", name: "Bob K.", job: "Junior Web Developer", status: "shortlisted", match: 88, applied: "Mar 11, 2026" },
  { id: "a3", name: "Claire N.", job: "Data Analyst Intern", status: "reviewed", match: 95, applied: "Mar 8, 2026" },
  { id: "a4", name: "David H.", job: "Data Analyst Intern", status: "pending", match: 78, applied: "Mar 9, 2026" },
  { id: "a5", name: "Eve R.", job: "Junior Web Developer", status: "rejected", match: 65, applied: "Mar 13, 2026" },
];

const statusColors: Record<string, string> = {
  pending: "bg-accent/10 text-accent",
  reviewed: "bg-primary/10 text-primary",
  shortlisted: "bg-secondary/10 text-secondary",
  rejected: "bg-destructive/10 text-destructive",
  hired: "bg-secondary/10 text-secondary",
};

const EmployerDashboard = () => {
  const { user, signOut } = useAuth();
  const [showPostForm, setShowPostForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "", company: "", location: "Kigali", job_type: "Full-time", description: "", salary_range: "", requirements: "",
  });
  const [posting, setPosting] = useState(false);

  const handlePostJob = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.company || !formData.description) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setPosting(true);

    // Mock posting
    await new Promise(resolve => setTimeout(resolve, 1000));
    const error = null;

    setPosting(false);
    if (error) {
      toast({ title: "Error posting job", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Job posted!", description: "Your job listing is now live." });
      setShowPostForm(false);
      setFormData({ title: "", company: "", location: "Kigali", job_type: "Full-time", description: "", salary_range: "", requirements: "" });
    }
  };

  const fadeIn = { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top nav */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">U</span>
            </div>
            <span className="font-bold text-xl text-foreground">Urumuri</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <User size={16} />
              <span>{user?.email?.split("@")[0]}</span>
              <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">Employer</span>
            </span>
            <Button variant="ghost" size="sm" onClick={signOut} className="text-muted-foreground">
              <LogOut size={16} className="mr-1" /> Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <motion.div {...fadeIn} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Employer Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage job postings, track applicants, and view analytics</p>
          </div>
          <Button onClick={() => setShowPostForm(!showPostForm)} className="bg-primary text-primary-foreground hover:bg-primary/90">
            {showPostForm ? <X size={16} className="mr-2" /> : <Plus size={16} className="mr-2" />}
            {showPostForm ? "Cancel" : "Post New Job"}
          </Button>
        </motion.div>

        {/* Post Job Form */}
        {showPostForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mb-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-display text-lg font-bold text-foreground mb-4">Create Job Posting</h2>
              <form onSubmit={handlePostJob} className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Job Title *</label>
                  <Input value={formData.title} onChange={(e) => setFormData(d => ({...d, title: e.target.value}))} placeholder="e.g. Junior Web Developer" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name *</label>
                  <Input value={formData.company} onChange={(e) => setFormData(d => ({...d, company: e.target.value}))} placeholder="e.g. Kigali Tech Hub" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Location</label>
                  <Input value={formData.location} onChange={(e) => setFormData(d => ({...d, location: e.target.value}))} placeholder="e.g. Kigali" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Job Type</label>
                  <select
                    value={formData.job_type}
                    onChange={(e) => setFormData(d => ({...d, job_type: e.target.value}))}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {["Full-time","Part-time","Internship","Contract","Remote"].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(d => ({...d, description: e.target.value}))}
                    placeholder="Describe the role, responsibilities, and what you're looking for..."
                    required
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Salary Range</label>
                  <Input value={formData.salary_range} onChange={(e) => setFormData(d => ({...d, salary_range: e.target.value}))} placeholder="e.g. 500,000 - 800,000 RWF" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Requirements (comma-separated)</label>
                  <Input value={formData.requirements} onChange={(e) => setFormData(d => ({...d, requirements: e.target.value}))} placeholder="e.g. React, TypeScript, 1yr exp" />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" disabled={posting} className="bg-primary text-primary-foreground hover:bg-primary/90">
                    {posting ? <Loader2 className="animate-spin mr-2" size={16} /> : <Briefcase size={16} className="mr-2" />}
                    Publish Job
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Briefcase, label: "Active Jobs", value: "2", color: "text-primary" },
            { icon: Users, label: "Total Applicants", value: "48", color: "text-secondary" },
            { icon: Eye, label: "Job Views", value: "312", color: "text-accent" },
            { icon: TrendingUp, label: "Hire Rate", value: "24%", color: "text-primary" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-5">
              <stat.icon size={20} className={stat.color} />
              <div className="text-2xl font-bold text-foreground mt-2">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList>
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="applicants">Applicant Tracking</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs">
            <div className="space-y-4">
              {mockJobs.map((job, i) => (
                <motion.div key={job.id} {...fadeIn} transition={{ delay: i * 0.06 }}
                  className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{job.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        job.status === "active" ? "bg-secondary/10 text-secondary" : "bg-muted text-muted-foreground"
                      }`}>{job.status}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin size={13} /> {job.location}</span>
                      <span>{job.job_type}</span>
                      <span>Posted {job.posted}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{job.applications}</div>
                      <div className="text-xs text-muted-foreground">applicants</div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye size={14} className="mr-1" /> View
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applicants">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-medium text-muted-foreground">Applicant</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Position</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Match</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Applied</th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockApplicants.map((app) => (
                      <tr key={app.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium text-foreground">{app.name}</td>
                        <td className="p-4 text-muted-foreground">{app.job}</td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                            {app.match}%
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[app.status]}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="p-4 text-muted-foreground">{app.applied}</td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm"><ChevronRight size={14} /></Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 size={18} className="text-primary" /> Applications Over Time
                </h3>
                <div className="space-y-3">
                  {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, i) => {
                    const values = [8, 15, 12, 13];
                    return (
                      <div key={week} className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground w-16">{week}</span>
                        <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(values[i] / 20) * 100}%` }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                        <span className="text-xs font-medium text-foreground w-6 text-right">{values[i]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-secondary" /> Top Performing Jobs
                </h3>
                <div className="space-y-4">
                  {mockJobs.filter(j => j.status === "active").map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div>
                        <div className="font-semibold text-sm text-foreground">{job.title}</div>
                        <div className="text-xs text-muted-foreground">{job.applications} applicants</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-secondary">{Math.round(job.applications * 8.5)}</div>
                        <div className="text-xs text-muted-foreground">views</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EmployerDashboard;
