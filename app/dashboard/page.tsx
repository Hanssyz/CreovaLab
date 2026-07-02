'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  FileText,
  Mic,
  Subtitles,
  MessageSquare,
  Clock,
  Coins,
  Settings,
  Search,
  Sparkles,
  Zap,
  TrendingUp,
  Plus,
  ChevronRight,
  Bell,
  User,
} from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: FileText, label: 'AI Script' },
  { icon: Mic, label: 'Text to Speech' },
  { icon: Subtitles, label: 'Subtitle' },
  { icon: MessageSquare, label: 'Caption' },
  { icon: Clock, label: 'History' },
  { icon: Coins, label: 'Credits' },
  { icon: Settings, label: 'Settings' },
]

const recentProjects = [
  {
    id: 1,
    title: 'Mystery Story - Episode 1',
    type: 'Script',
    date: '2 hours ago',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Motivational Reel Voiceover',
    type: 'TTS',
    date: '5 hours ago',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Tech Review Subtitles',
    type: 'Subtitle',
    date: '1 day ago',
    status: 'processing',
  },
  {
    id: 4,
    title: 'Instagram Caption Set',
    type: 'Caption',
    date: '2 days ago',
    status: 'completed',
  },
]

const quickActions = [
  { icon: FileText, label: 'New Script', color: 'from-violet-500 to-purple-600' },
  { icon: Mic, label: 'New Voiceover', color: 'from-blue-500 to-cyan-600' },
  { icon: Subtitles, label: 'New Subtitle', color: 'from-emerald-500 to-teal-600' },
  { icon: MessageSquare, label: 'New Caption', color: 'from-orange-500 to-amber-600' },
]

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState('Home')

  return (
    <div className="flex h-screen bg-[#09090B]">
      {/* ========== SIDEBAR ========== */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-[#27272A] bg-[#09090B]/50 backdrop-blur-xl">
        {/* Logo */}
        <div className="p-6 border-b border-[#27272A]">
          <h1 className="text-xl font-bold gradient-text">CreovaLab</h1>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveMenu(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                activeMenu === item.label
                  ? 'bg-[#6D5DFB]/10 text-[#6D5DFB]'
                  : 'text-[#A1A1AA] hover:bg-[#18181B] hover:text-[#FAFAFA]'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
              {activeMenu === item.label && (
                <motion.div
                  layoutId="activeTab"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6D5DFB]"
                />
              )}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-[#27272A]">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#18181B] cursor-pointer transition-colors">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6D5DFB] to-[#A78BFA] flex items-center justify-center text-sm font-semibold">
              C
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#FAFAFA] truncate">Creator</p>
              <p className="text-xs text-[#A1A1AA] truncate">creator@email.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ========== MAIN CONTENT ========== */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#09090B]/80 backdrop-blur-xl border-b border-[#27272A]">
          <div className="flex items-center justify-between px-6 lg:px-8 py-4">
            <div>
              <h2 className="text-lg font-semibold text-[#FAFAFA]">
                Welcome back, Creator
              </h2>
              <p className="text-sm text-[#A1A1AA]">Let&apos;s create something amazing</p>
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="hidden sm:flex items-center gap-2 bg-[#18181B] border border-[#27272A] rounded-xl px-4 py-2.5">
                <Search className="w-4 h-4 text-[#A1A1AA]" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-transparent text-sm text-[#FAFAFA] placeholder-[#A1A1AA] outline-none w-48"
                />
              </div>

              <button className="relative p-2.5 rounded-xl hover:bg-[#18181B] transition-colors">
                <Bell className="w-5 h-5 text-[#A1A1AA]" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#6D5DFB] rounded-full" />
              </button>

              <button className="p-2.5 rounded-xl hover:bg-[#18181B] transition-colors lg:hidden">
                <User className="w-5 h-5 text-[#A1A1AA]" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 lg:p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Scripts Generated', value: '124', icon: FileText, color: 'text-violet-400' },
              { label: 'Voiceovers', value: '89', icon: Mic, color: 'text-blue-400' },
              { label: 'Subtitles', value: '56', icon: Subtitles, color: 'text-emerald-400' },
              { label: 'Credits Left', value: '450', icon: Coins, color: 'text-amber-400' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -2 }}
                className="bg-[#18181B] border border-[#27272A] rounded-2xl p-5 transition-all duration-300 hover:border-[#6D5DFB]/30"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-[#A1A1AA]">{stat.label}</span>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className="text-3xl font-bold text-[#FAFAFA]">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-semibold text-[#FAFAFA] mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action) => (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative overflow-hidden bg-[#18181B] border border-[#27272A] rounded-2xl p-6 text-left transition-all duration-300 hover:border-[#6D5DFB]/50 group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#27272A] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <action.icon className="w-5 h-5 text-[#FAFAFA]" />
                    </div>
                    <p className="text-sm font-medium text-[#FAFAFA]">{action.label}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Recent Projects */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#FAFAFA]">Recent Projects</h3>
              <button className="text-sm text-[#6D5DFB] hover:text-[#A78BFA] transition-colors flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden">
              {recentProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex items-center justify-between p-4 hover:bg-[#27272A]/50 transition-colors cursor-pointer ${
                    index !== recentProjects.length - 1 ? 'border-b border-[#27272A]' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#27272A] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#6D5DFB]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#FAFAFA]">{project.title}</p>
                      <p className="text-xs text-[#A1A1AA]">
                        {project.type} • {project.date}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.status === 'completed'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-amber-500/10 text-amber-400'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}