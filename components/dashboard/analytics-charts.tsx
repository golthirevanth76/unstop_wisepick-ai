"use client"

import { motion } from "framer-motion"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"

const analysisData = [
  { name: "Mon", analyses: 12, trustScore: 84 },
  { name: "Tue", analyses: 19, trustScore: 86 },
  { name: "Wed", analyses: 15, trustScore: 82 },
  { name: "Thu", analyses: 25, trustScore: 88 },
  { name: "Fri", analyses: 22, trustScore: 90 },
  { name: "Sat", analyses: 30, trustScore: 87 },
  { name: "Sun", analyses: 28, trustScore: 85 },
]

const categoryData = [
  { name: "Vehicles", value: 35 },
  { name: "Electronics", value: 28 },
  { name: "Property", value: 15 },
  { name: "Services", value: 12 },
  { name: "Investments", value: 10 },
]

export function AnalyticsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Analysis Activity</h3>
          <p className="text-sm text-muted-foreground">Your weekly analysis trends</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Analyses</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground">Avg Trust Score</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={analysisData}>
            <defs>
              <linearGradient id="colorAnalyses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTrustScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="name"
              stroke="var(--muted-foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
              labelStyle={{ color: "var(--foreground)" }}
            />
            <Area
              type="monotone"
              dataKey="analyses"
              stroke="var(--primary)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorAnalyses)"
            />
            <Area
              type="monotone"
              dataKey="trustScore"
              stroke="var(--accent)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTrustScore)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export function CategoryBreakdownChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="text-lg font-semibold mb-6">Category Breakdown</h3>
      <div className="space-y-4">
        {categoryData.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{category.name}</span>
              <span className="text-sm text-muted-foreground">{category.value}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                animate={{ width: `${category.value}%` }}
                transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
