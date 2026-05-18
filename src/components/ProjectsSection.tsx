import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInOnScroll, StaggerContainer, StaggerItem } from "./ParallaxSection";
import { FolderOpen } from "lucide-react";
import { assetPath } from "@/lib/assets";

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  icon: string;
  highlights: string[];
  image?: string;
  imageAside?: boolean;
  imageObjectPosition?: string;
}

const projects: Project[] = [
  {
    title: "IoT Smart Delivery & Safety Bot",
    description:
      "Developed a smart bot for delivering essentials within apartments. Integrated sensors for detecting gas leaks and fire hazards. Focused on improving safety and automation in residential environments.",
    tags: ["Arduino", "Sensors", "IoT", "Embedded C"],
    gradient: "from-cyan-600/20 to-blue-600/20",
    icon: "🤖",
    image: assetPath("images/iot-delivery-bot.png"),
    imageAside: true,
    imageObjectPosition: "center",
    highlights: [
      "Autonomous delivery within apartments",
      "Real-time gas leak & fire detection",
      "Safety-first automation design",
    ],
  },
  {
    title: "Fire & Gas Detection System",
    description:
      "Designed a system to detect fire and gas leakage in real time. The system alerts users immediately to prevent accidents and ensure safety in homes and industrial environments.",
    tags: ["Arduino", "Gas Sensor", "Temperature Sensor", "IoT"],
    gradient: "from-red-600/20 to-orange-600/20",
    icon: "🔥",
    image: assetPath("images/fire-gas-detection.png"),
    highlights: [
      "Real-time fire & gas monitoring",
      "Instant alert notifications",
      "Life-safety focused design",
    ],
  },
  {
    title: "Bus Management System",
    description:
      "A web-based project used to manage bus details with respective routes and driver information. Features include live tracking of buses for efficient fleet management.",
    tags: ["VS Code", "TypeScript", "Web Dev", "Live Tracking"],
    gradient: "from-indigo-600/20 to-purple-600/20",
    icon: "🚌",
    image: assetPath("images/bus-management.png"),
    imageObjectPosition: "top",
    highlights: [
      "Route & driver details management",
      "Live bus tracking interface",
      "Built with TypeScript & modern tools",
    ],
  },
];

const PROJECT_IMAGE_HEIGHT = "min-h-[280px] sm:min-h-[320px] md:min-h-[360px]";
const PROJECT_IMAGE_ASIDE_HEIGHT = "min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]";

function ProjectImage({
  project,
  className = PROJECT_IMAGE_HEIGHT,
}: {
  project: Project;
  className?: string;
}) {
  if (!project.image) return null;

  return (
    <motion.div
      className={`relative bg-gradient-to-br ${project.gradient} overflow-hidden ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        style={{ objectPosition: project.imageObjectPosition ?? "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent opacity-35" />
    </motion.div>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <FolderOpen size={16} className="text-indigo-400" />
        <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

      <ul className="space-y-1.5 mb-5 flex-1">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-slate-500">
            <span className="text-emerald-400 mt-0.5">▸</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-slate-400 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section id="projects" ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <motion.div
          className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInOnScroll>
          <motion.div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              My Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Hands-on projects built across IoT, Embedded Systems, and Web Development.
            </p>
          </motion.div>
        </FadeInOnScroll>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <StaggerItem
              key={project.title}
              className={project.imageAside ? "md:col-span-2" : undefined}
            >
              <motion.div
                whileHover={{ y: -8, scale: project.imageAside ? 1.01 : 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col"
              >
                {project.imageAside && project.image ? (
                  <motion.div className="flex flex-col sm:flex-row">
                    <ProjectImage
                      project={project}
                      className={`sm:w-[50%] ${PROJECT_IMAGE_ASIDE_HEIGHT}`}
                    />
                    <ProjectBody project={project} />
                  </motion.div>
                ) : (
                  <>
                    {project.image ? (
                      <ProjectImage project={project} />
                    ) : (
                      <motion.div
                        className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                      >
                        <motion.div className="absolute inset-0 bg-grid opacity-30" />
                        <motion.div
                          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="text-7xl z-10 drop-shadow-lg"
                        >
                          {project.icon}
                        </motion.div>
                        <motion.div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60" />
                      </motion.div>
                    )}
                    <ProjectBody project={project} />
                  </>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
