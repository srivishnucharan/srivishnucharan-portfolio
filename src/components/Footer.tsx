import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-2 flex flex-col items-start">
            <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 mb-4">
              Srivishnu Charan
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Fractional CTO & AI-first Engineering Consultant. Helping B2B organizations build scalable systems and automate their development lifecycle.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase">About</h3>
            <ul className="mt-4 flex flex-col space-y-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-orange-600 transition-colors text-sm">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/cv" className="text-gray-500 hover:text-orange-600 transition-colors text-sm">
                  CV
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-orange-600 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Work</h3>
            <ul className="mt-4 flex flex-col space-y-3">
              <li>
                <Link href="/services" className="text-gray-500 hover:text-orange-600 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-500 hover:text-orange-600 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex flex-col space-y-3">
              <a
                href="https://www.linkedin.com/in/srivishnucharan/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-orange-600 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/srivishnucharan/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-orange-600 transition-colors text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Repo</h3>
            <div className="mt-4 flex flex-col space-y-3">
              <a
                href="https://github.com/srivishnucharan/srivishnucharan-portfolio"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-orange-600 transition-colors text-sm"
              >
                GitHub Code
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Srivishnu Charan Avasarala. All rights reserved.</p>
            </div>
            <p className="text-xs text-gray-400 md:text-right">
              Made with ♥ in Hyderabad, India.<br />
              Theme aligned with amitsrivatsa.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
