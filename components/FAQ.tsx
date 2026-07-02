'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getMessages, getLocaleFromCookie } from '@/lib/i18n'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [locale, setLocale] = useState('en')
  const messages = getMessages(locale)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4">
            {messages.faq.title}
          </h2>
          <p className="text-lg text-[#A1A1AA]">
            {messages.faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {messages.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-[#18181B] border border-[#27272A] rounded-2xl transition-all duration-300 hover:border-[#3F3F46]"
              >
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-base font-medium text-[#FAFAFA] pr-8">
                    {item.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#A1A1AA]" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-[#A1A1AA] leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#A1A1AA]">
            Still have questions?{' '}
            <a
              href="mailto:support@creovalab.com"
              className="text-[#6D5DFB] hover:text-[#A78BFA] transition-colors font-medium"
            >
              Contact our support
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}