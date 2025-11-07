import React from 'react'
import { FileText } from 'lucide-react'

export function StrategyDocument() {
  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center gap-2"
      style={{
        position: 'absolute',
        left: '331px',
        top: '20px',
        width: '280px',
        height: '60px',
        padding: '12px',
      }}
    >
      <FileText className="w-5 h-5 text-gray-600 flex-shrink-0" />
      <h2 className="font-semibold text-base text-gray-900">
        Q4 Product Strategy
      </h2>
    </div>
  )
}

