'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getMessages, getLocaleFromCookie } from '@/lib/i18n'
import { Card } from './Card'
import Button from './Button'
import { Check, Zap, Star, Shield } from 'lucide-react'
import Link from 'next/link'

const planIcons = {
  free: <Zap className="w-5 h-5 text-[#A78BFA]" />,
  pro: <Star className="w-5 h-5 text-[#FBBF24]" />,
  business: <Shield className="w-5 h-5 text-[#34D399]" />,
}

export default function Pricing() {
  const [locale, setLocale] = useState('en')
  const messages = getMessages(locale)

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])

  const plans = Object.entries(messages.pricing.plans).map(([key, value]) => ({
    key,
    icon: planIcons[key as keyof typeof planIcons],
    name: value.name,
    price: value.price,
    period: value.period || '',
    description: value.description,
    features: value.features,
    popular: 'popular' in value ? value.popular : false,
  }))

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
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
            {messages.pricing.title}
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            {messages.pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-[#6D5DFB] to-[#A78BFA] text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-lg shadow-[#6D5DFB]/25">
                    Most Popular
                  </span>
                </div>
              )}

              <Card
                hover={false}
                className={`h-full flex flex-col ${
                  plan.popular
                    ? 'border-[#6D5DFB]/30 shadow-lg shadow-[#6D5DFB]/10'
                    : ''
                }`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#27272A] flex items-center justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#FAFAFA] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[#A1A1AA]">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#FAFAFA]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[#A1A1AA] ml-1">{plan.period}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#A1A1AA]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/auth" className="block">
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}