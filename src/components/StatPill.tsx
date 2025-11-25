// Ivy League stat pill component with soft gold background
import React from 'react'

export const StatPill: React.FC = () => {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/15 shadow-sm whitespace-nowrap">
      <span className="text-navy font-semibold text-sm whitespace-nowrap">
        120 Ivy League Admits (2024)
      </span>
    </div>
  )
}
