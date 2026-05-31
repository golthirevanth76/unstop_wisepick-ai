"use client"

import { motion } from "framer-motion"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Palette,
  Globe,
  Mail,
  Smartphone,
} from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />

      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-1">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Profile</h2>
              </div>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white">
                  A
                </div>
                <div>
                  <Button variant="outline" size="sm" className="border-border">
                    Change Avatar
                  </Button>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      defaultValue="Alex"
                      className="bg-secondary border-border h-12 mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      defaultValue="Johnson"
                      className="bg-secondary border-border h-12 mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="alex@example.com"
                    className="bg-secondary border-border h-12 mt-2"
                  />
                </div>
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Notifications</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">Email Notifications</p>
                      <p className="text-xs text-muted-foreground">Receive analysis reports via email</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">Push Notifications</p>
                      <p className="text-xs text-muted-foreground">Get alerts for price drops</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">Weekly Digest</p>
                      <p className="text-xs text-muted-foreground">Summary of your activity</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Security</h2>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start h-12 border-border">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start h-12 border-border">
                  Enable Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full justify-start h-12 border-border text-destructive hover:text-destructive">
                  Delete Account
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Your Plan</h2>
              </div>
              <div className="glass-strong rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Free Plan</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">Current</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">10 analyses per month</p>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">7 of 10 analyses used</p>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Upgrade to Pro
              </Button>
            </motion.div>

            {/* Preferences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Palette className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Preferences</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm">Theme</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <button className="p-3 rounded-lg bg-secondary border-2 border-primary text-sm font-medium">
                      Dark
                    </button>
                    <button className="p-3 rounded-lg bg-secondary border border-border text-sm font-medium text-muted-foreground">
                      Light
                    </button>
                    <button className="p-3 rounded-lg bg-secondary border border-border text-sm font-medium text-muted-foreground">
                      Auto
                    </button>
                  </div>
                </div>
                <div>
                  <Label className="text-sm">Language</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <button className="p-3 rounded-lg bg-secondary border-2 border-primary text-sm font-medium">
                      English
                    </button>
                    <button className="p-3 rounded-lg bg-secondary border border-border text-sm font-medium text-muted-foreground">
                      Spanish
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Save button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex justify-end mt-8"
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Save Changes
          </Button>
        </motion.div>
      </main>
    </div>
  )
}
