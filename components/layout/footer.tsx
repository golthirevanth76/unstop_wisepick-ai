"use client"

import { Brain } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  Product: [
    { label: "Features", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "Categories", href: "#" },
    { label: "API", href: "#" },
  ],
  Categories: [
    { label: "Vehicles", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Property", href: "#" },
    { label: "Investments", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">WisePick AI</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed mb-4">
              AI-powered decision intelligence platform helping Indian consumers make smarter purchasing decisions.
            </p>
            <p className="text-xs text-muted-foreground">
              Made with care for Indian consumers
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            2024 WisePick AI. A Hackathon Project. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
