"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  IconArrowUpRight,
  IconBriefcase,
  IconCode,
  IconTerminal,
  IconUser,
} from "@tabler/icons-react";

export default function Home() {
  const stats = [
    {
      num: "$8.8M",
      label: "Annual efficiencies delivered via AI-driven engineering frameworks",
      source: "Verizon · 2024-26",
    },
    {
      num: "-93%",
      label: "Testing turnaround reduction via Agentic SDLC pipelines",
      source: "Verizon · 2024-26",
    },
    {
      num: "+42%",
      label: "Retail customer interaction satisfaction lift via API QA strategy",
      source: "Verizon · 2007-20",
    },
    {
      num: "5x",
      label: "Delivery velocity improvement via automated validation systems",
      source: "Verizon · 2024-26",
    },
  ];

  const experience = [
    {
      company: "Verizon",
      role: "Associate Director",
      period: "2024 - 2026",
      desc: "Directed AI-enabled engineering transformations, migrated 45M+ accounts on a $14M billing modernization program, and cut testing turnaround time by 93% using Agentic SDLC pipelines.",
    },
    {
      company: "Verizon",
      role: "Senior IT Manager",
      period: "2020 - 2024",
      desc: "Managed US production support and a 45-member offshore operations team. Built a BERT-based triage model that lifted triage efficiency to 91% and pushed auto-resolution to 69%.",
    },
    {
      company: "Verizon",
      role: "IT Quality Assurance Manager",
      period: "2007 - 2020",
      desc: "Led QA teams of 15+ members for retail billing ecosystems, cutting release delivery timelines by 25% and elevating customer satisfaction by 42% via microservices testing.",
    },
  ];

  const services = [
    {
      icon: <IconTerminal className="text-orange-500" size={24} />,
      title: "AI-First Engineering Operations",
      desc: "Implement Agentic AI orchestration inside your SDLC (Jira, GitHub, MCP) to cut testing turnaround, automate triage, and accelerate overall delivery pipelines by 3x to 5x.",
      tags: ["Agentic SDLC", "AI Workflows", "Triage Automation"],
    },
    {
      icon: <IconBriefcase className="text-orange-500" size={24} />,
      title: "Enterprise Platform Modernization",
      desc: "Lead complex, large-scale systems modernization (such as legacy mainframe-to-open migrations) with zero customer impact and significant per-transaction cost reductions.",
      tags: ["Mainframe Migration", "Architecture", "Cost Optimization"],
    },
    {
      icon: <IconCode className="text-orange-500" size={24} />,
      title: "Quality Engineering & QA Strategy",
      desc: "Evolve traditional system testers into End-to-End Quality Engineers. Orchestrate custom API automation frameworks and intelligent parallel validation platforms.",
      tags: ["QA Transformation", "API Automation", "E2E Testing"],
    },
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-mono text-orange-600">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Open to new roles in NL / EU / Remote
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              I help companies build{" "}
              <em className="font-serif italic font-normal text-orange-600">
                engineering systems that scale.
              </em>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              23 years leading technology from engineering to executive leadership at Verizon. I design AI-first SDLC pipelines, organic quality operations, and modernized platform architectures.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:srivishnu.charan@gmail.com?subject=Consultation%20Request"
                className="inline-flex items-center justify-center font-semibold rounded-full border border-transparent transition-all duration-200 hover:scale-105 shadow-sm px-6 py-3 text-sm text-white bg-gray-900 hover:bg-gray-800"
              >
                Book a conversation
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:scale-105 shadow-sm px-6 py-3 text-sm text-gray-700"
              >
                View my work
              </Link>
            </div>
            {/* Quick Hero Stats */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-100 text-sm font-mono text-gray-500">
              <div>
                <strong className="text-gray-900 font-bold block text-lg font-sans">23+ Years</strong>
                experience
              </div>
              <div className="border-l border-gray-200 pl-6">
                <strong className="text-gray-900 font-bold block text-lg font-sans">Ex-Verizon</strong>
                Associate Director
              </div>
              <div className="border-l border-gray-200 pl-6">
                <strong className="text-gray-900 font-bold block text-lg font-sans">B.E.</strong>
                University of Madras
              </div>
            </div>
          </div>

          {/* Right Column: Custom Mindmap */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] rounded-3xl border border-gray-200 bg-gray-900 p-8 shadow-2xl relative overflow-hidden">
              {/* Radial glow background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent blur-2xl pointer-events-none" />
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-2">Technical Core</div>
              <div className="text-lg font-bold text-white mb-6">AI & Systems Mindmap</div>
              
              <svg viewBox="0 0 320 260" className="w-full h-auto">
                {/* Center circle */}
                <circle cx="160" cy="130" r="32" fill="none" stroke="rgba(249,115,22,0.3)" stroke-width="2" />
                <circle cx="160" cy="130" r="26" fill="rgba(249,115,22,0.15)" />
                <text x="160" y="133" font-size="11" fill="rgba(255,255,255,0.9)" text-anchor="middle" dominant-baseline="middle" font-weight="700" letter-spacing="0.08em">AI & QE</text>

                {/* Lines */}
                <line x1="137" y1="107" x2="75" y2="65" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
                <line x1="183" y1="107" x2="245" y2="65" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
                <line x1="128" y1="130" x2="92" y2="130" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
                <line x1="192" y1="130" x2="228" y2="130" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
                <line x1="160" y1="162" x2="160" y2="203" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />

                {/* Nodes */}
                <g>
                  <rect x="35" y="36" width="80" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
                  <text x="75" y="51" font-size="11" fill="rgba(255,255,255,0.85)" font-weight="600" text-anchor="middle" dominant-baseline="middle">AI SDLC</text>
                </g>
                <g>
                  <rect x="205" y="36" width="80" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
                  <text x="245" y="51" font-size="11" fill="rgba(255,255,255,0.85)" font-weight="600" text-anchor="middle" dominant-baseline="middle">Quality Eng</text>
                </g>
                <g>
                  <rect x="10" y="116" width="80" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
                  <text x="50" y="131" font-size="11" fill="rgba(255,255,255,0.85)" font-weight="600" text-anchor="middle" dominant-baseline="middle">Platform Mod</text>
                </g>
                <g>
                  <rect x="230" y="116" width="80" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
                  <text x="270" y="131" font-size="11" fill="rgba(255,255,255,0.85)" font-weight="600" text-anchor="middle" dominant-baseline="middle">Enterprise Tr</text>
                </g>
                <g>
                  <rect x="110" y="205" width="100" height="28" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
                  <text x="160" y="220" font-size="11" fill="rgba(255,255,255,0.85)" font-weight="600" text-anchor="middle" dominant-baseline="middle">RPA Bots</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Bar (Impact stats) */}
      <section className="py-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl font-extrabold text-orange-600 tracking-tight">{stat.num}</div>
              <div className="text-xs text-gray-700 font-medium leading-snug">{stat.label}</div>
              <div className="text-[10px] text-gray-400 font-mono">{stat.source}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Accordion/List */}
      <section className="py-24 bg-gray-50/30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-orange-600">Experience</div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Where I've done this.</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Each role added a new layer: quality assurance scale, then offshore team management, then AI-first engineering execution.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <IconBriefcase className="text-orange-600" size={24} />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-bold text-gray-900">{item.company}</h3>
                    <span className="text-xs font-mono text-gray-400">{item.period}</span>
                  </div>
                  <div className="text-sm font-semibold text-orange-600">{item.role}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="pt-4 text-center lg:text-left">
              <Link href="/cv" className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors inline-flex items-center gap-1.5">
                Read my full CV &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          <div className="flex flex-wrap justify-between items-end gap-6">
            <div className="space-y-4">
              <div className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-orange-600">Services</div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">What I can do for your team.</h2>
            </div>
            <Link href="/services" className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors">
              View all services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm flex flex-col justify-between h-full space-y-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-50">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2.5 py-1 bg-gray-50 text-gray-600 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with User Photo */}
      <section id="about" className="py-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-orange-600">About</div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Technology Leader,{" "}
              <em className="font-serif italic font-normal text-orange-600">
                who thinks in systems.
              </em>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I have spent 23 years building, validating, and managing technology at scale. At Verizon, I managed retail support, headed agile QA departments, and directed AI integration workflows. I bring the rigor of running massive, high-impact enterprise projects coupled with hands-on fluency in building AI-native tools.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My engineering approach mixes deep technical expertise (React, Supabase, ML, BERT) with the practical project execution required to lead globally distributed teams.
            </p>
            <div className="flex gap-6 pt-4 font-mono text-sm">
              <Link href="/cv" className="text-gray-900 font-bold hover:text-orange-600 transition-colors">
                Read my full CV &rarr;
              </Link>
              <Link href="/contact" className="text-gray-900 font-bold hover:text-orange-600 transition-colors">
                Get in touch &rarr;
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl bg-gray-100">
              <img
                src="/MyPicture.png"
                alt="Srivishnu Charan Avasarala"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-orange-400">Let's talk</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Let's build something{" "}
            <em className="font-serif italic font-normal text-orange-400">
              worth talking about.
        </em>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            Open to senior engineering leadership, fractional CTO advisory, or enterprise transformation consulting roles in the EU or remote.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="mailto:srivishnu.charan@gmail.com?subject=Consultation%20Request"
              className="inline-flex items-center justify-center font-bold text-gray-900 bg-white rounded-full transition-all duration-200 hover:scale-105 shadow-sm px-8 py-3 text-sm hover:bg-gray-50"
            >
              Book a conversation
            </a>
            <a
              href="https://www.linkedin.com/in/srivishnucharan/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-200 hover:scale-105 shadow-sm px-6 py-3 text-sm"
            >
              View LinkedIn Profile
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 pt-8 text-xs font-mono text-gray-500 border-t border-white/5">
            <a href="mailto:srivishnu.charan@gmail.com" className="hover:text-white transition-colors">srivishnu.charan@gmail.com</a>
            <Link href="/portfolio" className="hover:text-white transition-colors">Selected work</Link>
            <Link href="/cv" className="hover:text-white transition-colors">Full CV</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
