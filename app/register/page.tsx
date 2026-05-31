"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Brain, ArrowRight, Github, Chrome, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const benefits = [
  "Unlimited product analyses",
  "AI-powered recommendations",
  "Trust score history",
  "Comparison tools",
]

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to dashboard for demo
    window.location.href = "/dashboard"
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Benefits section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-foreground">Start Making</span>
            <br />
            <span className="gradient-text">Smarter Decisions</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Join thousands of users who trust WisePick AI to guide their purchasing decisions.
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Form section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:hidden"
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">WisePick</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="text-center mb-6 hidden lg:block">
              <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">WisePick</span>
              </Link>
              <h1 className="text-2xl font-bold">Create your account</h1>
            </div>

            <h1 className="text-2xl font-bold mb-6 lg:hidden text-center">Create your account</h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary border-border h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-secondary border-border h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-secondary border-border h-12"
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="terms" required className="mt-1" />
                <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I agree to the{" "}
                  <Link href="#" className="text-primary hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>
                </Label>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base">
                Create Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 border-border hover:bg-secondary">
                <Github className="mr-2 w-5 h-5" />
                GitHub
              </Button>
              <Button variant="outline" className="h-12 border-border hover:bg-secondary">
                <Chrome className="mr-2 w-5 h-5" />
                Google
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
