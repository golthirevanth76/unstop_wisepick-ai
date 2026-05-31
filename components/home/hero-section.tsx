"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, ArrowRight, Shield, Zap, Brain, Search, Car, Home, Briefcase, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleAnalyze = () => {
    if (searchQuery.trim()) {
      router.push(`/analyze?q=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push("/analyze")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            AI-Powered Decision Intelligence for India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">WisePick AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
        >
          Know Everything Before You Buy Anything.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          An AI-powered decision intelligence platform that analyzes products, vehicles, 
          properties, services, and investments to help users make safer and smarter purchasing decisions.
        </motion.p>

        {/* Large AI Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="glass-strong rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search any product, vehicle, property, service or investment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                className="h-14 pl-12 pr-4 bg-secondary/50 border-0 text-base rounded-xl w-full"
              />
            </div>
            <Button 
              size="lg" 
              onClick={handleAnalyze}
              className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-base rounded-xl"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Analyze Now
            </Button>
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { icon: Car, label: "Vehicles" },
            { icon: Home, label: "Properties" },
            { icon: Briefcase, label: "Services" },
            { icon: TrendingUp, label: "Investments" },
          ].map((category, index) => (
            <motion.button
              key={category.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
              onClick={() => setSearchQuery(category.label)}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-secondary/50 transition-colors"
            >
              <category.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Shield, label: "Trust Scores" },
            { icon: Zap, label: "Instant Analysis" },
            { icon: Brain, label: "AI Insights" },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass"
            >
              <feature.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating product cards preview - Indian examples */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4"
      >
        <div className="relative glass-strong rounded-t-3xl p-6 pb-0">
          <div className="flex gap-4 overflow-hidden">
            {[
              { score: 92, name: "Royal Enfield Classic 350", risk: "Low", price: "2,15,000" },
              { score: 88, name: "Honda City 2024", risk: "Low", price: "12,50,000" },
              { score: 74, name: "iPhone 16 Pro", risk: "Medium", price: "1,19,900" },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex-1 min-w-[200px] glass rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground">Trust Score</span>
                  <span className={`text-lg font-bold ${product.score >= 80 ? 'text-success' : 'text-warning'}`}>
                    {product.score}%
                  </span>
                </div>
                <p className="font-medium text-sm mb-1 truncate">{product.name}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    product.risk === 'Low' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                  }`}>
                    {product.risk} Risk
                  </span>
                  <span className="text-xs font-semibold text-primary">{'\u20B9'}{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
