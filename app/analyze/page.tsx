"use client"

import { motion } from "framer-motion"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Link as LinkIcon,
  Upload,
  Sparkles,
  ArrowRight,
  Car,
  Home,
  Smartphone,
  Briefcase,
  TrendingUp,
  GraduationCap,
} from "lucide-react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"

const categories = [
  { icon: Car, label: "Vehicles", color: "from-primary to-accent", examples: ["Royal Enfield", "Honda City", "Tata Nexon"] },
  { icon: Smartphone, label: "Electronics", color: "from-chart-2 to-primary", examples: ["iPhone 16", "Samsung S25", "OnePlus 13"] },
  { icon: Home, label: "Property", color: "from-accent to-chart-3", examples: ["Apartments", "Plots", "Commercial"] },
  { icon: Briefcase, label: "Services", color: "from-chart-4 to-chart-2", examples: ["Insurance", "Loans", "Internet"] },
  { icon: TrendingUp, label: "Investments", color: "from-chart-5 to-accent", examples: ["Mutual Funds", "Stocks", "FDs"] },
  { icon: GraduationCap, label: "Education", color: "from-primary to-chart-4", examples: ["Courses", "Colleges", "Coaching"] },
]

const recentSearches = [
  "Royal Enfield Classic 350",
  "Honda City 2024",
  "iPhone 16 Pro Max",
  "Tata Nexon EV",
  "Samsung Galaxy S25",
  "Hyundai Creta 2024",
]

const popularProducts = [
  { name: "Royal Enfield Classic 350", category: "Vehicles", score: 92 },
  { name: "Honda City 2024", category: "Vehicles", score: 88 },
  { name: "iPhone 16 Pro", category: "Electronics", score: 85 },
  { name: "Tata Nexon EV", category: "Vehicles", score: 90 },
  { name: "OnePlus 13", category: "Electronics", score: 86 },
]

function AnalyzeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ""
  
  const [url, setUrl] = useState("")
  const [productName, setProductName] = useState(initialQuery)
  const [description, setDescription] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = async () => {
    if (!url && !productName) return
    setIsAnalyzing(true)
    setTimeout(() => {
      router.push("/analyze/result")
    }, 2000)
  }

  return (
    <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 lg:mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Analyze Product</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Enter a product URL or describe what you want to analyze
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-8">
        {/* Main input section */}
        <div className="xl:col-span-2 space-y-4 lg:space-y-6">
          {/* URL Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <LinkIcon className="w-5 h-5 text-primary" />
              <h2 className="text-base sm:text-lg font-semibold">Product URL</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Paste Amazon.in, Flipkart, or any product URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-secondary border-border h-12 flex-1"
              />
              <Button
                onClick={handleAnalyze}
                disabled={!url && !productName}
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 w-full sm:w-auto"
              >
                {isAnalyzing ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Analyze
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Manual input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Upload className="w-5 h-5 text-primary" />
              <h2 className="text-base sm:text-lg font-semibold">Manual Entry</h2>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="productName">Product Name</Label>
                <Input
                  id="productName"
                  placeholder="e.g., Royal Enfield Classic 350, Honda City, iPhone 16 Pro"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="bg-secondary border-border h-12 mt-2"
                />
              </div>
              <div>
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Add any specific details, budget constraints, or requirements..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-secondary border-border mt-2 min-h-[100px]"
                />
              </div>
              <Button
                onClick={handleAnalyze}
                disabled={!url && !productName}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
              >
                {isAnalyzing ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Analyzing...
                  </motion.div>
                ) : (
                  <>
                    Start Analysis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <h2 className="text-base sm:text-lg font-semibold mb-4">Browse Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  onClick={() => setProductName(category.label)}
                  className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl hover:bg-secondary/50 transition-colors group text-left"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm font-medium block">{category.label}</span>
                    <span className="text-xs text-muted-foreground hidden sm:block">{category.examples[0]}, {category.examples[1]}...</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar - stacks on mobile */}
        <div className="space-y-4 lg:space-y-6">
          {/* Recent searches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <h2 className="text-base sm:text-lg font-semibold mb-4">Recent Searches</h2>
            <div className="space-y-2">
              {recentSearches.slice(0, 5).map((search, index) => (
                <motion.button
                  key={search}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  onClick={() => setProductName(search)}
                  className="w-full text-left p-3 rounded-xl hover:bg-secondary/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                >
                  <Search className="w-4 h-4 inline-block mr-2" />
                  <span className="truncate">{search}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Popular Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <h2 className="text-base sm:text-lg font-semibold mb-4">Popular in India</h2>
            <div className="space-y-3">
              {popularProducts.map((product, index) => (
                <motion.button
                  key={product.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  onClick={() => setProductName(product.name)}
                  className="w-full text-left p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.category}</p>
                    </div>
                    <span className={`text-sm font-bold ml-2 ${product.score >= 85 ? 'text-success' : 'text-warning'}`}>
                      {product.score}%
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-base sm:text-lg font-semibold">Pro Tips</h2>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Use direct Amazon.in or Flipkart URLs for best results
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Add budget range in description for value analysis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Compare multiple products to find the best deal
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Check festive season prices for maximum savings
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default function AnalyzePage() {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />
      <Suspense fallback={
        <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-secondary rounded mb-4"></div>
            <div className="h-4 w-64 bg-secondary rounded"></div>
          </div>
        </main>
      }>
        <AnalyzeContent />
      </Suspense>
    </div>
  )
}
