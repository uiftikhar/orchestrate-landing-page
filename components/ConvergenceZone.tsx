import React from 'react'
import { Bot } from 'lucide-react'

export function ConvergenceZone() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Connection Lines */}
      <svg
        width="942"
        height="530"
        className="absolute inset-0"
        style={{
          overflow: 'visible',
        }}
      >
        {/* Line from Card 1 (Quant) */}
        <path
          d="M 280 95 Q 395 95, 510 265"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="4 3"
          opacity="0.6"
        />

        {/* Line from Card 2 (Qual) */}
        <path
          d="M 280 245 Q 395 245, 510 265"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeDasharray="4 3"
          opacity="0.6"
        />

        {/* Line from Card 3 (Historical) */}
        <path
          d="M 280 395 Q 395 395, 510 265"
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
          strokeDasharray="4 3"
          opacity="0.6"
        />
      </svg>

      {/* Convergence Point - Agent Square */}
      <div
        className="absolute"
        style={{
          left: '510px',
          top: '265px',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer Glow */}
        <div
          className="absolute rounded-2xl"
          style={{
            width: '140px',
            height: '140px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle, rgba(122, 77, 255, 0.15) 0%, rgba(122, 77, 255, 0) 70%)',
          }}
        />

        {/* Agent Square - Purple #7A4DFF */}
        <div
          className="absolute rounded-2xl shadow-[0px_4px_16px_rgba(122,77,255,0.25)] flex flex-col items-center justify-center gap-3"
          style={{
            width: '110px',
            height: '110px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#7A4DFF',
          }}
        >
          <Bot className="w-[32px] h-[32px] text-white" strokeWidth={2.5} />
          <div className="text-center px-2">
            <div className="text-[14px] font-bold text-white leading-tight">
              Fuse-evaluate
            </div>
          </div>
        </div>
      </div>

      {/* Confidence Meter */}
      <div
        className="absolute"
        style={{
          left: '510px',
          top: '355px',
          transform: 'translateX(-50%)',
        }}
      >
        {/* Meter Container */}
        <div
          className="relative bg-[#F3F4F6] border border-[#E5E7EB] rounded-full overflow-hidden"
          style={{
            width: '280px',
            height: '48px',
          }}
        >
          {/* Filled Portion */}
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: '82%',
              background: 'linear-gradient(90deg, #10B981 0%, #059669 100%)',
            }}
          />

          {/* Confidence Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[16px] font-bold text-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.3)]">
              82% Confidence
            </span>
          </div>
        </div>

        {/* Label Below */}
        <div className="text-center mt-2">
          <span className="text-[11px] font-medium text-[#059669]">
            Signals aligned • Ready to ship
          </span>
        </div>
      </div>
    </div>
  )
}

