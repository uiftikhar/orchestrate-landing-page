import React from 'react'
import { BarChart3, MessageSquare, TrendingUp } from 'lucide-react'

interface SignalCardProps {
  type: 'quantitative' | 'qualitative' | 'historical'
  label: string
  strength: 'strong' | 'medium' | 'low'
  position: number
}

export function SignalCard({
  type,
  label,
  strength,
  position,
}: SignalCardProps) {
  const strengthStyles = {
    strong: {
      bg: '#D1FAE5',
      text: '#059669',
      label: 'Strong',
    },
    medium: {
      bg: '#FEF3C7',
      text: '#D97706',
      label: 'Medium',
    },
    low: {
      bg: '#FEE2E2',
      text: '#DC2626',
      label: 'Low',
    },
  }

  const strengthStyle = strengthStyles[strength]

  const iconMap = {
    quantitative: BarChart3,
    qualitative: MessageSquare,
    historical: TrendingUp,
  }

  const Icon = iconMap[type]

  return (
    <div
      className="absolute bg-white border border-[#E5E7EB] rounded-[6px] shadow-[0px_1px_3px_rgba(0,0,0,0.06)] overflow-hidden"
      style={{
        width: '240px',
        height: '110px',
        left: '40px',
        top: `${position}px`,
      }}
    >
      {/* Header */}
      <div className="absolute top-[12px] left-[12px] flex items-center gap-2">
        <Icon className="w-[20px] h-[20px] text-[#6B7280]" strokeWidth={2} />
        <span className="text-[12px] font-semibold text-[#111827]">
          {label}
        </span>
      </div>

      {/* Strength Badge */}
      <div
        className="absolute top-[12px] right-[12px] px-2 py-1 rounded-full text-[10px] font-medium"
        style={{
          backgroundColor: strengthStyle.bg,
          color: strengthStyle.text,
        }}
      >
        {strengthStyle.label}
      </div>

      {/* Content Area */}
      <div className="absolute top-[40px] left-[12px] right-[12px] bottom-[8px] overflow-hidden">
        {type === 'quantitative' && (
          <>
            {/* Mini Sparkline */}
            <div className="w-full h-[40px] bg-[#F9FAFB] rounded relative overflow-hidden">
              <svg
                width="100%"
                height="40"
                className="absolute inset-0"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,28 40,22 80,25 120,16 160,14 216,10"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
            <div className="mt-1 space-y-0">
              <div className="text-[11px] text-[#6B7280] leading-tight">
                Click-through: +12%
              </div>
              <div className="text-[10px] text-[#9CA3AF] leading-tight">
                Sample: 847 users
              </div>
            </div>
          </>
        )}

        {type === 'qualitative' && (
          <div className="space-y-1">
            <div className="flex gap-2 items-start">
              <div className="w-[3px] h-[12px] bg-[#10B981] rounded-full flex-shrink-0 mt-0.5" />
              <div className="text-[11px] text-[#374151] leading-tight">
                Much easier to find what I need
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="w-[3px] h-[12px] bg-[#10B981] rounded-full flex-shrink-0 mt-0.5" />
              <div className="text-[11px] text-[#374151] leading-tight">
                Finally makes sense now!
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="w-[3px] h-[12px] bg-[#F59E0B] rounded-full flex-shrink-0 mt-0.5" />
              <div className="text-[11px] text-[#374151] leading-tight">
                Still learning the new layout...
              </div>
            </div>
            <div className="text-[10px] text-[#9CA3AF] mt-1 leading-tight">
              23 interviews analyzed
            </div>
          </div>
        )}

        {type === 'historical' && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[#10B981] text-[12px] leading-none">✓</span>
              <span className="text-[11px] text-[#374151] leading-tight flex-1 min-w-0 truncate">
                Onboarding v2.1 • 87%
              </span>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#D1FAE5] text-[#059669] rounded leading-none flex-shrink-0">
                +18%
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#10B981] text-[12px] leading-none">✓</span>
              <span className="text-[11px] text-[#374151] leading-tight flex-1 min-w-0 truncate">
                Nav redesign 2024 • 79%
              </span>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#D1FAE5] text-[#059669] rounded leading-none flex-shrink-0">
                +14%
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#F59E0B] text-[12px] leading-none">●</span>
              <span className="text-[11px] text-[#374151] leading-tight flex-1 min-w-0 truncate">
                Dashboard v3 • 71%
              </span>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#FEF3C7] text-[#D97706] rounded leading-none flex-shrink-0">
                +6%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

