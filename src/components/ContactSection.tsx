import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInOnScroll } from "./ParallaxSection";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Send, MapPin, AtSign, Sparkles, Phone } from "lucide-react";
import {
  PHONE_DISPLAY,
  PORTFOLIO_EMAIL,
  WHATSAPP_URL,
  openPortfolioMailto,
} from "@/lib/contact";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [submitStatus, setSubmitStatus] = useState<"idle" | "opened">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openPortfolioMailto(formData);
    setSubmitStatus("opened");
  };

  return (
    <section id="contact" ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Have a project idea or opportunity? I'd love to hear from you.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <FadeInOnScroll direction="right" className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <Sparkles size={20} className="text-indigo-400" />
                  Let's work together
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I'm open to internship opportunities, IoT project collaborations,
                  and roles where I can apply my ECE & embedded systems knowledge.
                </p>
              </div>

              <div className="space-y-5">
                {/* WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Phone size={18} className="text-emerald-400" />
                  </div>
                  <motion.div>
                    <motion.div className="text-xs text-slate-500 uppercase tracking-wider">WhatsApp</motion.div>
                    <motion.div className="text-sm text-slate-300 group-hover:text-emerald-300 transition-colors">
                      {PHONE_DISPLAY}
                    </motion.div>
                  </motion.div>
                </a>

                {/* Email - Clickable */}
                <a
                  href={`mailto:${PORTFOLIO_EMAIL}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <AtSign size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Email</div>
                    <div className="text-sm text-slate-300 group-hover:text-indigo-300 transition-colors">
                      {PORTFOLIO_EMAIL}
                    </div>
                  </div>
                </a>

                {/* LinkedIn - Clickable, opens in new tab */}
                <a
                  href="https://www.linkedin.com/in/dharshan-e-694a82329?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <span className="text-blue-400"><LinkedinIcon /></span>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">LinkedIn</div>
                    <div className="text-sm text-slate-300 group-hover:text-blue-300 transition-colors">
                      Dharshan E
                    </div>
                  </div>
                </a>

                {/* GitHub - Clickable, opens in new tab */}
                <a
                  href="https://github.com/Dharshan220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <span className="text-slate-400 group-hover:text-white transition-colors"><GithubIcon /></span>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">GitHub</div>
                    <div className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      github.com/Dharshan220
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <MapPin size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Location</div>
                    <div className="text-sm text-slate-300">India</div>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-slate-600 flex items-center gap-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to internships & collaborations
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Contact Form */}
          <FadeInOnScroll direction="left" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Internship Opportunity / Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all resize-none"
                />
              </div>

              <LiquidButton variant="default" size="lg" type="submit">
                <Send size={18} />
                Send Message
              </LiquidButton>

              <p className="text-xs text-slate-500 leading-relaxed">
                {submitStatus === "opened" ? (
                  <>
                    Your email app should open with the message ready to send. If it did not open,{" "}
                    <a
                      href={`mailto:${PORTFOLIO_EMAIL}`}
                      className="text-indigo-400 hover:text-indigo-300 underline"
                    >
                      click here to email me directly
                    </a>
                    .
                  </>
                ) : (
                  "Submitting opens your default email app (Gmail, Outlook, etc.) with your message filled in."
                )}
              </p>
            </form>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
