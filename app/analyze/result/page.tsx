"use client"

import { motion } from "framer-motion"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TrustScoreGauge } from "@/components/dashboard/trust-score-gauge"
import { RiskMeter } from "@/components/analysis/risk-meter"
import { ProsConsCard } from "@/components/analysis/pros-cons-card"
import { ScoreBreakdown } from "@/components/analysis/score-breakdown"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Share2,
  Bookmark,
  ExternalLink,
  Star,
  Shield,
  Truck,
  Award,
  Brain,
  Sparkles,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  MessageSquare,
  IndianRupee,
  Wrench,
  FileWarning,
} from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const priceHistory = [
  { date: "Jan", price: 225000 },
  { date: "Feb", price: 220000 },
  { date: "Mar", price: 218000 },
  { date: "Apr", price: 215000 },
  { date: "May", price: 212000 },
  { date: "Jun", price: 215000 },
]

const scoreBreakdownItems = [
  { label: "Build Quality", score: 94, weight: 25 },
  { label: "Performance", score: 92, weight: 25 },
  { label: "Value for Money", score: 88, weight: 20 },
  { label: "User Reviews", score: 90, weight: 15 },
  { label: "Brand Reliability", score: 95, weight: 15 },
]

const pros = [
  "Iconic retro design with modern features",
  "Reliable 349cc engine with great mileage (35-40 kmpl)",
  "Excellent resale value in Indian market",
  "Wide service network across India",
  "Comfortable riding position for long rides",
  "Strong brand heritage and community",
]

const cons = [
  "Vibration at high speeds",
  "Limited power for highway overtakes",
  "Heavy weight (195 kg)",
  "Basic instrument cluster compared to competitors",
]

const considerations = [
  "Consider RE Hunter 350 for better highway performance",
  "Insurance costs are moderate (~₹8,000/year)",
  "Service costs average ₹2,500-3,500 per service",
  "Spare parts are widely available and affordable",
]

const riskCategories = [
  { name: "Financial Risk", level: "low", color: "text-success" },
  { name: "Safety Risk", level: "low", color: "text-success" },
  { name: "Maintenance Risk", level: "medium", color: "text-warning" },
  { name: "Reliability Risk", level: "low", color: "text-success" },
]

export default function AnalysisResultPage() {
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
          <div className="flex items-center gap-4">
            <Link href="/analyze">
              <Button variant="outline" size="icon" className="border-border">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Royal Enfield Classic 350</h1>
              <p className="text-muted-foreground text-sm">Analysis completed just now</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="border-border">
              <Bookmark className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-border">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Product
            </Button>
          </div>
        </motion.div>

        {/* Main score card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-strong rounded-3xl p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <TrustScoreGauge score={92} size="lg" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
                  Highly Recommended
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  Top Pick in India
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-3">Excellent Choice for Indian Roads</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {"The Royal Enfield Classic 350 is one of India's most iconic motorcycles with a strong heritage. Our AI analysis shows excellent reliability, great resale value, and a vast service network making it an ideal choice for daily commuting and leisure rides."}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 shrink-0">
              <div className="glass rounded-xl p-4 text-center">
                <IndianRupee className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold">{'\u20B9'}2,15,000</p>
                <p className="text-xs text-muted-foreground">Ex-showroom Price</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <Star className="w-5 h-5 text-warning mx-auto mb-2" />
                <p className="text-lg font-bold">4.6/5</p>
                <p className="text-xs text-muted-foreground">User Rating</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Recommendation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="glass rounded-2xl p-6 mb-8 border-2 border-success/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">AI Recommendation</h3>
              <p className="text-success font-medium">Recommended Purchase</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-sm text-muted-foreground">Confidence Score</p>
              <p className="text-2xl font-bold text-success">92%</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Strong reliability record</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Positive customer feedback</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Low fraud probability</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Good long-term value</span>
            </div>
          </div>
        </motion.div>

        {/* Risk Analysis Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Risk Analysis Dashboard</h3>
            <span className="ml-auto px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
              Overall Risk: Low
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {riskCategories.map((risk, index) => (
              <motion.div
                key={risk.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="glass rounded-xl p-4 text-center"
              >
                <div className={`w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center ${
                  risk.level === 'low' ? 'bg-success/20' : 'bg-warning/20'
                }`}>
                  {risk.level === 'low' ? (
                    <CheckCircle className="w-5 h-5 text-success" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-warning" />
                  )}
                </div>
                <p className="text-sm font-medium mb-1">{risk.name}</p>
                <p className={`text-xs font-semibold capitalize ${risk.color}`}>{risk.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fake Review Detection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Eye className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Fake Review Analysis</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="glass rounded-xl p-4 text-center">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">1,250</p>
              <p className="text-sm text-muted-foreground">Reviews Analyzed</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-3xl font-bold text-success">88%</p>
              <p className="text-sm text-muted-foreground">Genuine Reviews</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
              <p className="text-3xl font-bold text-warning">12%</p>
              <p className="text-sm text-muted-foreground">Suspicious Reviews</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium mb-2">AI Findings:</p>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-warning/10">
              <FileWarning className="w-4 h-4 text-warning shrink-0" />
              <span className="text-sm">Repetitive review patterns detected in 8% of reviews</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-warning/10">
              <AlertCircle className="w-4 h-4 text-warning shrink-0" />
              <span className="text-sm">Unusual rating spikes identified during sale periods</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10">
              <Eye className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm">Potential promotional reviews flagged and excluded from analysis</span>
            </div>
          </div>
        </motion.div>

        {/* Costs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Maintenance Cost */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Maintenance Cost</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                <span className="text-sm">Regular Service (per visit)</span>
                <span className="font-semibold">{'\u20B9'}2,500 - {'\u20B9'}3,500</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                <span className="text-sm">Annual Insurance</span>
                <span className="font-semibold">{'\u20B9'}7,500 - {'\u20B9'}9,000</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                <span className="text-sm">Tyre Replacement</span>
                <span className="font-semibold">{'\u20B9'}4,000 - {'\u20B9'}6,000</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10">
                <span className="text-sm font-medium">Est. Annual Maintenance</span>
                <span className="font-bold text-primary">{'\u20B9'}15,000 - {'\u20B9'}20,000</span>
              </div>
            </div>
          </motion.div>

          {/* Hidden Costs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-warning" />
              <h3 className="text-lg font-semibold">Hidden Costs</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-warning/10">
                <span className="text-sm">Road Tax & Registration</span>
                <span className="font-semibold">{'\u20B9'}18,000 - {'\u20B9'}22,000</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-warning/10">
                <span className="text-sm">Accessories & Add-ons</span>
                <span className="font-semibold">{'\u20B9'}5,000 - {'\u20B9'}15,000</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-warning/10">
                <span className="text-sm">Extended Warranty (3 yrs)</span>
                <span className="font-semibold">{'\u20B9'}4,500</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-destructive/10">
                <span className="text-sm font-medium">Total On-Road Price</span>
                <span className="font-bold text-destructive">{'\u20B9'}2,45,000 - {'\u20B9'}2,55,000</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Risk and breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Risk Assessment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Safety Analysis</h3>
            </div>
            <div className="space-y-6">
              <RiskMeter level="low" percentage={18} />
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10">
                  <Award className="w-5 h-5 text-success" />
                  <div>
                    <p className="text-sm font-medium">Verified Dealer</p>
                    <p className="text-xs text-muted-foreground">Authorized RE dealership</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10">
                  <Truck className="w-5 h-5 text-success" />
                  <div>
                    <p className="text-sm font-medium">Doorstep Delivery</p>
                    <p className="text-xs text-muted-foreground">Free delivery in most cities</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10">
                  <Shield className="w-5 h-5 text-success" />
                  <div>
                    <p className="text-sm font-medium">3 Year Warranty</p>
                    <p className="text-xs text-muted-foreground">Standard manufacturer warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Score Breakdown */}
          <ScoreBreakdown items={scoreBreakdownItems} />

          {/* AI Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">AI Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-xl bg-primary/10">
                <Sparkles className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium">Best Time to Buy</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Festive season discounts of {'\u20B9'}8,000-12,000 expected in October
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-xl bg-chart-2/10">
                <TrendingUp className="w-5 h-5 text-chart-2 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Resale Value</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    RE bikes retain 65-70% value after 3 years. Excellent for upgrades.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-xl bg-accent/10">
                <Brain className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <p className="text-sm font-medium">Alternative Suggestion</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Consider Honda CB350 for smoother city riding experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pros and Cons */}
        <div className="mb-8">
          <ProsConsCard pros={pros} cons={cons} considerations={considerations} />
        </div>

        {/* Price History Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Price History</h3>
              <p className="text-sm text-muted-foreground">Last 6 months price trends</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Lowest:</span>
              <span className="text-sm font-bold text-success">{'\u20B9'}2,12,000</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis
                  dataKey="date"
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
                  tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`}
                  domain={["dataMin - 10000", "dataMax + 10000"]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                  labelStyle={{ color: "var(--foreground)" }}
                  formatter={(value: number) => [`₹${value.toLocaleString('en-IN')}`, "Price"]}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="var(--primary)"
                  strokeWidth={3}
                  dot={{ fill: "var(--primary)", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "var(--primary)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Final Verdict */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="glass-strong rounded-2xl p-6 mt-8 border-2 border-primary/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Final Purchase Verdict</h3>
              <p className="text-primary font-medium">Safe to Purchase</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Based on our comprehensive AI analysis of 1,250+ reviews, market data, and reliability scores, 
            the Royal Enfield Classic 350 is a safe and recommended purchase for Indian consumers. 
            The motorcycle offers excellent value, strong resale potential, and a reliable ownership experience 
            backed by an extensive service network across India.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <CheckCircle className="w-4 h-4 mr-2" />
              Proceed with Purchase
            </Button>
            <Button variant="outline" className="border-border">
              <Share2 className="w-4 h-4 mr-2" />
              Share Analysis
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
