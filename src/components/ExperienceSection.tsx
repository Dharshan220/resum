import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInOnScroll, StaggerContainer, StaggerItem } from "./ParallaxSection";
import { Trophy, BookOpen, Rocket, Star } from "lucide-react";
import { assetPath } from "@/lib/assets";

interface AchievementItem {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
  color: string;
  image?: string;
  featured?: boolean;
}

const achievements: AchievementItem[] = [
  {
    icon: Trophy,
    title: "SIH 2025 Finalist",
    description:
      "Selected as a finalist in Smart India Hackathon 2025 — one of India's largest national hackathons organized by the Government of India.",
    badge: "🏆 National Level",
    color: "from-amber-500/20 to-yellow-500/20",
    image: assetPath("images/sih-2025-event.png"),
    featured: true,
  },
  {
    icon: BookOpen,
    title: "IoT & Embedded Systems Courses",
    description:
      "Completed specialized courses in Internet of Things and Embedded Systems, gaining hands-on knowledge of sensor integration, microcontrollers, and real-time systems.",
    badge: "📜 Certified",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Rocket,
    title: "Technical Event Participant",
    description:
      "Actively participated in various technical events, workshops, and hackathons across multiple engineering colleges.",
    badge: "🎪 Events",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: Star,
    title: "Active Project Builder",
    description:
      "Consistently building hands-on projects — from IoT safety bots to web-based bus management systems — applying classroom knowledge to real-world problems.",
    badge: "🛠️ Builder",
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const strengths = [
  { emoji: "🧠", text: "Strong problem-solving skills" },
  { emoji: "⚡", text: "Quick learner and adaptable" },
  { emoji: "💡", text: "Passion for innovation and technology" },
  { emoji: "🤝", text: "Effective team collaborator" },
  { emoji: "🎯", text: "Goal-oriented mindset" },
  { emoji: "📚", text: "Continuous self-improvement" },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="achievements" ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Achievements & Strengths
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Milestones <span className="gradient-text">& Growth</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Highlights from my academic journey, competitions, and personal development.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Achievements Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((item) => (
            <StaggerItem
              key={item.title}
              className={item.featured ? "md:col-span-2" : undefined}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 group hover:border-indigo-500/20 transition-all duration-300 h-full flex flex-col"
              >
                {/* Image at top if exists */}
                {item.image && (
                  <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg -mx-6 -mt-6 mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full object-cover object-top ${
                        item.featured
                          ? "min-h-[320px] h-[420px] sm:min-h-[400px] sm:h-[480px] lg:min-h-[480px] lg:h-[560px]"
                          : "min-h-[200px] h-52"
                      }`}
                    />
                  </div>
                )}
                
                {/* Icon and Content */}
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Strengths */}
        <FadeInOnScroll>
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">💡 My Strengths</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/3 border border-white/5 hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-all"
                >
                  <span className="text-xl">{s.emoji}</span>
                  <span className="text-sm text-slate-300">{s.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        {/* Education Card */}
        <FadeInOnScroll>
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto mt-10 border-indigo-500/10">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              🎓 Education
            </h3>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <BookOpen size={20} className="text-indigo-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">
                  B.E. — Electronics and Communication Engineering
                </h4>
                <p className="text-indigo-400/80 text-sm mt-1">
                  Dhannish Ahmed College of Engineering
                </p>
                <p className="text-slate-500 text-xs mt-1">Currently Pursuing</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
