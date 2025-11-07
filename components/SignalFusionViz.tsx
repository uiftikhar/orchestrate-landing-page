import React from 'react'
import { SignalCard } from './SignalCard'
import { ConvergenceZone } from './ConvergenceZone'
import { DecisionCard } from './DecisionCard'

export function SignalFusionViz() {
  return (
    <div
      className="relative bg-white"
      style={{
        width: '942px',
        height: '530px',
      }}
    >
      {/* Left Section: Signal Sources */}
      <SignalCard
        type="quantitative"
        label="Early Metrics"
        strength="medium"
        position={40}
      />

      <SignalCard
        type="qualitative"
        label="User Feedback"
        strength="strong"
        position={190}
      />

      <SignalCard
        type="historical"
        label="Pattern Match"
        strength="strong"
        position={340}
      />

      {/* Center Section: Convergence Zone */}
      <ConvergenceZone />

      {/* Right Section: Decision Output */}
      <DecisionCard />
    </div>
  )
}

