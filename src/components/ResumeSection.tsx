import { useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInOnScroll } from "./ParallaxSection";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const handleDownloadPDF = useCallback(() => {
    const resumeEl = resumeRef.current;
    if (!resumeEl) return;

    // Open print dialog which allows "Save as PDF"
    const printWindow = window.open("", "_blank", "width=800,height=1100");
    if (!printWindow) {
      alert("Please allow popups to download the resume as PDF.");
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Dharshan E — Resume</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          @page {
            size: A4;
            margin: 0;
          }
          
          body {
            font-family: 'Inter', -apple-system, sans-serif;
            color: #1e293b;
            background: #ffffff;
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            padding: 24px 30px;
            font-size: 11px;
            line-height: 1.5;
          }

          .header { text-align: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid #6366f1; }
          .header h1 { font-size: 26px; font-weight: 700; color: #1e1b4b; letter-spacing: -0.5px; margin-bottom: 4px; }
          .header p.subtitle { font-size: 12px; color: #6366f1; font-weight: 500; margin-bottom: 8px; }
          .header .contacts { font-size: 10px; color: #475569; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
          .header .contacts a { color: #6366f1; text-decoration: none; }

          .section { margin-bottom: 14px; }
          .section-title { font-size: 13px; font-weight: 700; color: #1e1b4b; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
          
          .objective { font-size: 11px; color: #475569; line-height: 1.6; }
          
          .edu-item h3 { font-size: 12px; font-weight: 600; color: #1e293b; }
          .edu-item p { font-size: 10.5px; color: #64748b; }

          .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 20px; }
          .skill-category h4 { font-size: 11px; font-weight: 600; color: #334155; margin-bottom: 3px; }
          .skill-category ul { list-style: none; padding: 0; }
          .skill-category li { font-size: 10.5px; color: #475569; padding: 1px 0; display: flex; align-items: center; gap: 4px; }
          .skill-category li::before { content: '▸'; color: #6366f1; font-size: 8px; }

          .project { margin-bottom: 10px; }
          .project h3 { font-size: 12px; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 4px; }
          .project p { font-size: 10.5px; color: #475569; margin: 2px 0; }
          .project .tech { font-size: 9.5px; color: #6366f1; font-weight: 500; }

          .achievements ul { list-style: none; padding: 0; }
          .achievements li { font-size: 10.5px; color: #475569; padding: 2px 0; display: flex; align-items: flex-start; gap: 5px; }
          .achievements li::before { content: '★'; color: #f59e0b; font-size: 9px; margin-top: 2px; }

          .strengths { display: flex; flex-wrap: wrap; gap: 6px; }
          .strengths span { font-size: 10px; color: #475569; padding: 3px 10px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc; }

          .contact-bottom { text-align: center; margin-top: 12px; padding-top: 10px; border-top: 1px solid #e2e8f0; font-size: 9px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>DHARSHAN E</h1>
          <p class="subtitle">ECE Student · IoT & Embedded Systems · AI Enthusiast</p>
          <div class="contacts">
            <span>📧 <a href="mailto:dharshane21@gmail.com">dharshane21@gmail.com</a></span>
            <span>🔗 <a href="https://www.linkedin.com/in/dharshan-e-694a82329?utm_source=share_via&utm_content=profile&utm_medium=member_android">LinkedIn</a></span>
            <span>💻 <a href="https://github.com/Dharshan220">github.com/Dharshan220</a></span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">🎯 Career Objective</div>
          <p class="objective">Motivated Electronics and Communication Engineering student with a strong interest in IoT, Embedded Systems, and Artificial Intelligence. Seeking opportunities to apply technical skills, gain practical experience, and contribute to innovative projects.</p>
        </div>

        <div class="section">
          <div class="section-title">🎓 Education</div>
          <div class="edu-item">
            <h3>B.E. — Electronics and Communication Engineering</h3>
            <p>Dhannish Ahmed College of Engineering · Currently Pursuing</p>
          </div>
        </div>

        <div class="section">
          <div class="section-title">🛠 Technical Skills</div>
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Programming Languages</h4>
              <ul><li>C Programming</li><li>Python (Basics)</li></ul>
            </div>
            <div class="skill-category">
              <h4>Core Areas</h4>
              <ul><li>Internet of Things (IoT)</li><li>Embedded Systems</li><li>VLSI (Basics)</li></ul>
            </div>
            <div class="skill-category">
              <h4>Tools & Technologies</h4>
              <ul><li>Arduino IDE</li><li>Proteus</li><li>MATLAB (Basic)</li><li>Git & GitHub</li></ul>
            </div>
            <div class="skill-category">
              <h4>Web Development</h4>
              <ul><li>VS Code</li><li>TypeScript</li><li>Live Tracking Tech</li></ul>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">📂 Projects</div>
          <div class="project">
            <h3>🔹 IoT Smart Delivery & Safety Bot</h3>
            <p>Developed a smart bot for delivering essentials within apartments. Integrated sensors for detecting gas leaks and fire hazards. Focused on improving safety and automation.</p>
            <p class="tech">Technologies: Arduino, Sensors, IoT</p>
          </div>
          <div class="project">
            <h3>🔹 Fire & Gas Detection System</h3>
            <p>Designed a system to detect fire and gas leakage in real time. Alerts users to prevent accidents and ensure safety.</p>
            <p class="tech">Technologies: Arduino, Gas Sensor, Temperature Sensor</p>
          </div>
          <div class="project">
            <h3>🔹 Bus Management System (Web)</h3>
            <p>Web project to manage bus details with routes & driver information. Features live tracking technologies. Built with VS Code & TypeScript.</p>
            <p class="tech">Technologies: TypeScript, VS Code, Live Tracking</p>
          </div>
        </div>

        <div class="section achievements">
          <div class="section-title">🏆 Achievements</div>
          <ul>
            <li>SIH 2025 Finalist — Smart India Hackathon (National Level)</li>
            <li>Completed courses in IoT & Embedded Systems</li>
            <li>Active learner and project builder</li>
            <li>Participated in multiple technical events & hackathons</li>
          </ul>
        </div>

        <div class="section">
          <div class="section-title">💡 Strengths</div>
          <div class="strengths">
            <span>Problem Solving</span>
            <span>Quick Learner</span>
            <span>Adaptable</span>
            <span>Innovation</span>
            <span>Team Collaboration</span>
            <span>Goal-Oriented</span>
          </div>
        </div>

        <div class="contact-bottom">
          dharshane21@gmail.com · linkedin.com/in/dharshan-e-694a82329?utm_source=share_via&utm_content=profile&utm_medium=member_android · github.com/Dharshan220
        </div>
      </body>
      </html>
    `);

    printWindow.document.close();
    // Wait for fonts to load then print
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 800);
  }, []);

  return (
    <section id="resume" ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Resume
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg mb-8">
              View my complete resume below. Click the button to download it as a one-page PDF.
            </p>
            <LiquidButton variant="glow" size="lg" onClick={handleDownloadPDF}>
              <Download size={18} />
              Download as PDF
            </LiquidButton>
          </div>
        </FadeInOnScroll>

        {/* Resume Preview Card */}
        <FadeInOnScroll>
          <div
            ref={resumeRef}
            className="glass-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto border-indigo-500/10"
          >
            {/* Resume Header */}
            <div className="text-center mb-6 pb-5 border-b border-white/10">
              <h1 className="text-3xl font-bold text-white mb-1">DHARSHAN E</h1>
              <p className="text-indigo-400 font-medium text-sm mb-3">
                ECE Student · IoT & Embedded Systems · AI Enthusiast
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
                <a href="mailto:dharshane21@gmail.com" className="hover:text-indigo-400 transition-colors">
                  📧 dharshane21@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/dharshan-e-694a82329?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  🔗 LinkedIn
                </a>
                <a
                  href="https://github.com/Dharshan220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  💻 github.com/Dharshan220
                </a>
              </div>
            </div>

            {/* Objective */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <FileText size={14} className="text-indigo-400" />
                Career Objective
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Motivated Electronics and Communication Engineering student with a strong interest in IoT,
                Embedded Systems, and Artificial Intelligence. Seeking opportunities to apply technical skills,
                gain practical experience, and contribute to innovative projects.
              </p>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">🎓 Education</h3>
              <div>
                <p className="text-white text-sm font-medium">B.E. — Electronics and Communication Engineering</p>
                <p className="text-indigo-400/70 text-xs">Dhannish Ahmed College of Engineering · Currently Pursuing</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">🛠 Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-300 font-medium mb-1">Programming</p>
                  <p className="text-slate-500">C Programming, Python (Basics)</p>
                </div>
                <div>
                  <p className="text-slate-300 font-medium mb-1">Core Areas</p>
                  <p className="text-slate-500">IoT, Embedded Systems, VLSI (Basics)</p>
                </div>
                <div>
                  <p className="text-slate-300 font-medium mb-1">Tools</p>
                  <p className="text-slate-500">Arduino IDE, Proteus, MATLAB, Git & GitHub</p>
                </div>
                <div>
                  <p className="text-slate-300 font-medium mb-1">Web Dev</p>
                  <p className="text-slate-500">VS Code, TypeScript, Live Tracking</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">📂 Projects</h3>
              <div className="space-y-3">
                {[
                  {
                    name: "IoT Smart Delivery & Safety Bot",
                    desc: "Smart bot for apartment deliveries with gas leak & fire detection.",
                    tech: "Arduino, Sensors, IoT",
                  },
                  {
                    name: "Fire & Gas Detection System",
                    desc: "Real-time fire & gas leak detection with instant alerts.",
                    tech: "Arduino, Gas Sensor, Temperature Sensor",
                  },
                  {
                    name: "Bus Management System",
                    desc: "Web app for bus routes, driver details, and live tracking.",
                    tech: "TypeScript, VS Code, Live Tracking",
                  },
                ].map((p) => (
                  <div key={p.name}>
                    <p className="text-slate-300 text-sm font-medium">🔹 {p.name}</p>
                    <p className="text-slate-500 text-xs">{p.desc}</p>
                    <p className="text-indigo-400/60 text-xs mt-0.5">Tech: {p.tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">🏆 Achievements</h3>
              <ul className="space-y-1 text-xs text-slate-400">
                <li className="flex items-center gap-2"><span className="text-amber-400">★</span> SIH 2025 Finalist (National Level)</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">★</span> Completed courses in IoT & Embedded Systems</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">★</span> Active learner and project builder</li>
              </ul>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">💡 Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Quick Learner", "Adaptable", "Innovation", "Team Player", "Goal-Oriented"].map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Download CTA */}
        <FadeInOnScroll>
          <div className="text-center mt-8">
            <p className="text-slate-600 text-sm mb-4">
              Use <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-xs text-slate-400">Ctrl + P</kbd> →
              <span className="text-slate-400"> "Save as PDF"</span> for one-page format
            </p>
            <LiquidButton variant="default" size="md" onClick={handleDownloadPDF}>
              <Download size={16} />
              Save as PDF
            </LiquidButton>
          </div>
        </FadeInOnScroll>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
