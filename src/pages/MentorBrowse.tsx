import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Star, Clock, BookOpen, Calendar, Filter, Loader2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const expertiseAreas = [
  "Web Development", "Data Science", "Digital Marketing", "Business", 
  "Design", "Career Planning", "Mental Health", "Leadership"
];

// Mock mentors — replace with DB query once mentor_profiles are populated
const mockMentors = [
  { id: "1", name: "Marie Nyiraneza", expertise: ["Career Planning", "Leadership"], bio: "15 years in HR across East Africa. Passionate about youth empowerment.", years_experience: 15, rating: 4.9, total_sessions: 120, is_available: true, avatar: null },
  { id: "2", name: "Jean-Paul Kagame", expertise: ["Web Development", "Data Science"], bio: "Senior engineer at a Kigali tech startup. Open-source contributor.", years_experience: 8, rating: 4.7, total_sessions: 85, is_available: true, avatar: null },
  { id: "3", name: "Claudine Uwimana", expertise: ["Mental Health", "Career Planning"], bio: "Licensed counselor specializing in trauma-informed youth mentorship.", years_experience: 12, rating: 5.0, total_sessions: 200, is_available: true, avatar: null },
  { id: "4", name: "Patrick Habimana", expertise: ["Digital Marketing", "Business"], bio: "Founded two social enterprises in Rwanda. Loves helping youth find their niche.", years_experience: 10, rating: 4.8, total_sessions: 65, is_available: false, avatar: null },
  { id: "5", name: "Grace Mukamana", expertise: ["Design", "Web Development"], bio: "UI/UX designer with a focus on accessible, inclusive digital products.", years_experience: 6, rating: 4.6, total_sessions: 42, is_available: true, avatar: null },
  { id: "6", name: "Emmanuel Nsabimana", expertise: ["Business", "Leadership"], bio: "Management consultant helping organizations build inclusive workplaces.", years_experience: 20, rating: 4.9, total_sessions: 150, is_available: true, avatar: null },
];

const MentorBrowse = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [bookingMentor, setBookingMentor] = useState<string | null>(null);
  const [bookingTopic, setBookingTopic] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);

  const filteredMentors = mockMentors.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.bio.toLowerCase().includes(search.toLowerCase());
    const matchesExpertise = selectedExpertise.length === 0 ||
      m.expertise.some((e) => selectedExpertise.includes(e));
    return matchesSearch && matchesExpertise;
  });

  const toggleExpertise = (area: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleBookSession = async (mentorId: string) => {
    if (!bookingTopic || !bookingDate) {
      toast({ title: "Missing fields", description: "Please fill in topic and date.", variant: "destructive" });
      return;
    }
    setBookingLoading(true);
    // In production, mentor_id would come from mentor_profiles.user_id
    // For now we show the UI flow
    toast({ title: "Session requested!", description: "Your mentor will confirm the session shortly." });
    setBookingLoading(false);
    setBookingMentor(null);
    setBookingTopic("");
    setBookingDate("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-hero-gradient py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Link to="/dashboard" className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-white/80">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3 text-white">
              Find Your Mentor
            </h1>
            <p className="text-lg max-w-2xl text-white/80">
              Browse mentors by expertise and book trauma-informed sessions tailored to your goals.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">
        {/* Search & Filters */}
        <div className="mb-8">
          <div className="relative max-w-md mb-4">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search mentors by name or topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={14} className="text-muted-foreground" />
            {expertiseAreas.map((area) => (
              <button
                key={area}
                onClick={() => toggleExpertise(area)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                  selectedExpertise.includes(area)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <p className="text-sm text-muted-foreground mb-4">{filteredMentors.length} mentors found</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMentors.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-soft transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-lg">
                    {mentor.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{mentor.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Star size={13} className="text-accent fill-accent" />
                    <span className="text-xs font-medium text-foreground">{mentor.rating}</span>
                    <span className="text-xs text-muted-foreground">· {mentor.total_sessions} sessions</span>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  mentor.is_available ? "bg-secondary/10 text-secondary" : "bg-muted text-muted-foreground"
                }`}>
                  {mentor.is_available ? "Available" : "Busy"}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{mentor.bio}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {mentor.expertise.map((e) => (
                  <span key={e} className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">
                    {e}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> {mentor.years_experience} yrs exp.</span>
                <span className="flex items-center gap-1"><BookOpen size={12} /> {mentor.total_sessions} sessions</span>
              </div>

              {bookingMentor === mentor.id ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-3 pt-3 border-t border-border"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">Book a session</span>
                    <button onClick={() => setBookingMentor(null)} className="text-muted-foreground hover:text-foreground">
                      <X size={14} />
                    </button>
                  </div>
                  <Input
                    placeholder="Topic (e.g. Career planning)"
                    value={bookingTopic}
                    onChange={(e) => setBookingTopic(e.target.value)}
                    className="text-sm"
                  />
                  <Input
                    type="datetime-local"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="text-sm"
                  />
                  <Button
                    size="sm"
                    className="w-full"
                    disabled={bookingLoading}
                    onClick={() => handleBookSession(mentor.id)}
                  >
                    {bookingLoading ? <Loader2 className="animate-spin mr-2" size={14} /> : <Calendar size={14} className="mr-2" />}
                    Confirm Booking
                  </Button>
                </motion.div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  disabled={!mentor.is_available}
                  onClick={() => setBookingMentor(mentor.id)}
                >
                  <Calendar size={14} className="mr-2" />
                  {mentor.is_available ? "Book Session" : "Unavailable"}
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No mentors match your filters. Try broadening your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorBrowse;
