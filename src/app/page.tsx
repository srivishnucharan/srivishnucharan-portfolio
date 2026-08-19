"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconBriefcase,
  IconCertificate,
  IconCode,
  IconTerminal,
  IconUser,
  IconArrowUpRight,
  IconDownload,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Smart Library Management Portal",
      challenge: "Slow and manual physical book logging, tracking, and reservations made library administration slow and prone to errors.",
      solution: "Engineered a real-time book reservation and inventory platform with secure user authentication and automated tracking databases.",
      tech: ["React", "Supabase", "CSS Grid", "API Design"],
      link: "https://github.com/srivishnucharan/library-management",
      isWide: true,
      glow: "from-emerald-500/10 to-teal-500/10",
    },
    {
      title: "Real-Time Trading System",
      challenge: "High-latency stock pricing updates in standard mock trading apps made quick sim-trading actions laggy and unrealistic.",
      solution: "Built a low-latency web dashboard displaying live market fluctuations, enabling instantaneous mock buy/sell trade triggers.",
      tech: ["React", "WebSockets", "Financial APIs", "Tailwind CSS"],
      link: "https://github.com/srivishnucharan/trading-system",
      isWide: false,
    },
    {
      title: "Interactive Literacy Platform",
      challenge: "Traditional digital reading assignments lacked engagement and failed to motivate young learners effectively.",
      solution: "Developed a gamified reading and literacy app featuring progress metrics, interactive assignments, and achievement badges.",
      tech: ["React", "Firebase", "Realtime DB", "Tailwind CSS"],
      link: "https://github.com/srivishnucharan/literacy-platform",
      isWide: false,
    },
    {
      title: "Operational Workflow Tools",
      challenge: "Manual developer and QA testing processes created major deployment bottlenecks across microservice pipelines.",
      solution: "Created custom workflow automations and REST API integrations to programmatically trigger test suites and track results.",
      tech: ["React", "Supabase", "Node.js", "REST APIs"],
      link: "https://github.com/srivishnucharan/workflow-tools",
      isWide: true,
      glow: "from-blue-500/10 to-indigo-500/10",
    },
  ];

  const experience = [
    {
      role: "Associate Director",
      company: "Verizon",
      period: "July 2024 - May 2026",
      location: "Hyderabad",
      highlights: [
        "Led enterprise-scale billing modernization initiative involving migration of 45M+ wireless customers from legacy mainframe billing systems to modern open platforms.",
        "Architected AI-enabled parallel billing validation framework ensuring byte-level production accuracy and revenue integrity.",
        "Implemented Agentic AI orchestration integrating Billing Applications with JIRA, GitHub, databases, and QTest via MCP to transform SDLC/STLC workflows into autonomous AI-assisted delivery pipelines.",
        "Directed a $14M billing modernization program, reducing testing turnaround time by 93% and improving delivery velocity by 3x.",
        "Partnered with executive leadership on AI-driven engineering frameworks that reduced vendor dependency and delivered $8.8M in annual efficiencies.",
      ],
    },
    {
      role: "Senior Information Technology Manager",
      company: "Verizon",
      period: "August 2020 - July 2024",
      location: "Hyderabad",
      highlights: [
        "Managed enterprise production support operations for US customer success and sales platforms, leading a 45-member offshore operations team.",
        "Architected a BERT-based triage model that lifted triage efficiency to 91% and pushed auto-resolution to 69%.",
        "Directed ITIL service management practices including incident triage, root cause governance, change approvals, and release coordination.",
        "Governed building a workforce scheduler, reducing ticket assignment time to under 5 minutes.",
      ],
    },
    {
      role: "Information Technology Quality Assurance Manager",
      company: "Verizon",
      period: "July 2007 - August 2020",
      location: "Hyderabad",
      highlights: [
        "Led agile quality engineering teams of 15+ members responsible for retail application testing and production quality governance.",
        "Elevated customer channel interaction satisfaction by 42% through the strategic leadership of microservices testing.",
        "Championed the evolution of system testers into E2E QA engineers, cutting release delivery timelines by 25%.",
        "Architected testing community of practices and built testing north star architecture, improving tester productivity by 45%.",
      ],
    },
    {
      role: "Lead Technical Analyst",
      company: "Verizon",
      period: "August 2007 - August 2019",
      location: "Hyderabad",
      highlights: [
        "Drove enterprise testing framework for orchestrated API automation, improving regression test coverage by 40%.",
        "Improved production quality outcomes to 99.32% through continuous quality engineering.",
        "Built a certification platform capable of finding anomalies, reducing 6% underbilling and 2% overbilling issues for 15M customer base.",
        "Spearheaded mainframe migration realizing reduced cost per bill from $2 to 30 cents.",
      ],
    },
    {
      role: "Systems Executive",
      company: "FIS (formerly eFunds)",
      period: "January 2007 - July 2007",
      location: "Chennai",
      highlights: [
        "As a Project Coordinator for CO-OP Financial Services, supported US credit unions in securely implementing debit/credit card changes.",
        "Translated requirements into Business Requirements Documents (BRDs), reducing requirement gaps by 8%.",
        "Conducted requirement review calls with clients to secure timely sign-offs, reducing delays by 22% on complex projects.",
      ],
    },
    {
      role: "Technical Process Trainer",
      company: "HCL Technologies BPO Services",
      period: "March 2004 - January 2007",
      location: "Chennai",
      highlights: [
        "Designed and delivered technical training programs for Customer Support Agents on BT Broadband products and troubleshooting.",
        "Developed training methodologies that reduced Average Handle Time (AHT) from 12 minutes to 8 minutes.",
        "Improved First Call Resolution (FCR) by 32% and CSAT scores by 18%.",
      ],
    },
    {
      role: "Processing Executive",
      company: "MMC Infotech",
      period: "August 2003 - March 2004",
      location: "Chennai",
      highlights: [
        "Responsible for generating daily loans and credit cards for Citibank in the eSales Division.",
        "Validated digital commercials on multiple websites and managed credit card leads from channel partners.",
      ],
    },
  ];

  const skillGroups = [
    {
      title: "Core Leadership",
      skills: ["Enterprise Transformation", "Platform Modernization", "Scaled Agile Framework (SAFe)", "GRC (Governance, Risk, Compliance)", "Operations Governance"],
    },
    {
      title: "AI & Automation",
      skills: ["Agentic AI / SDLC Pipelines", "Machine Learning (BERT)", "Model Tuning", "Robotic Process Automation (RPA)", "UiPath", "Automation Anywhere"],
    },
    {
      title: "Engineering Stack",
      skills: ["React", "Supabase", "Firebase", "Docker Products", "Node.js", "Python Flask", "REST APIs", "SQL / Databases", "Mainframe Migrations"],
    },
    {
      title: "Languages & Education",
      skills: ["B.E. Electronics & Communication", "English (Native/Bilingual)", "Telugu", "Tamil", "Hindi", "German (Elementary)"],
    },
  ];

  return (
    <div className="relative z-10 flex-grow">
      {/* Glow Effects */}
      <div className="absolute top-[20dvh] left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[120dvh] left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Floating Header */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-6">
        <nav className="w-full max-w-3xl h-16 rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-6 flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <a href="#hero" className="font-mono text-sm tracking-wider font-semibold hover:text-accent transition-colors duration-300">
            SCA
          </a>
          <div className="hidden md:flex gap-8 text-xs font-mono tracking-wider">
            <a href="#about" className="hover:text-accent transition-colors duration-300">ABOUT</a>
            <a href="#experience" className="hover:text-accent transition-colors duration-300">EXPERIENCE</a>
            <a href="#skills" className="hover:text-accent transition-colors duration-300">SKILLS</a>
            <a href="#projects" className="hover:text-accent transition-colors duration-300">PROJECTS</a>
            <a href="#contact" className="hover:text-accent transition-colors duration-300">CONTACT</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/srivishnucharan/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <IconBrandGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/srivishnucharan/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <IconBrandLinkedin size={18} />
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors duration-300"
          >
            {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-24 mx-4 z-40 p-6 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 text-sm font-mono text-center">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent py-2 transition-colors duration-300 border-b border-white/5"
              >
                ABOUT
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent py-2 transition-colors duration-300 border-b border-white/5"
              >
                EXPERIENCE
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent py-2 transition-colors duration-300 border-b border-white/5"
              >
                SKILLS
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent py-2 transition-colors duration-300 border-b border-white/5"
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent py-2 transition-colors duration-300"
              >
                CONTACT
              </a>
              <div className="flex justify-center gap-6 pt-4 border-t border-white/5">
                <a
                  href="https://github.com/srivishnucharan/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white"
                >
                  <IconBrandGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/srivishnucharan/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white"
                >
                  <IconBrandLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[100dvh] flex flex-col justify-center px-6 max-w-5xl mx-auto pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-emerald-400 shadow-[inset_0_1px_1px_rgba(16,185,129,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI & Enterprise Transformation Leader
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none text-white max-w-4xl">
            Srivishnu Charan Avasarala
          </h1>

          <p className="text-zinc-400 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
            23 years leading technology from engineering to executive leadership. Architecting AI automation and platform modernization at scale.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-medium text-sm px-6 py-3 transition-all duration-300 shadow-lg shadow-emerald-500/10 active:scale-[0.98]"
            >
              View Projects
              <span className="flex w-6 h-6 rounded-full bg-black/10 items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                <IconArrowUpRight size={14} className="text-black" />
              </span>
            </a>
            <a
              href="/Profile.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-medium text-sm px-6 py-3 transition-all duration-300 active:scale-[0.98]"
            >
              Download CV
              <IconDownload size={16} className="text-zinc-400" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <IconUser className="text-emerald-400" size={24} />
              About Me
            </h2>
            <div className="h-1 w-12 bg-emerald-400 mt-4 rounded-full" />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <p className="text-zinc-400 text-base leading-relaxed">
              I have spent 23 years leading technology from every seat at the table—spanning Project Management, Quality Engineering, IT Operations, and Software Development. For the last several years, I have turned my passion and experience toward Al-led enterprise transformation.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              Most recently, as Associate Director at Verizon, I directed AI-enabled engineering transformations, oversaw a $14M billing modernization program migrating 45M+ customer accounts, and built agentic SDLC pipelines. I bring the rigor of running massive, high-impact enterprise scale programs coupled with hands-on fluency in AI-native engineering.
            </p>

            {/* Impact Metric Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-[1.5rem] p-1 bg-white/5 border border-white/10">
                <div className="rounded-[calc(1.5rem-0.25rem)] bg-zinc-950/60 p-5 border border-white/5">
                  <div className="text-2xl font-bold text-white tracking-tight">$14M+</div>
                  <div className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">Billing Modernization</div>
                </div>
              </div>
              <div className="rounded-[1.5rem] p-1 bg-white/5 border border-white/10">
                <div className="rounded-[calc(1.5rem-0.25rem)] bg-zinc-950/60 p-5 border border-white/5">
                  <div className="text-2xl font-bold text-white tracking-tight">93%</div>
                  <div className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">Testing Time Reduced</div>
                </div>
              </div>
              <div className="rounded-[1.5rem] p-1 bg-white/5 border border-white/10">
                <div className="rounded-[calc(1.5rem-0.25rem)] bg-zinc-950/60 p-5 border border-white/5">
                  <div className="text-2xl font-bold text-white tracking-tight">5x</div>
                  <div className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">Delivery Velocity</div>
                </div>
              </div>
              <div className="rounded-[1.5rem] p-1 bg-white/5 border border-white/10">
                <div className="rounded-[calc(1.5rem-0.25rem)] bg-zinc-950/60 p-5 border border-white/5">
                  <div className="text-2xl font-bold text-white tracking-tight">55+</div>
                  <div className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">Engineers Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <IconBriefcase className="text-emerald-400" size={24} />
              Experience
            </h2>
            <div className="h-1 w-12 bg-emerald-400 mt-4 rounded-full" />
          </div>
          <div className="lg:col-span-2 space-y-12">
            {experience.map((item, idx) => (
              <div key={idx} className="relative pl-8 border-l border-white/10 last:border-0 pb-2">
                {/* Timeline Dot */}
                <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-black" />

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <span className="text-xs font-mono text-zinc-500">{item.period}</span>
                </div>
                <div className="text-sm font-medium text-emerald-400/90 mt-1">
                  {item.company} <span className="text-zinc-600 font-normal">| {item.location}</span>
                </div>

                <ul className="mt-4 space-y-2.5 text-zinc-400 text-sm leading-relaxed list-disc list-outside pl-4">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <IconTerminal className="text-emerald-400" size={24} />
              Skills
            </h2>
            <div className="h-1 w-12 bg-emerald-400 mt-4 rounded-full" />
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillGroups.map((group, gIdx) => (
              <div key={gIdx} className="rounded-[1.5rem] p-1 bg-white/5 border border-white/10">
                <div className="rounded-[calc(1.5rem-0.25rem)] bg-zinc-950/60 p-6 border border-white/5 h-full space-y-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-white/5 pb-2">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-zinc-300 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                <IconCode className="text-emerald-400" size={24} />
                Selected Work
              </h2>
              <div className="h-1 w-12 bg-emerald-400 mt-4 rounded-full" />
            </div>
            <a
              href="https://github.com/srivishnucharan/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-white transition-colors duration-300 flex items-center gap-1.5 font-mono text-xs"
            >
              View GitHub <IconArrowUpRight size={14} />
            </a>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`rounded-[2rem] p-1.5 bg-white/5 border border-white/10 ${
                  project.isWide ? "md:col-span-2" : "md:col-span-1"
                } relative overflow-hidden group`}
              >
                {/* Visual Glow for Wide Bento Cells */}
                {project.glow && (
                  <div
                    className={`absolute -right-24 -bottom-24 w-60 h-60 bg-gradient-to-tr ${project.glow} rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700`}
                  />
                )}

                <div className="rounded-[calc(2rem-0.375rem)] bg-zinc-950 p-8 border border-white/5 h-full flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative z-10">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors duration-300 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center shrink-0 border border-white/10"
                      >
                        <IconBrandGithub size={16} />
                      </a>
                    </div>

                    <div className="space-y-4 text-sm leading-relaxed">
                      <div className="text-zinc-500 font-mono text-xs">
                        <strong className="text-zinc-400 block font-sans text-sm mb-1">THE CHALLENGE</strong>
                        {project.challenge}
                      </div>
                      <div className="text-zinc-400">
                        <strong className="text-zinc-300 block text-sm mb-1">WHAT I BUILT</strong>
                        {project.solution}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-white/5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-full bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 text-xs text-emerald-400/90 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <IconCertificate className="text-emerald-400" size={24} />
              Certifications
            </h2>
            <div className="h-1 w-12 bg-emerald-400 mt-4 rounded-full" />
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-[2rem] p-1.5 bg-white/5 border border-white/10">
              <div className="rounded-[calc(2rem-0.375rem)] bg-zinc-950 p-6 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <IconCertificate size={24} className="text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Google AI Professional Certificate
                  </h3>
                  <p className="text-zinc-500 text-xs font-mono">
                    ISSUER: Google
                  </p>
                </div>
                <div className="text-zinc-400 text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                  Advanced validation of machine learning implementation models, tuning, and prompt engineering best practices.
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] p-1.5 bg-white/5 border border-white/10">
              <div className="rounded-[calc(2rem-0.375rem)] bg-zinc-950 p-6 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <IconCertificate size={24} className="text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    AA Certified Advanced RPA Professional
                  </h3>
                  <p className="text-zinc-500 text-xs font-mono">
                    ISSUER: Automation Anywhere
                  </p>
                </div>
                <div className="text-zinc-400 text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                  Professional certification in configuring enterprise robotic software bots, task mapping, and system integrations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5 bg-gradient-to-b from-transparent to-zinc-950/20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let's build<br />something great.
            </h2>
            <p className="text-zinc-500 text-sm mt-4 max-w-xs leading-relaxed">
              Seeking AI implementation leadership, enterprise systems architecture, or custom workflow engineering.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:srivishnu.charan@gmail.com"
                className="rounded-[1.5rem] p-1 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="rounded-[calc(1.5rem-0.25rem)] bg-zinc-950 p-6 border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors duration-300">
                    <IconMail size={18} />
                  </div>
                  <div>
                    <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">Email Me</div>
                    <div className="text-sm font-semibold text-white mt-0.5">srivishnu.charan@gmail.com</div>
                  </div>
                </div>
              </a>

              <a
                href="tel:+918106016744"
                className="rounded-[1.5rem] p-1 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="rounded-[calc(1.5rem-0.25rem)] bg-zinc-950 p-6 border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors duration-300">
                    <IconPhone size={18} />
                  </div>
                  <div>
                    <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">Call Me</div>
                    <div className="text-sm font-semibold text-white mt-0.5">+91 8106016744</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/srivishnucharan/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-zinc-300 hover:text-white font-medium text-xs px-4 py-2 transition-all duration-300"
              >
                <IconBrandLinkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/srivishnucharan/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-zinc-300 hover:text-white font-medium text-xs px-4 py-2 transition-all duration-300"
              >
                <IconBrandGithub size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-xs font-mono text-zinc-600 max-w-5xl mx-auto px-6">
        <div>&copy; {new Date().getFullYear()} Srivishnu Charan Avasarala. All rights reserved.</div>
        <div className="mt-2 text-[10px]">Built using Next.js & Tailwind CSS. Theme lock active.</div>
      </footer>
    </div>
  );
}
