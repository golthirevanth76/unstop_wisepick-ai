"use client"

import { motion } from "framer-motion"
import { TrustScoreGauge } from "./trust-score-gauge"
import { ExternalLink, TrendingUp, TrendingDown, Minus } from "lucide-react"
import Link from "next/link"

interface RecentAnalysis {
  id: string
  name: string
  category: string
  score: number
  trend: "up" | "down" | "stable"
  date: string
  price: string
}

const recentAnalyses: RecentAnalysis[] = [
  { id: "1", name: "Royal Enfield Classic 350", category: "Vehicles", score: 92, trend: "up", date: "2 hours ago", price: "2,15,000" },
  { id: "2", name: "Honda City 2024", category: "Vehicles", score: 88, trend: "stable", date: "5 hours ago", price: "12,50,000" },
  { id: "3", name: "iPhone 16 Pro Max", category: "Electronics", score: 85, trend: "up", date: "1 day ago", price: "1,44,900" },
  { id: "4", name: "Tata Nexon EV", category: "Vehicles", score: 90, trend: "up", date: "2 days ago", price: "14,99,000" },
  { id: "5", name: "Samsung Galaxy S25", category: "Electronics", score: 82, trend: "stable", date: "3 days ago", price: "80,999" },
]

const TrendIcon = ({ trend }: { trend: "up" | "down" | "stable" }) => {
  if (trend === "up") return <TrendingUp className="w-4 h-4 text-success" />
  if (trend === "down") return <TrendingDown className="w-4 h-4 text-destructive" />
  return <Minus className="w-4 h-4 text-muted-foreground" />
}

export function RecentAnalysesList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent Analyses</h3>
        <Link
          href="/dashboard/history"
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          View all
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-4">
        {recentAnalyses.map((analysis, index) => (
          <motion.div
            key={analysis.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer group"
          >
            <TrustScoreGauge score={analysis.score} size="sm" showLabel={false} />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                {analysis.name}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">{analysis.category}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs font-medium text-primary">{'\u20B9'}{analysis.price}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{analysis.date}</span>
              </div>
            </div>
            <TrendIcon trend={analysis.trend} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
