import React from 'react'
import { Download } from 'lucide-react'

const AnimatedborderButton = () => {
  return (
    <button className='animated-border group relative inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-transparent px-6 py-3 text-base font-medium text-foreground transition-all duration-500 hover:border-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'>
      {/* Animated SVG border */}
      <svg
        className='pointer-events-none absolute inset-0 h-full w-full'
        viewBox='0 0 196 48'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <rect
          x='1'
          y='1'
          width='194'
          height='46'
          rx='23'
          fill='none'
          stroke='var(--color-primary)'
          strokeWidth='2'
          strokeDasharray='90 120'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='animated-border-path'
        />
      </svg>
      {/* download button */}
      
      <span className='relative z-10 flex items-center justify-center gap-2'>
        <Download className='h-4 w-4' />
        Download CV
      </span>
    </button>
  )
}

export default AnimatedborderButton