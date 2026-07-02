'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getMessages, getLocaleFromCookie } from '@/lib/i18n'
import { FileText, Mic, Subtitles, Upload } from 'lucide-react'

const stepIcons = [
  <FileText key="script" className="w-6 h-6 text-[#A78BFA]" />,
  <Mic key="tts" className="w-6 h-6 text-[#60A5FA]" />,
  <Subtitles key="subtitle" className="w-6 h-6 text-[#34D399]" />,
  <Upload key="upload" className="w-6 h-6 text-[#FBBF24]" />,
]

export default function HowItWorks() {
  const [locale, setLocale] = useState('en')
  const messages = getMessages(locale)

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])

  const steps = messages.howItWorks.steps.map((step, index) => ({
    ...step,
    icon: stepIcons[index],
  }))

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6D5DFB]/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4">
            {messages.howItWorks.title}
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            {messages.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-[#27272A] to-transparent" />
              )}

              <div className="text-center">
                {/* Step Number */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-[#18181B] border border-[#27272A] flex flex-col items-center justify-center relative group hover:border-[#6D5DFB]/30 transition-all duration-300">
                  <span className="text-2xl font-bold gradient-text">
                    {step.step}
                  </span>
                  <div className="absolute -bottom-3 w-8 h-8 rounded-xl bg-[#6D5DFB]/10 border border-[#6D5DFB]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}