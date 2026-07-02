'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from './Button'
import { getMessages, getLocaleFromCookie } from '@/lib/i18n'
import { Play, ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react'

export default function Hero() {
  const [locale, setLocale] = useState('en')
  const messages = getMessages(locale)

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])

  const stats = [
    { value: messages.hero.stats.creators, label: messages.hero.stats.creatorsLabel, icon: Users },
    { value: messages.hero.stats.content, label: messages.hero.stats.contentLabel, icon: Sparkles },
    { value: messages.hero.stats.time, label: messages.hero.stats.timeLabel, icon: TrendingUp },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6D5DFB]/20 via-transparent to-[#A78BFA]/20 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6D5DFB]/10 via-transparent to-transparent" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-[#6D5DFB]/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-[#A78BFA]/5 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
          </span>
          <span className="text-sm text-[#A1A1AA]">{messages.hero.badge}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          {messages.hero.title}{' '}
          <br className="sm:hidden" />
          <span className="gradient-text">{messages.hero.titleHighlight}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg lg:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
        >
          {messages.hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link href="/auth">
            <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              {messages.hero.cta}
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            leftIcon={<Play className="w-4 h-4" />}
          >
            {messages.hero.demo}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#A1A1AA]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Dashboard Preview Mini */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl hidden lg:block"
        >
          <div className="relative bg-[#18181B] border border-[#27272A] rounded-3xl p-4 shadow-2xl shadow-black/50">
            {/* Fake Dashboard Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#27272A]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 bg-[#27272A] rounded-lg h-6 mx-4" />
            </div>
            {/* Fake Dashboard Content */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#27272A] rounded-2xl h-24 animate-pulse" />
              <div className="bg-[#27272A] rounded-2xl h-24 animate-pulse delay-100" />
              <div className="bg-[#27272A] rounded-2xl h-24 animate-pulse delay-200" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Fix: Import Users
import { Users } from 'lucide-react'