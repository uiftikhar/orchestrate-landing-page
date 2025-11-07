export interface EvidenceType {
  type: 'quantitative' | 'qualitative' | 'historical' | 'strategic'
  color: string
}

export interface Proposal {
  id: number
  rank: number
  title: string
  confidence: number
  evidenceTypes: EvidenceType[]
  position: {
    x: number
    y: number
  }
  isVisible?: boolean
}

export type ConfidenceLevel = 'high' | 'medium-high' | 'medium'

export function getConfidenceLevel(confidence: number): ConfidenceLevel {
  if (confidence >= 85) return 'high'
  if (confidence >= 70) return 'medium-high'
  return 'medium'
}

export function getConfidenceGradient(level: ConfidenceLevel): string {
  const gradients = {
    high: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    'medium-high': 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
    medium: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  }
  return gradients[level]
}

