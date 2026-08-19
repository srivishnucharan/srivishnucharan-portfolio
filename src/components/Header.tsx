"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "CV", href: "/cv" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-gray-900 z-50 relative"
          >
            Srivishnu Charan
          </Link>

          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-orange-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:srivishnu.charan@gmail.com?subject=Consultation%20Request"
              className="inline-flex items-center justify-center font-semibold rounded-full border border-transparent transition-all duration-200 hover:scale-105 shadow-sm px-6 py-2.5 text-xs text-white bg-gray-900 hover:bg-gray-800"
            >
              Book Consultation
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-gray-900"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col pt-24 px-6 transition-transform duration-300">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-bold tracking-tight ${
                    isActive ? "text-orange-600" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-8 border-t border-gray-100 flex justify-center">
              <a
                href="mailto:srivishnu.charan@gmail.com?subject=Consultation%20Request"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center font-semibold text-white bg-gray-900 rounded-full border border-transparent hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-sm px-8 py-3 text-sm"
              >
                Book Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
