"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { value: 1500000, suffix: "+", label: "Products Analyzed", prefix: "" },
  { value: 98.5, suffix: "%", label: "Accuracy Rate", prefix: "" },
  { value: 75000, suffix: "+", label: "Indian Users", prefix: "" },
  { value: 4.8, suffix: "/5", label: "User Rating", prefix: "" },
]

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 100000).toFixed(0) + " Lakh"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num.toFixed(num % 1 !== 0 ? 1 : 0)
  }

  return (
    <span className="gradient-text">
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Trusted by Indian Consumers</h3>
            <p className="text-muted-foreground">Helping lakhs of users make smarter purchasing decisions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
