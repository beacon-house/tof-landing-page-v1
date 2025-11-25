// Minimal footer with navy background
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <img
              src="/bh-ig-logo.png"
              alt="Beacon House"
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#"
              className="hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gold transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-gold transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>In partnership with InGenius Prep</p>
          <p className="mt-2">© {new Date().getFullYear()} Beacon House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
