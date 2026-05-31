"use client"

import { motion } from "framer-motion"

interface RiskMeterProps {
  level: "low" | "medium" | "high"
  percentage: number
}

export function RiskMeter({ level, percentage }: RiskMeterProps) {
  const colors = {
    low: { bg: "bg-success/20", fill: "bg-success", text: "text-success" },
    medium: { bg: "bg-warning/20", fill: "bg-warning", text: "text-warning" },
    high: { bg: "bg-destructive/20", fill: "bg-destructive", text: "text-destructive" },
  }

  const labels = {
    low: "Low Risk",
    medium: "Medium Risk",
    high: "High Risk",
  }

  const { bg, fill, text } = colors[level]

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className={`text-sm font-medium ${text}`}>{labels[level]}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className={`h-3 ${bg} rounded-full overflow-hidden`}>
        <motion.div
          className={`h-full ${fill} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
