import React from "react";
import { IconMail, IconPhone, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

export default function Contact() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-orange-600">Contact</div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Let's start a{" "}
            <em className="font-serif italic font-normal text-orange-600">
              conversation.
            </em>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            I am open to fractional CTO roles, executive consulting advisory, or full-time leadership opportunities across Europe, India, or remote.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
          <a
            href="mailto:srivishnu.charan@gmail.com?subject=Consultation%20Request"
            className="p-6 rounded-[2rem] border border-gray-100 bg-gray-50/20 hover:border-gray-200 transition-colors duration-300 flex items-center gap-5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-gray-600 group-hover:text-orange-600 group-hover:bg-orange-500/10 transition-colors duration-300">
              <IconMail size={22} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Email Me</div>
              <div className="text-sm font-semibold text-gray-900 mt-0.5">srivishnu.charan@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+918106016744"
            className="p-6 rounded-[2rem] border border-gray-100 bg-gray-50/20 hover:border-gray-200 transition-colors duration-300 flex items-center gap-5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-gray-600 group-hover:text-orange-600 group-hover:bg-orange-500/10 transition-colors duration-300">
              <IconPhone size={22} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Call Me</div>
              <div className="text-sm font-semibold text-gray-900 mt-0.5">+91 8106016744</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/srivishnucharan/"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-[2rem] border border-gray-100 bg-gray-50/20 hover:border-gray-200 transition-colors duration-300 flex items-center gap-5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-gray-600 group-hover:text-orange-600 group-hover:bg-orange-500/10 transition-colors duration-300">
              <IconBrandLinkedin size={22} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">LinkedIn</div>
              <div className="text-sm font-semibold text-gray-900 mt-0.5">linkedin.com/in/srivishnucharan</div>
            </div>
          </a>

          <a
            href="https://github.com/srivishnucharan/"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-[2rem] border border-gray-100 bg-gray-50/20 hover:border-gray-200 transition-colors duration-300 flex items-center gap-5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-gray-600 group-hover:text-orange-600 group-hover:bg-orange-500/10 transition-colors duration-300">
              <IconBrandGithub size={22} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">GitHub</div>
              <div className="text-sm font-semibold text-gray-900 mt-0.5">github.com/srivishnucharan</div>
            </div>
          </a>
        </div>

        {/* Message */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gray-900 text-white text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Looking for Fractional Support?</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            I help startups and enterprises map out transition architectures, scale quality engineering, and integrate AI workflows.
          </p>
          <div className="pt-2">
            <a
              href="mailto:srivishnu.charan@gmail.com?subject=Fractional%20CTO%20Advisory"
              className="inline-flex items-center justify-center font-bold text-gray-900 bg-white rounded-full transition-all duration-200 hover:scale-105 shadow-sm px-6 py-2.5 text-xs hover:bg-gray-50"
            >
              Inquire here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
