"use client"

import { motion } from "framer-motion"
import { Check, X, AlertTriangle } from "lucide-react"

interface ProsCons {
  pros: string[]
  cons: string[]
  considerations: string[]
}

export function ProsConsCard({ pros, cons, considerations }: ProsCons) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="text-lg font-semibold mb-6">Pros & Cons Analysis</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Pros */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
              <Check className="w-5 h-5 text-success" />
            </div>
            <span className="font-medium text-success">Pros</span>
          </div>
          <ul className="space-y-3">
            {pros.map((pro, index) => (
              <motion.li
                key={pro}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start gap-2 text-sm"
              >
                <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{pro}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center">
              <X className="w-5 h-5 text-destructive" />
            </div>
            <span className="font-medium text-destructive">Cons</span>
          </div>
          <ul className="space-y-3">
            {cons.map((con, index) => (
              <motion.li
                key={con}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start gap-2 text-sm"
              >
                <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{con}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Considerations */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-warning/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <span className="font-medium text-warning">Consider</span>
          </div>
          <ul className="space-y-3">
            {considerations.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start gap-2 text-sm"
              >
                <AlertTriangle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
