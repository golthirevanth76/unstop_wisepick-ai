"use client"

import { motion } from "framer-motion"
import { Brain, Shield, TrendingUp, Zap, Eye, AlertTriangle } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning analyzes thousands of data points including reviews, pricing trends, and market reputation.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Shield,
    title: "Trust Score Engine",
    description: "Proprietary 0-100 scoring system evaluates authenticity, quality, reliability, and value for Indian consumers.",
    gradient: "from-chart-2 to-primary",
  },
  {
    icon: Eye,
    title: "Fake Review Detection",
    description: "AI identifies suspicious reviews, promotional content, and rating manipulation to show you genuine feedback.",
    gradient: "from-accent to-chart-3",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Comprehensive analysis of financial, safety, maintenance, and reliability risks before you make a purchase.",
    gradient: "from-chart-4 to-chart-2",
  },
  {
    icon: Zap,
    title: "Hidden Cost Analysis",
    description: "Discover maintenance costs, insurance, registration, and other hidden expenses in Indian Rupees.",
    gradient: "from-chart-5 to-accent",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Real-time price tracking, festive discounts prediction, and best time to buy recommendations.",
    gradient: "from-primary to-chart-4",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Powerful Tools for</span>
            <br />
            <span className="gradient-text">Smart Decisions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to make informed purchasing decisions in India, powered by cutting-edge AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-secondary/50 hover:border-primary/30">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
