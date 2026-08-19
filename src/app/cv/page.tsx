import React from "react";
import {
  IconDownload,
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function CV() {
  const experiences = [
    {
      role: "Associate Director",
      company: "Verizon",
      period: "July 2024 - May 2026",
      location: "Hyderabad, India",
      achievements: [
        "Lead enterprise-scale billing modernization initiative involving migration of 45M+ wireless customers from legacy mainframe billing systems to modern open platforms.",
        "Architected AI-enabled parallel billing validation framework ensuring byte-level production accuracy and revenue integrity.",
        "Enabled phased migration through intelligent bill certification and automated validation tooling. Implemented Agentic AI orchestration integrating Billing Applications with Tools like JIRA, GitHub, databases, and QTest via MCP to transform SDLC/STLC workflows into autonomous AI-assisted delivery pipelines.",
        "System Modernization – Led a $14M billing modernization initiative supporting migration readiness for 45M+ customer accounts with reduced business risk.",
        "Speed to Market - Governed Agentic Development Lifecycle pipelines integrating Jira, GitHub, databases, and MCP workflows and Agent Skills, reducing testing turnaround time by 93% and improving delivery velocity by 3x.",
        "AI Led SDLC - Directed AI-enabled automation solutions for TDM, validations, cycle execution, and enterprise health checks using Python Flask, React, and API-driven architectures.",
        "Innovation – Spearheaded development of an on-demand billing platform reducing billing runtime from 18 hours to under 10 minutes for customer self-service.",
        "Strategic Cost Optimization – Partnered with executive leadership to reduce vendor dependency through AI-driven engineering frameworks, contributing 90K in annual operational efficiencies.",
        "GCC Leadership - Directed engineering capacity planning, workflow optimization, and governance across globally distributed GCC engineering organizations.",
      ],
    },
    {
      role: "Senior Information Technology Manager",
      company: "Verizon",
      period: "August 2020 - July 2024",
      location: "Hyderabad, India",
      achievements: [
        "Managed enterprise production support operations for customer success and sales platforms supporting retail stores, telesales, indirect partners, and contact center operations across the US. Led a 45-member offshore operations team responsible for incident management, outage response, environment health checks, SLA compliance and operational governance.",
        "Directed ITIL service management practices including incident triage, root cause governance, change approvals, and production release coordination.",
        "Triage Efficiency - Architected bidirectional encoder representations from transformers model (BERT) and enhanced triage efficiency to 91%.",
        "AI Ops – Spearheaded cost reduction by improving call deflection by 18% and auto resolution to 69%.",
        "Call volume reduction – Led root cause fixes reducing customer call volume by 6% (20700 calls per day).",
        "Prod stability – Orchestrated automated health checks covering 18 scenarios to decrease release day prod outages by 3% year over year.",
        "Productivity – Governed building a workforce scheduler, reducing ticket assignment time to under 5 min improving mean time to resolve.",
        "RPA - Migrated RPA bots from Automation Anywhere to UiPath and built on several order correction use cases with UiPath.",
        "GRC - Governed adherence to enterprise security, audit, compliance, and operational governance standards across production delivery initiatives.",
      ],
    },
    {
      role: "Information Technology Quality Assurance Manager",
      company: "Verizon",
      period: "July 2007 - August 2020",
      location: "Hyderabad, India",
      achievements: [
        "Led agile quality engineering teams of 15+ members responsible for enterprise retail application testing, certification, and production quality governance across Verizon’s billing and order management ecosystem. Partnered with business and product teams to improve sprint execution, release quality, and QA transformation initiatives. Orchestrated development of API automation frameworks, production quality improvements, and intelligent billing validation platforms enhancing regression coverage, release quality, revenue assurance, and operational efficiency.",
        "Omni channel experience – Elevated customer channel interaction satisfaction by 42% through the strategic leadership of microservices testing and quality delivery.",
        "Speed to market – Championed the evolution of system testers into E2E QA engineers, cutting release delivery timelines by 25%.",
        "Process Improvement – Architected testing community of practices and built testing north star architecture which aligned all system testers to be a true E2E Tester. Improved tester productivity by 45%.",
      ],
    },
    {
      role: "Lead Technical Analyst",
      company: "Verizon",
      period: "August 2007 - August 2019",
      location: "Hyderabad, India",
      achievements: [
        "Drove enterprise testing framework for orchestrated API automation which improved regression test coverage by 40%.",
        "Improved production quality outcomes to 99.32% through continuous improvement, automation-led quality engineering.",
        "Built certification platform capable of finding anomalies, revenue assurance insights, and trend-based alerting which reduced 6% of underbilling and 2% of overbilling issues for 15M customer base.",
        "Led a testing team to rollout of a new 2 page bill pdf format for Verizon Wireline customers for about 15M customers with zero customer disruption.",
        "Spearheaded mainframe migration enabled realization of reduced cost per bill production from $2 to 30 cents per bill across 15M accounts.",
      ],
    },
    {
      role: "Systems Executive",
      company: "FIS (formerly eFunds)",
      period: "January 2007 - July 2007",
      location: "Chennai, India",
      achievements: [
        "As a Project Coordinator for CO-OP Financial Services, I supported US credit unions and financial institutions in securely implementing debit/credit card changes by coordinating thorough testing through the eFUNDS payment gateway, ensuring regulatory compliance, safety, and zero production issues.",
        "Managed diverse client requests including new BIN issuance, PIN security enablement, POS terminal testing, ATM relocations, and software vendor changes.",
        "Translated requirements into Business Requirements Documents (BRDs), reducing requirement gaps by 8%.",
        "Conducted requirement review calls with clients to secure timely sign-off and freeze scope, reducing delays by 22% on complex projects through clear expectations and early alignment.",
        "Coordinated cross-functional reviews with database, telecom, testing, and account management teams while maintaining clear communication.",
      ],
    },
    {
      role: "Technical Process Trainer",
      company: "HCL Technologies BPO Services",
      period: "March 2004 - January 2007",
      location: "Chennai, India",
      achievements: [
        "As a Technical Process Trainer for BT Broadband Internet, I designed and delivered effective training programs for Customer Support Agents on BT products, internet fundamentals, and broadband troubleshooting.",
        "Developed efficient training methodologies for BT Broadband Customer Support Agents, reducing Average Handle Time (AHT) from 12 mins to 8 mins.",
        "Designed and delivered targeted process and troubleshooting training, improving First Call Resolution (FCR) by 32% and CSAT scores by 18%.",
        "Enhanced agent performance through structured training programs, increasing the percentage of agents achieving CSAT 3–5 by 22%.",
      ],
    },
    {
      role: "Processing Executive",
      company: "MMC Infotech",
      period: "August 2003 - March 2004",
      location: "Chennai, India",
      achievements: [
        "Joined as a processing executive in eSales Division. Responsible for generating daily Loans and credit cards of Citibank.",
        "Aggregated the Credit card leads that come from multiple channel partners and sent them for processing.",
        "Validated the digital commercials of Citibank in multiple websites and ran reports on performance.",
      ],
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b border-zinc-900">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">Srivishnu Charan Avasarala</h1>
            <p className="text-sm font-semibold text-orange-500 font-mono uppercase tracking-wider">
              AI Generalist | Enterprise Transformation | Platform Modernization
            </p>
          </div>
          <div>
            <a
              href="https://drive.google.com/drive/folders/1mBRaAoi2EEuZSkgJzIfdVoHo0DaMhR2U?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 text-zinc-300 font-semibold text-xs px-5 py-2.5 transition-all duration-200 hover:scale-105"
            >
              Download PDF CV <IconDownload size={14} />
            </a>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-500 font-mono">
          <a href="mailto:srivishnu.charan@gmail.com" className="hover:text-orange-500 flex items-center gap-1.5">
            <IconMail size={14} /> srivishnu.charan@gmail.com
          </a>
          <a href="tel:+918106016744" className="hover:text-orange-500 flex items-center gap-1.5">
            <IconPhone size={14} /> +91 8106016744
          </a>
          <a
            href="https://www.linkedin.com/in/srivishnucharan/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-500 flex items-center gap-1.5"
          >
            <IconBrandLinkedin size={14} /> LinkedIn Profile
          </a>
          <a
            href="https://github.com/srivishnucharan/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-500 flex items-center gap-1.5"
          >
            <IconBrandGithub size={14} /> GitHub Profile
          </a>
        </div>

        {/* Summary */}
        <div className="space-y-3">
          <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">Summary</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Technology leader with 23 years of experience leading Project Management, Quality Engineering, IT Operations, and Software Development. Dedicated to AI-led transformation, including managing multi-million-dollar billing modernization initiatives, implementing autonomous Agentic SDLC pipelines, and upskilling distributed engineering organizations of 55+ members. Hands-on fluency in building full-stack web applications using React, Supabase, and AI integrations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 pt-6 border-t border-zinc-900">
          <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">Professional Experience</h2>
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-bold text-white">
                    {exp.role} <span className="font-normal text-zinc-500">at {exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                </div>
                <div className="text-xs text-orange-500 font-semibold">{exp.location}</div>
                <ul className="list-disc list-outside pl-4 space-y-2 text-xs text-zinc-400 leading-relaxed">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6 pt-6 border-t border-zinc-900">
          <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">Core Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-zinc-400">
            <div className="space-y-1">
              <strong className="text-white block font-bold">Leadership & Management:</strong>
              <p>Enterprise Transformation, Platform Modernization, Scaled Agile Framework (SAFe), GRC, Project Management, Operations Governance.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-white block font-bold">AI & Automation:</strong>
              <p>Agentic AI, Machine Learning (BERT), Model Tuning, Robotic Process Automation (RPA), UiPath, Automation Anywhere.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-white block font-bold">Technical Stack:</strong>
              <p>React, Supabase, Firebase, Docker Products, Node.js, Python Flask, REST APIs, SQL, Mainframe Migrations.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-white block font-bold">Languages:</strong>
              <p>English (Native/Bilingual), Telugu (Native/Bilingual), Tamil (Native/Bilingual), Hindi (Limited Working), German (Elementary).</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6 pt-6 border-t border-zinc-900">
          <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">Education</h2>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm text-zinc-400">
            <div>
              <strong className="text-white font-bold block">Bachelor of Engineering, Electronics & Communication</strong>
              <span>University of Madras</span>
            </div>
            <span className="text-xs font-mono text-zinc-500">1999 - 2003</span>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-6 pt-6 border-t border-zinc-900 pb-12">
          <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">Certifications</h2>
          <ul className="list-disc list-inside space-y-2 text-xs text-zinc-400">
            <li><strong>Google AI Professional Certificate</strong> (Validation of ML model tuning and prompt engineering)</li>
            <li><strong>AA Certified Advanced RPA Professional</strong> (Automation Anywhere developer certification)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
