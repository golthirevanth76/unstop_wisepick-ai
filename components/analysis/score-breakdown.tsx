"use client"

import { motion } from "framer-motion"

interface ScoreBreakdownItem {
  label: string
  score: number
  weight: number
}

interface ScoreBreakdownProps {
  items: ScoreBreakdownItem[]
}

export function ScoreBreakdown({ items }: ScoreBreakdownProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-success"
    if (score >= 60) return "bg-warning"
    return "bg-destructive"
  }

  const getScoreTextColor = (score: number) => {
    if (score >= 80) return "text-success"
    if (score >= 60) return "text-warning"
    return "text-destructive"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="text-lg font-semibold mb-6">Score Breakdown</h3>
      <div className="space-y-5">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-xs text-muted-foreground">({item.weight}% weight)</span>
              </div>
              <span className={`text-sm font-bold ${getScoreTextColor(item.score)}`}>
                {item.score}/100
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${getScoreColor(item.score)} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${item.score}%` }}
                transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
