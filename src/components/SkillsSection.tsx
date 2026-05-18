import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FadeInOnScroll, StaggerContainer, StaggerItem } from "./ParallaxSection";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "C Programming", level: 85, color: "#a8b4d7" },
      { name: "Python (Basics)", level: 55, color: "#3776ab" },
      { name: "TypeScript", level: 50, color: "#3178c6" },
    ],
  },
  {
    title: "Core Areas",
    icon: "⚡",
    skills: [
      { name: "Internet of Things (IoT)", level: 90, color: "#22d3ee" },
      { name: "Embedded Systems", level: 85, color: "#10b981" },
      { name: "VLSI (Basics)", level: 50, color: "#a855f7" },
      { name: "Artificial Intelligence", level: 45, color: "#f59e0b" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Arduino IDE", level: 92, color: "#00979d" },
      { name: "Proteus", level: 75, color: "#2496ed" },
      { name: "MATLAB (Basic)", level: 50, color: "#e16737" },
      { name: "Git & GitHub", level: 70, color: "#f05032" },
      { name: "VS Code", level: 85, color: "#007acc" },
    ],
  },
];

const techTags = [
  "Arduino", "IoT", "Embedded C", "Sensors", "C Programming",
  "Python", "TypeScript", "Proteus", "MATLAB", "Git",
  "GitHub", "VS Code", "VLSI", "PCB Design", "AI/ML Basics",
  "Gas Sensors", "Temperature Sensors", "Microcontrollers", "Automation",
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
        <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
            boxShadow: `0 0 10px ${skill.color}40`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="skills" ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Technical Skills
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              My Tech <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              The tools, languages, and technologies I use to bring hardware & software ideas to life.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Skills grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <SkillBar key={skill.name} skill={skill} index={idx} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Floating tech badges */}
        <FadeInOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techTags.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
