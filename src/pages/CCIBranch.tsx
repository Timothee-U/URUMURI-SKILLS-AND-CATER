import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Gamepad2, Building2, Camera, ArrowLeft } from "lucide-react";

const CCIBranch = () => {
  // All uploaded images from the cci-branch folder
  const images = [
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.46.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.47.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.48.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.49 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.49.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.50 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.50.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.51.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.52.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.53.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.54 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.54 (2).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.54.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.55 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.55.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.57.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.58 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.58.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.04.59.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.05.00.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.05.01.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.05.13.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.05.14.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.16 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.16.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.18.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.19.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.20 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.20.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.21.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.23.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.24.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.30.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.31 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.31.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.32 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.32.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.33 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.33.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.34.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.44.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.45.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.46 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.46 (2).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.46.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.47 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.47.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.48 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.48.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.50.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.51 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.51 (2).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.51.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.52 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.52 (2).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.52 (3).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.52.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.53 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.53 (2).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.53.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.54 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.54.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.55 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.55.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.56 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.56.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.57 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.57 (2).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.57.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.58 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-26 at 19.21.58.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-27 at 10.00.42 (1).jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-27 at 10.00.42.jpeg",
    "/images/cci-branch/WhatsApp Image 2026-03-27 at 10.00.43.jpeg",
  ];

  const activities = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Building a House for a Survivor",
      description: "We partnered with local communities to build a new home for a genocide survivor, providing them with safe and dignified housing.",
      color: "bg-secondary/20",
      backgroundImage: images[57]
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Inter Campaign Games",
      description: "Organized sports and recreational activities to bring together different communities and promote unity through healthy competition.",
      color: "bg-secondary/20",
      backgroundImage: images[8]
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Parliament Visit & History Learning",
      description: "Visited the Parliament of Rwanda to learn about legislative processes and deepen our understanding of Rwanda's democratic journey.",
      color: "bg-secondary/20",
      backgroundImage: images[17]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Honoring the Fallen Heroes",
      description: "Paid tribute to Rwanda's heroes and martyrs at memorial sites, reflecting on their sacrifices and commitment to peace.",
      color: "bg-secondary/20",
      backgroundImage: images[21]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden">
      {/* Background Animation Elements - Diverse Shapes & Patterns */}
      
      {/* CIRCULAR FLOATING ORBS */}
      {/* Top-left floating orb */}
      <motion.div
        className="absolute top-10 left-10 w-80 h-80 bg-primary/45 rounded-full blur-2xl shadow-2xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Bottom-right floating orb */}
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/45 rounded-full blur-2xl shadow-2xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Center orb - subtle movement */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/35 rounded-full blur-2xl shadow-xl"
        animate={{
          y: [0, 20, -20, 0],
          x: [0, -20, 20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Extra floating orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/30 rounded-full blur-2xl shadow-lg"
        animate={{
          y: [-20, 20, -20],
          x: [20, -20, 20]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-secondary/35 rounded-full blur-2xl shadow-lg"
        animate={{
          y: [20, -20, 20],
          x: [-20, 20, -20]
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* ROTATING RECTANGLES */}
      {/* Top-right rotating rectangle */}
      <motion.div
        className="absolute top-40 right-20 w-48 h-64 bg-gradient-to-r from-primary/40 to-accent/30 blur-xl shadow-lg"
        animate={{
          rotate: [0, 45, 90, 45, 0],
          x: [0, 30, 0, -30, 0],
          y: [0, -30, 0, 30, 0]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Bottom-left rotating rectangle */}
      <motion.div
        className="absolute bottom-40 left-16 w-56 h-40 bg-gradient-to-b from-secondary/38 to-primary/30 blur-xl shadow-lg"
        animate={{
          rotate: [45, -45, 45, 0, 45],
          x: [0, -40, 0, 40, 0],
          y: [0, 40, 0, -40, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* DIAGONAL ANIMATED LINES */}
      {/* Diagonal line - top-left to bottom-right */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-1.5 bg-gradient-to-r from-primary/45 via-accent/35 to-transparent blur-md shadow-lg"
        style={{ transform: "rotate(45deg)" }}
        animate={{
          x: [-400, 800],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Diagonal line - opposite direction */}
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-2 bg-gradient-to-l from-secondary/45 via-primary/30 to-transparent blur-md shadow-lg"
        style={{ transform: "rotate(-45deg)" }}
        animate={{
          x: [400, -800],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* FLOATING TRIANGULAR SHAPES */}
      {/* Triangle - top-center */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-0 h-0 drop-shadow-2xl"
        style={{
          borderLeft: "60px solid transparent",
          borderRight: "60px solid transparent",
          borderBottom: "100px solid rgb(var(--color-primary) / 0.35)",
          filter: "blur(10px)"
        }}
        animate={{
          y: [0, -50, 0],
          rotate: [0, 360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Triangle - bottom-right */}
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-0 h-0 drop-shadow-2xl"
        style={{
          borderLeft: "50px solid transparent",
          borderRight: "50px solid transparent",
          borderBottom: "80px solid rgb(var(--color-secondary) / 0.38)",
          filter: "blur(10px)"
        }}
        animate={{
          y: [0, 40, -20, 0],
          rotate: [360, 180, 0],
          x: [20, -20, 20]
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* PULSING HEXAGONS (using rounded squares for approximation) */}
      {/* Hexagon-like shape - top-right */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-br from-accent/40 to-primary/30 blur-xl shadow-2xl"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
        }}
        animate={{
          scale: [1, 1.4, 0.9, 1],
          rotate: [0, 120, 240, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Organic blob shape - bottom-center */}
      <motion.div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-56 h-56 bg-gradient-to-tl from-primary/40 via-secondary/30 to-accent/35 blur-xl shadow-2xl"
        style={{
          borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%"
        }}
        animate={{
          scale: [1, 1.3, 0.95, 1],
          x: [0, 40, -40, 0],
          y: [0, -50, 50, 0],
          borderRadius: [
            "63% 37% 54% 46% / 55% 48% 52% 45%",
            "40% 60% 30% 70% / 60% 30% 70% 40%",
            "70% 30% 46% 54% / 30% 30% 70% 70%",
            "63% 37% 54% 46% / 55% 48% 52% 45%"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* VERTICAL ANIMATED COLUMNS */}
      {/* Column - left side */}
      <motion.div
        className="absolute left-1/4 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary/0 via-secondary/45 to-accent/0 blur-md shadow-xl"
        animate={{
          x: [-40, 40, -40],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Column - right side */}
      <motion.div
        className="absolute right-1/3 top-0 bottom-0 w-2 bg-gradient-to-b from-accent/0 via-primary/40 to-secondary/0 blur-md shadow-lg"
        animate={{
          x: [40, -40, 40],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 md:px-8 py-20 md:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            CCI Urumuri
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Supporting mental health and community healing for genocide survivors through BPO industry excellence
          </p>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="bg-hope-light border border-border">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-foreground">About CCI Urumuri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* CCI Rwanda Overview */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">CCI Rwanda: Customer Management Excellence</h3>
                <p className="text-foreground leading-relaxed">
                  CCI (Center for Business Process Outsourcing) is one of Rwanda's top providers of customer management services, 
                  supporting both domestic and international clients with world-class business process solutions. Our center drives 
                  economic growth and innovation in Rwanda's emerging tech sector.
                </p>
              </div>

              <div className="h-px bg-border" />

              {/* CCI Urumuri Mission */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">CCI Urumuri: Beyond Business Excellence</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  CCI Urumuri extends our commitment beyond business operations to create a workplace that prioritizes employee 
                  wellbeing, healing, and social consciousness. Our branch is dedicated to:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Mental Health Support */}
                  <div className="bg-white/50 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Employee Mental Health
                    </h4>
                    <p className="text-sm text-foreground">
                      Supporting the psychological and emotional wellbeing of our team members, especially genocide survivors, 
                      through counseling services, wellness programs, and a compassionate workplace culture.
                    </p>
                  </div>

                  {/* Genocide Education */}
                  <div className="bg-white/50 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Historical Awareness
                    </h4>
                    <p className="text-sm text-foreground">
                      Enlightening our employees about the 1994 Genocide against the Tutsi, fostering understanding of Rwanda's 
                      history and the importance of never allowing such atrocities to happen again.
                    </p>
                  </div>

                  {/* Unity & Reconciliation */}
                  <div className="bg-white/50 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Gamepad2 className="w-5 h-5" />
                      Unity & Reconciliation
                    </h4>
                    <p className="text-sm text-foreground">
                      Promoting unity among employees from diverse backgrounds through team-building activities, shared experiences, 
                      and collaborative projects that celebrate our common humanity.
                    </p>
                  </div>

                  {/* Community Impact */}
                  <div className="bg-white/50 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Community Development
                    </h4>
                    <p className="text-sm text-foreground">
                      Taking tangible action through housing initiatives, skills development, and direct support for genocide survivors 
                      and vulnerable communities in Rwanda.
                    </p>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed mt-4 italic">
                  At CCI Urumuri, we believe that true success is measured not only in business growth, but in the healing, 
                  empowerment, and dignity we bring to our employees and communities.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-primary mb-3 block">
              Community Impact
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Community Activities
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Beyond business excellence, we actively contribute to community healing and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full relative rounded-2xl overflow-hidden group border border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={activity.backgroundImage}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 group-hover:to-black/80 transition-all duration-300" />
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${activity.color} flex items-center justify-center`}>
                        {activity.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">{activity.title}</h3>
                    <p className="text-sm leading-relaxed text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-0"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase text-primary mb-3 block">
              Photo Memories
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
              <Camera className="w-8 h-8" />
              Activity Gallery
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              {images.length} moments capturing our community's resilience, unity, and hope
            </p>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: (index % 15) * 0.05,
                  ease: "easeOut"
                }}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute top-2 right-2 bg-secondary/90 text-secondary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CCIBranch;