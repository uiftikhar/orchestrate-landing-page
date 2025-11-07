import React from 'react'
import { Target } from 'lucide-react'

export function GoalCard() {
  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 flex items-center gap-2.5"
      style={{
        position: 'absolute',
        left: '331px',
        top: '110px',
        width: '280px',
        height: '50px',
        padding: '12px',
      }}
    >
      <div className="bg-blue-100 rounded p-1.5 flex-shrink-0">
        <Target className="w-4 h-4 text-blue-600" />
      </div>
      <p className="text-xs text-gray-900 font-medium leading-tight">
        Reduce churn during onboarding by 35%
      </p>
    </div>
  )
}

