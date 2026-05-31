"use client"

import { motion } from "framer-motion"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TrustScoreGauge } from "@/components/dashboard/trust-score-gauge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Calendar,
  Trash2,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react"
import Link from "next/link"

interface HistoryItem {
  id: string
  name: string
  category: string
  score: number
  trend: "up" | "down" | "stable"
  date: string
  price: string
}

const historyItems: HistoryItem[] = [
  { id: "1", name: "Royal Enfield Classic 350", category: "Vehicles", score: 92, trend: "up", date: "Today, 2:30 PM", price: "\u20B92,15,000" },
  { id: "2", name: "Honda City 2024", category: "Vehicles", score: 88, trend: "stable", date: "Today, 10:15 AM", price: "\u20B912,50,000" },
  { id: "3", name: "iPhone 16 Pro Max", category: "Electronics", score: 85, trend: "up", date: "Yesterday", price: "\u20B91,44,900" },
  { id: "4", name: "Tata Nexon EV", category: "Vehicles", score: 90, trend: "up", date: "2 days ago", price: "\u20B914,99,000" },
  { id: "5", name: "Samsung Galaxy S25", category: "Electronics", score: 82, trend: "stable", date: "3 days ago", price: "\u20B980,999" },
  { id: "6", name: "OnePlus 13", category: "Electronics", score: 86, trend: "up", date: "4 days ago", price: "\u20B969,999" },
  { id: "7", name: "Hyundai Creta 2024", category: "Vehicles", score: 87, trend: "stable", date: "5 days ago", price: "\u20B911,50,000" },
  { id: "8", name: "LIC Jeevan Labh Policy", category: "Investment", score: 78, trend: "up", date: "1 week ago", price: "\u20B91,50,000/yr" },
]

const TrendIcon = ({ trend }: { trend: "up" | "down" | "stable" }) => {
  if (trend === "up") return <TrendingUp className="w-4 h-4 text-success" />
  if (trend === "down") return <TrendingDown className="w-4 h-4 text-destructive" />
  return <Minus className="w-4 h-4 text-muted-foreground" />
}

export default function HistoryPage() {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />

      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold mb-1">Analysis History</h1>
            <p className="text-muted-foreground">View all your past product analyses</p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search analyses..."
              className="pl-10 bg-secondary border-border h-12"
            />
          </div>
          <Button variant="outline" className="border-border h-12 px-6">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </Button>
          <Button variant="outline" className="border-border h-12 px-6">
            <Calendar className="w-5 h-5 mr-2" />
            Date Range
          </Button>
        </motion.div>

        {/* History list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-border text-sm font-medium text-muted-foreground">
            <div className="col-span-5">Product</div>
            <div className="col-span-2">Score</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-1">Actions</div>
          </div>

          {historyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-secondary/50 transition-colors border-b border-border last:border-b-0"
            >
              <div className="col-span-5">
                <Link href="/analyze/result" className="group">
                  <p className="font-medium group-hover:text-primary transition-colors">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </Link>
              </div>
              <div className="col-span-2 flex items-center gap-3">
                <TrustScoreGauge score={item.score} size="sm" showLabel={false} />
                <TrendIcon trend={item.trend} />
              </div>
              <div className="col-span-2">
                <span className="font-medium">{item.price}</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <div className="col-span-1 flex items-center gap-2">
                <Link href="/analyze/result">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-between mt-6"
        >
          <p className="text-sm text-muted-foreground">Showing 1-8 of 247 analyses</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-border">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="border-border bg-primary/20 text-primary">
              1
            </Button>
            <Button variant="outline" size="sm" className="border-border">
              2
            </Button>
            <Button variant="outline" size="sm" className="border-border">
              3
            </Button>
            <Button variant="outline" size="sm" className="border-border">
              Next
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
