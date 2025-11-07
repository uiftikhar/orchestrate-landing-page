import React from 'react'
import {
  BarChart3,
  MessageSquare,
  TrendingUp,
  Target,
} from 'lucide-react'
import {
  Proposal,
  getConfidenceLevel,
  getConfidenceGradient,
} from '../types/strategy'

interface ProposalCardProps {
  proposal: Proposal
  isRejected?: boolean
}

const evidenceIcons = {
  quantitative: {
    icon: BarChart3,
    label: 'Quantitative Data',
  },
  qualitative: {
    icon: MessageSquare,
    label: 'Qualitative Feedback',
  },
  historical: {
    icon: TrendingUp,
    label: 'Historical Patterns',
  },
  strategic: {
    icon: Target,
    label: 'Strategic Alignment',
  },
}

export function ProposalCard({
  proposal,
  isRejected = false,
}: ProposalCardProps) {
  const confidenceLevel = getConfidenceLevel(proposal.confidence)
  const gradient = getConfidenceGradient(confidenceLevel)

  return (
    <div
      className="rounded-md flex overflow-hidden"
      style={{
        position: 'absolute',
        left: `${proposal.position.x}px`,
        top: `${proposal.position.y}px`,
        width: '500px',
        height: '48px',
        backgroundColor: isRejected ? '#F3F4F6' : '#FFFFFF',
        border: isRejected ? '2px solid #D1D5DB' : 'none',
        boxShadow: isRejected
          ? '0px 1px 2px rgba(0, 0, 0, 0.05)'
          : '0px 2px 4px rgba(0, 0, 0, 0.1)',
        transform: isRejected ? 'scale(0.92)' : 'scale(1)',
        zIndex: isRejected ? 1 : 10,
      }}
    >
      {/* Rank Badge */}
      <div
        className="flex items-center justify-center text-white font-bold text-base flex-shrink-0"
        style={{
          width: '56px',
          background: isRejected ? '#9CA3AF' : gradient,
        }}
      >
        {proposal.rank}
      </div>

      {/* Content Area */}
      <div className="flex-1 px-3 py-2 flex items-center justify-between gap-3 overflow-hidden">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <h3
            className="font-semibold text-sm text-gray-900 truncate"
            style={{
              maxWidth: '280px',
            }}
          >
            {proposal.title}
          </h3>
          <span className="text-xs text-gray-600 whitespace-nowrap font-medium flex-shrink-0">
            {proposal.confidence}%
          </span>
        </div>

        <div className="flex gap-1.5 flex-shrink-0">
          {proposal.evidenceTypes.map((evidence, idx) => {
            const IconComponent = evidenceIcons[evidence.type].icon
            return (
              <div
                key={idx}
                className="rounded p-1"
                style={{
                  backgroundColor: evidence.color,
                }}
                title={evidenceIcons[evidence.type].label}
                role="img"
                aria-label={evidenceIcons[evidence.type].label}
              >
                <IconComponent className="w-3.5 h-3.5 text-white" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

