import React from 'react'
import { StrategyDocument } from './StrategyDocument'
import { GoalCard } from './GoalCard'
import { AgentCard } from './AgentCard'
import { ProposalCard } from './ProposalCard'
import { TreeConnections } from './TreeConnections'
import { Proposal } from '../types/strategy'

const proposals: Proposal[] = [
  {
    id: 1,
    rank: 1,
    title: 'Simplify initial setup with smart defaults',
    confidence: 92,
    evidenceTypes: [
      {
        type: 'quantitative',
        color: '#3B82F6',
      },
      {
        type: 'historical',
        color: '#10B981',
      },
    ],
    position: {
      x: 220,
      y: 340,
    },
    isVisible: true,
  },
  {
    id: 2,
    rank: 2,
    title: 'Add interactive product tour with progress tracking',
    confidence: 87,
    evidenceTypes: [
      {
        type: 'quantitative',
        color: '#3B82F6',
      },
      {
        type: 'qualitative',
        color: '#8B5CF6',
      },
    ],
    position: {
      x: 220,
      y: 400,
    },
    isVisible: true,
  },
  {
    id: 3,
    rank: 3,
    title: 'Implement early value demonstration in first session',
    confidence: 81,
    evidenceTypes: [
      {
        type: 'qualitative',
        color: '#8B5CF6',
      },
      {
        type: 'historical',
        color: '#10B981',
      },
    ],
    position: {
      x: 220,
      y: 460,
    },
    isVisible: true,
  },
  {
    id: 4,
    rank: 4,
    title: 'Create personalized onboarding paths by role',
    confidence: 78,
    evidenceTypes: [
      {
        type: 'quantitative',
        color: '#3B82F6',
      },
      {
        type: 'strategic',
        color: '#F59E0B',
      },
    ],
    position: {
      x: 260,
      y: 395,
    },
    isVisible: false,
  },
  {
    id: 5,
    rank: 5,
    title: 'Add contextual help tooltips throughout flow',
    confidence: 75,
    evidenceTypes: [
      {
        type: 'qualitative',
        color: '#8B5CF6',
      },
      {
        type: 'historical',
        color: '#10B981',
      },
    ],
    position: {
      x: 265,
      y: 405,
    },
    isVisible: false,
  },
  {
    id: 6,
    rank: 6,
    title: 'Reduce required fields in signup form',
    confidence: 72,
    evidenceTypes: [
      {
        type: 'quantitative',
        color: '#3B82F6',
      },
      {
        type: 'strategic',
        color: '#F59E0B',
      },
    ],
    position: {
      x: 270,
      y: 415,
    },
    isVisible: false,
  },
  {
    id: 7,
    rank: 7,
    title: 'Implement email nurture sequence for inactive users',
    confidence: 69,
    evidenceTypes: [
      {
        type: 'quantitative',
        color: '#3B82F6',
      },
      {
        type: 'qualitative',
        color: '#8B5CF6',
      },
    ],
    position: {
      x: 275,
      y: 425,
    },
    isVisible: false,
  },
  {
    id: 8,
    rank: 8,
    title: 'Add live chat support during onboarding',
    confidence: 67,
    evidenceTypes: [
      {
        type: 'qualitative',
        color: '#8B5CF6',
      },
      {
        type: 'strategic',
        color: '#F59E0B',
      },
    ],
    position: {
      x: 280,
      y: 435,
    },
    isVisible: false,
  },
  {
    id: 9,
    rank: 9,
    title: 'Create video tutorials for key features',
    confidence: 65,
    evidenceTypes: [
      {
        type: 'historical',
        color: '#10B981',
      },
      {
        type: 'strategic',
        color: '#F59E0B',
      },
    ],
    position: {
      x: 285,
      y: 445,
    },
    isVisible: false,
  },
]

export function StrategyTree() {
  const visibleProposals = proposals.filter((p) => p.isVisible)
  const rejectedProposals = proposals.filter((p) => !p.isVisible)

  return (
    <div
      className="relative bg-gray-50"
      style={{
        width: '942px',
        height: '530px',
        margin: '0 auto',
      }}
      role="img"
      aria-label="Strategy Tree visualization showing Q4 Product Strategy flow to goal to AI agent to proposals"
    >
      {/* SVG Connections Layer */}
      <TreeConnections proposals={visibleProposals} />

      {/* Strategy Document */}
      <StrategyDocument />

      {/* Goal Card */}
      <GoalCard />

      {/* AI Agent Card */}
      <AgentCard />

      {/* Rejected Proposals (stacked, behind) */}
      {rejectedProposals.map((proposal) => (
        <ProposalCard key={proposal.id} proposal={proposal} isRejected />
      ))}

      {/* Visible Proposals (on top) */}
      {visibleProposals.map((proposal) => (
        <ProposalCard key={proposal.id} proposal={proposal} />
      ))}
    </div>
  )
}

