'use client'

import { motion } from 'framer-motion'
import {
  FileText,
  Mic,
  Subtitles,
  MessageSquare,
  Clock,
  Coins,
  Settings,
  Search,
  Bell,
  Sparkles,
  TrendingUp,
  ChevronRight,
} from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#6D5DFB]/[0.03] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4">
            Beautiful Workspace
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Not just tools. A modern workspace designed for creators who care
            about experience.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#6D5DFB]/20 via-[#8B5CF6]/10 to-[#A78BFA]/20 rounded-3xl blur-3xl opacity-50" />

          {/* Window */}
          <div className="relative bg-[#09090B] border border-[#27272A] rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Window Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[#27272A] bg-[#18181B]/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-[#27272A] rounded-lg px-4 py-1.5 flex items-center gap-2 w-64">
                  <Search className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <span className="text-xs text-[#A1A1AA]">Search anything...</span>
                </div>
              </div>
              <Bell className="w-4 h-4 text-[#A1A1AA]" />
            </div>

            {/* Window Content */}
            <div className="flex h-[500px]">
              {/* Sidebar */}
              <div className="w-56 border-r border-[#27272A] p-4 space-y-1 bg-[#09090B]/50">
                {[
                  { icon: Sparkles, label: 'Home', active: true },
                  { icon: FileText, label: 'Script' },
                  { icon: Mic, label: 'Voiceover' },
                  { icon: Subtitles, label: 'Subtitle' },
                  { icon: MessageSquare, label: 'Caption' },
                  { icon: Clock, label: 'History' },
                  { icon: Coins, label: 'Credits' },
                  { icon: Settings, label: 'Settings' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm cursor-pointer transition-all duration-200 ${
                      item.active
                        ? 'bg-[#6D5DFB]/10 text-[#A78BFA]'
                        : 'text-[#A1A1AA] hover:bg-[#18181B] hover:text-[#FAFAFA]'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FAFAFA]">
                      Welcome back, Creator
                    </h3>
                    <p className="text-sm text-[#A1A1AA]">
                      Ready to create something amazing?
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6D5DFB]">
                    View all <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Scripts', value: '124', icon: FileText, color: 'text-violet-400' },
                    { label: 'Voiceovers', value: '89', icon: Mic, color: 'text-blue-400' },
                    { label: 'Credits', value: '450', icon: Coins, color: 'text-amber-400' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#18181B] border border-[#27272A] rounded-2xl p-4 hover:border-[#6D5DFB]/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-[#A1A1AA]">{stat.label}</span>
                        <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      </div>
                      <p className="text-2xl font-bold text-[#FAFAFA]">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div>
                  <h4 className="text-sm font-medium text-[#FAFAFA] mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { icon: FileText, label: 'New Script', color: 'from-violet-500/20 to-purple-600/20' },
                      { icon: Mic, label: 'New Voiceover', color: 'from-blue-500/20 to-cyan-600/20' },
                      { icon: Subtitles, label: 'Add Subtitles', color: 'from-emerald-500/20 to-teal-600/20' },
                      { icon: MessageSquare, label: 'Generate Caption', color: 'from-orange-500/20 to-amber-600/20' },
                    ].map((action) => (
                      <div
                        key={action.label}
                        className={`bg-gradient-to-br ${action.color} border border-[#27272A] rounded-2xl p-4 cursor-pointer hover:border-[#6D5DFB]/30 transition-all duration-300 hover:scale-105`}
                      >
                        <action.icon className="w-5 h-5 text-[#FAFAFA] mb-3" />
                        <p className="text-xs font-medium text-[#FAFAFA]">{action.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h4 className="text-sm font-medium text-[#FAFAFA] mb-3">Recent Activity</h4>
                  <div className="bg-[#18181B] border border-[#27272A] rounded-2xl divide-y divide-[#27272A]">
                    {[
                      { title: 'Mystery Story - Ep 1', type: 'Script', time: '2h ago', status: 'done' },
                      { title: 'Motivation Reel Voice', type: 'TTS', time: '5h ago', status: 'done' },
                      { title: 'Tech Review Subs', type: 'Subtitle', time: '1d ago', status: 'progress' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 hover:bg-[#27272A]/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#27272A] flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-[#6D5DFB]" />
                          </div>
                          <div>
                            <p className="text-sm text-[#FAFAFA]">{item.title}</p>
                            <p className="text-xs text-[#A1A1AA]">{item.type} • {item.time}</p>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'done'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-amber-500/10 text-amber-400'
                        }`}>
                          {item.status === 'done' ? 'Done' : 'Processing'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}