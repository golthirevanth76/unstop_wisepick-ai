"use client"

import { motion } from "framer-motion"

interface TrustScoreGaugeProps {
  score: number
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
}

export function TrustScoreGauge({ score, size = "md", showLabel = true }: TrustScoreGaugeProps) {
  const sizes = {
    sm: { width: 80, stroke: 6, fontSize: "text-lg" },
    md: { width: 120, stroke: 8, fontSize: "text-2xl" },
    lg: { width: 160, stroke: 10, fontSize: "text-4xl" },
  }

  const { width, stroke, fontSize } = sizes[size]
  const radius = (width - stroke) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (score / 100) * circumference

  const getScoreColor = (score: number) => {
    if (score >= 80) return "var(--success)"
    if (score >= 60) return "var(--warning)"
    return "var(--destructive)"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Fair"
    return "Poor"
  }

  return (
    <div className="relative inline-flex flex-col items-center">
      <svg width={width} height={width} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={width / 2}
          cy={width / 2}
          r={radius}
          fill="none"
          stroke="var(--secondary)"
          strokeWidth={stroke}
        />
        {/* Score circle */}
        <motion.circle
          cx={width / 2}
          cy={width / 2}
          r={radius}
          fill="none"
          stroke={getScoreColor(score)}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            filter: `drop-shadow(0 0 8px ${getScoreColor(score)})`,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className={`${fontSize} font-bold`}
          style={{ color: getScoreColor(score) }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {score}
        </motion.span>
        {showLabel && size !== "sm" && (
          <span className="text-xs text-muted-foreground mt-1">
            {getScoreLabel(score)}
          </span>
        )}
      </div>
    </div>
  )
}
