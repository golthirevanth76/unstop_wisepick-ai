"use client"

import { motion } from "framer-motion"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { StatsCard } from "@/components/dashboard/stats-card"
import { RecentAnalysesList } from "@/components/dashboard/recent-analyses-list"
import { AnalyticsChart, CategoryBreakdownChart } from "@/components/dashboard/analytics-charts"
import { AIInsightsCard } from "@/components/dashboard/ai-insights-card"
import { Button } from "@/components/ui/button"
import { Search, BarChart3, Shield, Zap, Bell, User, Plus, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

const trustedProducts = [
  { name: "Tata Nexon EV", score: 94, category: "Vehicles" },
  { name: "Honda City", score: 92, category: "Vehicles" },
  { name: "Samsung Galaxy S25", score: 89, category: "Electronics" },
]

const highRiskProducts = [
  { name: "Unknown Brand Laptop", score: 32, risk: "High" },
  { name: "Unverified Investment Plan", score: 28, risk: "Critical" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />

      {/* Main content */}
      <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 lg:mb-8"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">Welcome back</h1>
            <p className="text-muted-foreground text-sm sm:text-base">{"Here's your analysis overview"}</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-xl hover:bg-secondary transition-colors" aria-label="Notifications">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Quick action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-strong rounded-2xl p-4 sm:p-6 mb-6 lg:mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">Start a New Analysis</h2>
              <p className="text-muted-foreground text-sm">
                Analyze any product, vehicle, property, or investment before making a purchase decision
              </p>
            </div>
            <Link href="/analyze" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Plus className="w-5 h-5 mr-2" />
                New Analysis
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
          <StatsCard
            title="Total Analyses"
            value="247"
            change="+12%"
            changeType="positive"
            icon={BarChart3}
            gradient="from-primary to-accent"
          />
          <StatsCard
            title="Avg Trust Score"
            value="84.5"
            change="+3.2"
            changeType="positive"
            icon={Shield}
            gradient="from-chart-2 to-primary"
          />
          <StatsCard
            title="Time Saved"
            value="42h"
            change="+8h"
            changeType="positive"
            icon={Zap}
            gradient="from-accent to-chart-3"
          />
          <StatsCard
            title="Money Saved"
            value={"\u20B91,24,000"}
            change={"+\u20B918,000"}
            changeType="positive"
            icon={Search}
            gradient="from-chart-4 to-chart-2"
          />
        </div>

        {/* Most Trusted & High Risk Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-success" />
              <h3 className="text-base sm:text-lg font-semibold">Most Trusted Products</h3>
            </div>
            <div className="space-y-3">
              {trustedProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-success/10">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                  <span className="text-lg font-bold text-success ml-2">{product.score}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <h3 className="text-base sm:text-lg font-semibold">High Risk Alerts</h3>
            </div>
            <div className="space-y-3">
              {highRiskProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-destructive/10">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm truncate">{product.name}</p>
                    <p className="text-xs text-destructive">{product.risk} Risk</p>
                  </div>
                  <span className="text-lg font-bold text-destructive ml-2">{product.score}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Charts and insights */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="xl:col-span-2">
            <AnalyticsChart />
          </div>
          <AIInsightsCard />
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
          <div className="xl:col-span-2">
            <RecentAnalysesList />
          </div>
          <CategoryBreakdownChart />
        </div>
      </main>
    </div>
  )
}
