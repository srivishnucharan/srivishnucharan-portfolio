import React from "react";
import { IconBrandGithub, IconArrowUpRight } from "@tabler/icons-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Smart Library Management Portal",
      tagline: "Real-time resource reservations & inventory tracker.",
      challenge: "Slow and manual physical book logging, tracking, and reservations made library administration slow and prone to errors.",
      solution: "Engineered a real-time book reservation and inventory platform with secure user authentication and automated tracking databases.",
      tech: ["React", "Supabase", "CSS Grid", "API Design"],
      link: "https://github.com/srivishnucharan/library-management",
    },
    {
      title: "Real-Time Trading System",
      tagline: "High-speed mock trading dashboard with live pricing.",
      challenge: "High-latency stock pricing updates in standard mock trading apps made quick sim-trading actions laggy and unrealistic.",
      solution: "Built a low-latency web dashboard displaying live market fluctuations, enabling instantaneous mock buy/sell trade triggers.",
      tech: ["React", "WebSockets", "Financial APIs", "Tailwind CSS"],
      link: "https://github.com/srivishnucharan/trading-system",
    },
    {
      title: "Interactive Literacy Platform",
      tagline: "Gamified learning system for youth readers.",
      challenge: "Traditional digital reading assignments lacked engagement and failed to motivate young learners effectively.",
      solution: "Developed a gamified reading and literacy app featuring progress metrics, interactive assignments, and achievement badges.",
      tech: ["React", "Firebase", "Realtime DB", "Tailwind CSS"],
      link: "https://github.com/srivishnucharan/literacy-platform",
    },
    {
      title: "Operational Workflow Tools",
      tagline: "Custom microservice test triggers and workflow automations.",
      challenge: "Manual developer and QA testing processes created major deployment bottlenecks across microservice pipelines.",
      solution: "Created custom workflow automations and REST API integrations to programmatically trigger test suites and track results.",
      tech: ["React", "Supabase", "Node.js", "REST APIs"],
      link: "https://github.com/srivishnucharan/workflow-tools",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-orange-600">Portfolio</div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Selected projects &{" "}
            <em className="font-serif italic font-normal text-orange-600">
              open source work.
            </em>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            A look at full-stack applications and custom workflow integrations I have built independently outside my corporate enterprise roles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[2.5rem] border border-gray-100 bg-gray-50/20 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 h-full space-y-8"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 leading-tight">{project.title}</h2>
                    <p className="text-xs text-orange-600 font-serif italic mt-1">{project.tagline}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-100 hover:bg-gray-100 flex items-center justify-center shrink-0 transition-colors duration-300"
                  >
                    <IconBrandGithub size={18} className="text-gray-700" />
                  </a>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <strong className="text-gray-500 block uppercase font-mono tracking-wider mb-1">THE CHALLENGE</strong>
                    <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-gray-700 block uppercase font-mono tracking-wider mb-1">WHAT I BUILT</strong>
                    <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100/50">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-3 py-1 bg-white text-gray-600 rounded border border-gray-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
