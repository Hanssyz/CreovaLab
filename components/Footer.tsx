'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getMessages, getLocaleFromCookie } from '@/lib/i18n'
import {
  Youtube,
  Instagram,
  Twitter,
  Github,
  Mail,
  ArrowRight,
} from 'lucide-react'
import Button from './Button'

const footerLinks = {
  product: [
    { label: 'AI Script', href: '#features' },
    { label: 'Text to Speech', href: '#features' },
    { label: 'Subtitle Generator', href: '#features' },
    { label: 'Caption Generator', href: '#features' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: 'mailto:hello@creovalab.com' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'Github' },
]

export default function Footer() {
  const [locale, setLocale] = useState('en')
  const messages = getMessages(locale)

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])

  return (
    <footer className="border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold gradient-text inline-block mb-4"
            >
              CreovaLab
            </Link>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 max-w-sm">
              AI-powered workspace for faceless content creators. Generate
              scripts, voiceovers, subtitles, and captions all in one place.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 max-w-sm">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A1A1AA]" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#18181B] border border-[#27272A] rounded-xl py-2.5 pl-10 pr-3 text-sm text-[#FAFAFA] placeholder-[#A1A1AA] outline-none focus:border-[#6D5DFB] transition-colors"
                />
              </div>
              <Button size="sm">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-semibold text-[#FAFAFA] mb-4">
              {messages.footer.product}
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#FAFAFA] mb-4">
              {messages.footer.company}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#FAFAFA] mb-4">
              {messages.footer.legal}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#A1A1AA]">
            {messages.footer.copyright}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#3F3F46] transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}