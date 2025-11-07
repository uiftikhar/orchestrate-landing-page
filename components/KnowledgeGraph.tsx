import React from 'react'

interface Node {
  x: number
  y: number
}

interface Connection {
  from: number
  to: number
}

export function KnowledgeGraph() {
  // Use viewBox for responsive scaling
  const viewBoxWidth = 942
  const viewBoxHeight = 530
  const stageWidth = viewBoxWidth / 3

  // Stage 1: Isolated - Single node
  const stage1Nodes: Node[] = [
    {
      x: stageWidth / 2,
      y: viewBoxHeight / 2,
    },
  ]
  const stage1Connections: Connection[] = []

  // Stage 2: Connected - Few nodes with selective connections
  const stage2Nodes: Node[] = [
    {
      x: stageWidth + stageWidth / 2,
      y: viewBoxHeight / 2 - 60,
    },
    {
      x: stageWidth + stageWidth / 2 - 70,
      y: viewBoxHeight / 2 + 50,
    },
    {
      x: stageWidth + stageWidth / 2 + 70,
      y: viewBoxHeight / 2 + 50,
    },
    {
      x: stageWidth + stageWidth / 2,
      y: viewBoxHeight / 2 + 100,
    },
  ]
  const stage2Connections: Connection[] = [
    {
      from: 0,
      to: 1,
    },
    {
      from: 0,
      to: 2,
    },
    {
      from: 1,
      to: 3,
    },
    {
      from: 2,
      to: 3,
    },
  ]

  // Stage 3: Network - Dense interconnection
  const stage3Nodes: Node[] = [
    {
      x: stageWidth * 2 + stageWidth / 2,
      y: viewBoxHeight / 2,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 - 80,
      y: viewBoxHeight / 2 - 80,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 + 80,
      y: viewBoxHeight / 2 - 80,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 - 120,
      y: viewBoxHeight / 2,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 + 120,
      y: viewBoxHeight / 2,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 - 80,
      y: viewBoxHeight / 2 + 80,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 + 80,
      y: viewBoxHeight / 2 + 80,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 - 40,
      y: viewBoxHeight / 2 - 120,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 + 40,
      y: viewBoxHeight / 2 - 120,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 - 140,
      y: viewBoxHeight / 2 - 40,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 + 140,
      y: viewBoxHeight / 2 - 40,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 - 140,
      y: viewBoxHeight / 2 + 40,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 + 140,
      y: viewBoxHeight / 2 + 40,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 - 40,
      y: viewBoxHeight / 2 + 120,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 + 40,
      y: viewBoxHeight / 2 + 120,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 - 60,
      y: viewBoxHeight / 2 - 40,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 + 60,
      y: viewBoxHeight / 2 - 40,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 - 60,
      y: viewBoxHeight / 2 + 40,
    },
    {
      x: stageWidth * 2 + stageWidth / 2 + 60,
      y: viewBoxHeight / 2 + 40,
    },
  ]

  // Generate dense connections for stage 3
  const stage3Connections: Connection[] = []
  for (let i = 0; i < stage3Nodes.length; i++) {
    for (let j = i + 1; j < stage3Nodes.length; j++) {
      const distance = Math.sqrt(
        Math.pow(stage3Nodes[i].x - stage3Nodes[j].x, 2) +
          Math.pow(stage3Nodes[i].y - stage3Nodes[j].y, 2),
      )
      // Connect nodes within a certain distance for organic feel
      if (distance < 150) {
        stage3Connections.push({
          from: i,
          to: j,
        })
      }
    }
  }

  const renderConnections = (
    nodes: Node[],
    connections: Connection[],
    opacity: number = 0.3,
  ) => {
    return connections.map((conn, idx) => {
      const from = nodes[conn.from]
      const to = nodes[conn.to]
      return (
        <line
          key={idx}
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke="url(#kg-connectionGradient)"
          strokeWidth="1.5"
          opacity={opacity}
        />
      )
    })
  }

  const renderNodes = (nodes: Node[], size: number = 8) => {
    return nodes.map((node, idx) => (
      <g key={idx}>
        <circle
          cx={node.x}
          cy={node.y}
          r={size + 4}
          fill="url(#kg-nodeGlow)"
          opacity="0.4"
        />
        <circle cx={node.x} cy={node.y} r={size} fill="url(#kg-nodeGradient)" />
      </g>
    ))
  }

  return (
    <div 
      className="w-full h-full flex items-center justify-center rounded-lg" 
      style={{ backgroundColor: '#020617', minHeight: '200px' }}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id="kg-nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <radialGradient id="kg-nodeGlow">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="kg-connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width={viewBoxWidth} height={viewBoxHeight} fill="#020617" />

        {/* Stage 1: Isolated */}
        {renderConnections(stage1Nodes, stage1Connections, 0.4)}
        {renderNodes(stage1Nodes, 10)}

        {/* Stage 2: Connected */}
        {renderConnections(stage2Nodes, stage2Connections, 0.4)}
        {renderNodes(stage2Nodes, 8)}

        {/* Stage 3: Network */}
        {renderConnections(stage3Nodes, stage3Connections, 0.25)}
        {renderNodes(stage3Nodes, 7)}
      </svg>
    </div>
  )
}

