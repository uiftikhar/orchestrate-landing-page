import React from 'react'
import { Proposal } from '../types/strategy'

interface TreeConnectionsProps {
  proposals: Proposal[]
}

export function TreeConnections({ proposals }: TreeConnectionsProps) {
  // Strategy document center point
  const strategyDocCenterX = 471 // 331 + 280/2
  const strategyDocBottom = 80 // 20 + 60

  // Goal card center
  const goalCardCenterX = 471 // 331 + 280/2
  const goalCardTop = 110
  const goalCardBottom = 160

  // Agent card center
  const agentCardCenterX = 471 // 421 + 100/2
  const agentCardTop = 200
  const agentCardBottom = 280

  // Trunk position (left side)
  const trunkX = 120
  const trunkStartY = 310 // Start below agent
  const trunkEndY = 478 // End of trunk

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{
        width: '942px',
        height: '530px',
      }}
      aria-hidden="true"
    >
      {/* Connection from strategy doc to goal card */}
      <line
        x1={strategyDocCenterX}
        y1={strategyDocBottom}
        x2={goalCardCenterX}
        y2={goalCardTop}
        stroke="#D1D5DB"
        strokeWidth="2"
      />

      {/* Connection point at strategy doc */}
      <circle
        cx={strategyDocCenterX}
        cy={strategyDocBottom}
        r="3"
        fill="#D1D5DB"
      />

      {/* Connection from goal card to agent card */}
      <line
        x1={goalCardCenterX}
        y1={goalCardBottom}
        x2={agentCardCenterX}
        y2={agentCardTop}
        stroke="#D1D5DB"
        strokeWidth="2"
      />

      {/* Connection point at goal card */}
      <circle cx={goalCardCenterX} cy={goalCardBottom} r="3" fill="#D1D5DB" />

      {/* Connection from agent to trunk */}
      <path
        d={`M ${agentCardCenterX} ${agentCardBottom} L ${agentCardCenterX} ${290} L ${trunkX} ${290} L ${trunkX} ${trunkStartY}`}
        stroke="#D1D5DB"
        strokeWidth="2"
        fill="none"
      />

      {/* Connection point at agent card */}
      <circle cx={agentCardCenterX} cy={agentCardBottom} r="3" fill="#D1D5DB" />

      {/* Main trunk - vertical line */}
      <line
        x1={trunkX}
        y1={trunkStartY}
        x2={trunkX}
        y2={trunkEndY}
        stroke="#D1D5DB"
        strokeWidth="2"
      />

      {/* Horizontal branches to each proposal */}
      {proposals.map((proposal, idx) => {
        const proposalCenterY = proposal.position.y + 24 // Center of 48px card
        const branchEndX = proposal.position.x // Left edge of card

        return (
          <g key={idx}>
            {/* Branch point circle */}
            <circle cx={trunkX} cy={proposalCenterY} r="3" fill="#D1D5DB" />

            {/* Horizontal branch line */}
            <line
              x1={trunkX}
              y1={proposalCenterY}
              x2={branchEndX}
              y2={proposalCenterY}
              stroke="#D1D5DB"
              strokeWidth="2"
            />
          </g>
        )
      })}
    </svg>
  )
}

