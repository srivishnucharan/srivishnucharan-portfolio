import React from "react";
import { IconTerminal, IconBriefcase, IconCode } from "@tabler/icons-react";

export default function Services() {
  const detailedServices = [
    {
      icon: <IconTerminal className="text-orange-500" size={32} />,
      title: "AI-First Engineering Operations",
      tagline: "Reduce cycle times and scale B2B engineering workflows using agentic automation.",
      desc: "I design and implement custom AI orchestration pipelines to accelerate software delivery and testing. Using tools like Jira, GitHub, and custom Model Context Protocol (MCP) integrations, I help teams embed automated triage and auto-resolution directly into their systems.",
      offerings: [
        "Agentic SDLC pipeline design and orchestration setup",
        "BERT-based and LLM-based triage modeling for system support",
        "AI-assisted test data management and cycle automation",
        "Fractional team coaching on AI engineering operations",
      ],
    },
    {
      icon: <IconBriefcase className="text-orange-500" size={32} />,
      title: "Enterprise Platform Modernization",
      tagline: "Lead complex, high-risk systems migration with absolute precision.",
      desc: "With a track record of directing $14M modernization initiatives migrating tens of millions of active customer accounts, I provide the strategic oversight and technical frameworks required to transition legacy mainframes to open cloud architectures.",
      offerings: [
        "Migration risk planning and executive roadmap alignment",
        "AI-enabled parallel validation frameworks (byte-level accuracy)",
        "Zero-impact cutover strategy design for high-traffic platforms",
        "Capacity planning and governance for distributed organizations",
      ],
    },
    {
      icon: <IconCode className="text-orange-500" size={32} />,
      title: "Quality Engineering & QA Strategy",
      tagline: "Evolve testing teams into business acceleration engines.",
      desc: "I help organizations build a community of practice that shifts testing from a bottleneck to a velocity multiplier. By architecting custom API automation frameworks and intelligent validation platforms, I elevate quality standards and release safety.",
      offerings: [
        "End-to-End Quality Engineering transformation roadmaps",
        "API automation framework design and implementation",
        "Microservices testing and quality delivery orchestration",
        "Regression test coverage and revenue assurance audits",
      ],
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-orange-500">Services</div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Tailored solutions for{" "}
            <em className="font-serif italic font-normal text-orange-500">
              complex systems.
            </em>
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            I partner with B2B engineering teams, SaaS founders, and enterprise organizations to design simple, high-performing systems that scale.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {detailedServices.map((service, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-[2.5rem] border border-zinc-900 bg-zinc-900/30 flex flex-col md:flex-row gap-8 items-start hover:bg-zinc-900/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-orange-500/10 flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  <div className="text-sm font-semibold text-orange-500 font-serif italic">{service.tagline}</div>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">{service.desc}</p>
                
                <div className="space-y-3 pt-4 border-t border-zinc-900/50">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500">Key Offerings</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300 list-disc pl-4 leading-normal">
                    {service.offerings.map((offering, oIdx) => (
                      <li key={oIdx}>{offering}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-900 text-white text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Need a custom technical assessment?</h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
            Let's discuss your current systems architecture, testing bottlenecks, or AI automation goals.
          </p>
          <div>
            <a
              href="mailto:srivishnu.charan@gmail.com?subject=Consultation%20Request"
              className="inline-flex items-center justify-center font-bold text-zinc-950 bg-white rounded-full transition-all duration-200 hover:scale-105 shadow-sm px-8 py-3 text-sm hover:bg-zinc-100"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
