import React from 'react'
import { Check } from 'lucide-react'

export function DecisionCard() {
  return (
    <div
      className="absolute bg-white border-2 border-[#10B981] rounded-lg overflow-hidden"
      style={{
        width: '242px',
        height: '110px',
        left: '660px',
        top: '210px',
        boxShadow: '0px 4px 16px rgba(16, 185, 129, 0.15)',
      }}
    >
      {/* Header */}
      <div className="absolute top-[12px] left-[12px] flex items-center gap-2">
        <div className="w-[20px] h-[20px] rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
          <Check className="w-[12px] h-[12px] text-white" strokeWidth={3} />
        </div>
        <span className="text-[13px] font-semibold text-[#059669] leading-none">
          Ready to Ship
        </span>
      </div>

      {/* Divider */}
      <div
        className="absolute bg-[#E5E7EB]"
        style={{
          top: '38px',
          left: '12px',
          right: '12px',
          height: '1px',
        }}
      />

      {/* Decision Text */}
      <div className="absolute top-[48px] left-[12px] right-[12px]">
        <div className="text-[14px] font-bold text-[#111827] leading-tight">
          Ship onboarding redesign
        </div>
      </div>

      {/* Evidence Summary */}
      <div className="absolute top-[68px] left-[12px] right-[12px] bottom-[8px] space-y-0.5 overflow-hidden">
        <div className="text-[11px] text-[#6B7280] leading-tight">
          <span className="text-[#10B981]">✓</span> Early metrics positive
        </div>
        <div className="text-[11px] text-[#6B7280] leading-tight">
          <span className="text-[#10B981]">✓</span> Users prefer new flow
        </div>
        <div className="text-[11px] text-[#6B7280] leading-tight">
          <span className="text-[#10B981]">✓</span> Matches successful patterns
        </div>
      </div>
    </div>
  )
}

