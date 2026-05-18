import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInOnScroll } from "./ParallaxSection";
import { Cpu, Lightbulb, Zap, Users } from "lucide-react";
import { assetPath } from "@/lib/assets";

const highlights = [
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    description: "Designing sensor-based systems using Arduino, building smart bots and safety monitoring devices with real-time alerting.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Strong analytical and problem-solving skills — always looking for innovative, practical solutions to real-world challenges.",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "Adaptable and eager to master new technologies. From VLSI basics to web development with TypeScript — I pick up fast.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Active participant in hackathons and technical events. SIH 2025 Finalist — thrives in collaborative, high-pressure environments.",
  },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="about" ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Parallax background elements */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Who is <span className="gradient-text">Dharshan?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              An Electronics & Communication Engineering student driven by curiosity and a passion
              for building things that matter.
            </p>
          </div>
        </FadeInOnScroll>

        {/* About content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Personal info & Image */}
          <FadeInOnScroll direction="right">
            <div className="space-y-6">
              {/* Image Added */}
              <motion.div className="rounded-2xl overflow-hidden shadow-2xl border border-indigo-500/20 aspect-[4/3] sm:aspect-[3/2]">
                <img 
                  src={assetPath("images/about.png")} 
                  alt="Dharshan presenting Arduino hardware at a technical event" 
                  className="w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] object-cover object-center hover:scale-105 transition-transform duration-500" 
                />
              </motion.div>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">🎓 Background</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  I'm <span className="text-white font-medium">Dharshan E</span>, currently pursuing
                  my <span className="text-indigo-400">B.E. in Electronics and Communication Engineering</span> at
                  <span className="text-white"> Dhannish Ahmed College of Engineering</span>.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  My core interest areas are <span className="text-cyan-400">Internet of Things (IoT)</span>,
                  <span className="text-cyan-400"> Embedded Systems</span>, and <span className="text-cyan-400">Artificial Intelligence</span>.
                  I enjoy designing and developing practical solutions that can create real-world impact.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  I'm passionate about learning new technologies, working on innovative projects,
                  and continuously improving my technical and problem-solving skills. I also have
                  hands-on experience building <span className="text-white">web projects</span> using TypeScript and modern tools.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "3+", label: "Projects Built" },
                  { number: "SIH", label: "2025 Finalist" },
                  { number: "ECE", label: "B.E. Student" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          {/* Right: Strengths */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <FadeInOnScroll key={item.title} delay={index * 0.1} direction="left">
                <div className="glass-card rounded-xl p-6 flex gap-5 group hover:border-indigo-500/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <item.icon size={22} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>

        {/* Career Objective */}
        <FadeInOnScroll>
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto text-center border-indigo-500/10">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center justify-center gap-2">
              🎯 Career Objective
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Motivated Electronics and Communication Engineering student with a strong interest in IoT,
              Embedded Systems, and Artificial Intelligence. Seeking opportunities to apply technical skills,
              gain practical experience, and contribute to innovative projects.
            </p>
          </div>
        </FadeInOnScroll>
      </div>

      <div className="section-divider mt-16" />
    </section>
  );
}
