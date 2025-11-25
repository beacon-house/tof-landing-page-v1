// Simple footer with navy background and copyright text
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-4">
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Beacon House. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
