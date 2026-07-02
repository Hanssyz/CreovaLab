'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getMessages, getLocaleFromCookie } from '@/lib/i18n'
import { FeatureCard } from './Card'
import {
  FileText,
  Mic,
  Subtitles,
  MessageSquare,
  Clock,
  Coins,
} from 'lucide-react'

const featureIcons = {
  script: <FileText className="w-6 h-6 text-[#A78BFA]" />,
  tts: <Mic className="w-6 h-6 text-[#60A5FA]" />,
  subtitle: <Subtitles className="w-6 h-6 text-[#34D399]" />,
  caption: <MessageSquare className="w-6 h-6 text-[#FBBF24]" />,
  history: <Clock className="w-6 h-6 text-[#F472B6]" />,
  credits: <Coins className="w-6 h-6 text-[#FB923C]" />,
}

const comingSoonFeatures = ['credits']

export default function Features() {
  const [locale, setLocale] = useState('en')
  const messages = getMessages(locale)

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])

  const features = Object.entries(messages.features.items).map(([key, value]) => ({
    key,
    icon: featureIcons[key as keyof typeof featureIcons],
    title: value.title,
    description: value.description,
    comingSoon: comingSoonFeatures.includes(key),
  }))

  return (
    <section id="features" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4">
            {messages.features.title}
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            {messages.features.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                comingSoon={feature.comingSoon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}