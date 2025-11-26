// Ivy League stat pill component with white background and border
import React from 'react'

export const StatPill: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy/10 shadow-sm whitespace-nowrap">
      <span className="text-navy font-semibold text-sm font-sans whitespace-nowrap">
        120 Ivy League Admits (2024)
      </span>
    </div>
  )
}
