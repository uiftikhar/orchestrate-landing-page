import React from 'react'
import { Bot } from 'lucide-react'

export function AgentCard() {
  return (
    <div
      className="rounded-lg shadow-md flex items-center justify-center gap-2"
      style={{
        position: 'absolute',
        left: '421px',
        top: '200px',
        width: '100px',
        height: '80px',
        background: '#7A4DFF',
      }}
    >
      <div className="text-center">
        <Bot className="w-8 h-8 text-white mx-auto mb-1" />
        <p className="text-xs text-white font-semibold">Product-delta</p>
      </div>
    </div>
  )
}

