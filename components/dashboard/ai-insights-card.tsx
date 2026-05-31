"use client"

import { motion } from "framer-motion"
import { Brain, Lightbulb, AlertTriangle, TrendingUp } from "lucide-react"

interface AIInsight {
  id: string
  type: "tip" | "alert" | "trend"
  title: string
  description: string
}

const insights: AIInsight[] = [
  {
    id: "1",
    type: "tip",
    title: "Price Drop Alert",
    description: "Royal Enfield Classic 350 you analyzed is now \u20B98,000 cheaper in October sale.",
  },
  {
    id: "2",
    type: "alert",
    title: "Fake Review Warning",
    description: "Suspicious review patterns detected for an electronics product you viewed.",
  },
  {
    id: "3",
    type: "trend",
    title: "Market Trend",
    description: "EV prices dropping in India. Tata Nexon EV now offers better value than last quarter.",
  },
]

const iconMap = {
  tip: Lightbulb,
  alert: AlertTriangle,
  trend: TrendingUp,
}

const colorMap = {
  tip: "from-chart-4 to-chart-2",
  alert: "from-destructive to-chart-5",
  trend: "from-primary to-accent",
}

export function AIInsightsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold">AI Insights</h3>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = iconMap[insight.type]
          const gradient = colorMap[insight.type]

          return (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-sm">{insight.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
