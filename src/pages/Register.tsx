import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, User, Briefcase, GraduationCap, Heart, Shield, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const roles = [
  { value: "learner" as const, label: "Learner", icon: GraduationCap, desc: "Access skills training and job matching" },
  { value: "employer" as const, label: "Employer", icon: Briefcase, desc: "Post jobs and find inclusive talent" },
  { value: "mentor" as const, label: "Mentor", icon: Heart, desc: "Guide youth through mentorship" },
  { value: "counselor" as const, label: "Counselor", icon: Shield, desc: "Provide mental health support" },
];

const Register = () => {
  const { signUp } = useAuth();
  const [selectedRole, setSelectedRole] = useState<string>("learner");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getDashboardPath = (role: string) => {
    if (role === "admin") return "/admin";
    if (role === "employer") return "/employer";
    if (role === "mentor") return "/mentor-dashboard";
    if (role === "counselor") return "/dashboard";
    return "/dashboard";
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      toast({ title: "Password too short", description: "Password must be at least 8 characters", variant: "destructive" });
      return;
    }
    setLoading(true);

    const { user, error } = await signUp(email, password, fullName, selectedRole);

    setLoading(false);
    if (error) {
      toast({ title: "Registration failed", description: error, variant: "destructive" });
    } else if (user) {
      toast({ title: "Account created!", description: "Welcome to Urumuri!" });
      navigate(getDashboardPath(selectedRole));
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-hero-gradient items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-white/80">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="font-display text-4xl font-bold mb-4 text-white">
            Join the Urumuri Community
          </h1>
          <p className="text-lg leading-relaxed text-white/80">
            Whether you're seeking skills, offering opportunities, or wanting to mentor —
            your journey toward empowerment and reconciliation starts here.
          </p>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Link to="/" className="lg:hidden inline-flex items-center gap-2 mb-6 text-sm font-medium text-muted-foreground">
            <ArrowLeft size={16} />
            Back
          </Link>

          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Create Your Account</h2>
          <p className="text-muted-foreground mb-8">Select your role and get started</p>

          {/* Role selection */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {roles.map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => setSelectedRole(role.value)}
                className={`p-4 rounded-xl border bg-card hover:border-primary hover:shadow-soft transition-all text-left group ${
                  selectedRole === role.value ? "border-primary ring-2 ring-primary/20 shadow-soft" : "border-border"
                }`}
              >
                <role.icon size={20} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-semibold text-sm text-foreground">{role.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{role.desc}</div>
              </button>
            ))}
          </div>

          {/* Form fields */}
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                required
                minLength={8}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2" size="lg" disabled={loading}>
              {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
