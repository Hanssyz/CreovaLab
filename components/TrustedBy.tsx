'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getMessages, getLocaleFromCookie } from '@/lib/i18n'

const brands = [
  { name: 'TechCrunch', logo: 'TC' },
  { name: 'Forbes', logo: 'FB' },
  { name: 'Product Hunt', logo: 'PH' },
  { name: 'Y Combinator', logo: 'YC' },
  { name: 'Techstars', logo: 'TS' },
  { name: '500 Global', logo: '500' },
]

export default function TrustedBy() {
  const [locale, setLocale] = useState('en')
  const messages = getMessages(locale)

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])

  return (
    <section className="py-16 lg:py-20 border-y border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-[#A1A1AA] mb-8"
        >
          {messages.trusted.title}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-[#27272A] flex items-center justify-center text-xs font-bold text-[#A1A1AA]">
                {brand.logo}
              </div>
              <span className="text-[#A1A1AA] text-sm font-medium">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}