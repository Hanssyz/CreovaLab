'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { getMessages, getLocaleFromCookie, setLocaleCookie } from '@/lib/i18n'
import Button from './Button'
import { Globe, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'

const languages = {
  en: { label: 'English', flag: '🇺🇸' },
  id: { label: 'Indonesia', flag: '🇮🇩' },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [locale, setLocale] = useState('en')
  const [langOpen, setLangOpen] = useState(false)

  const messages = getMessages(locale)

  useEffect(() => {
    setLocale(getLocaleFromCookie())
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale)
    setLocaleCookie(newLocale)
    setLangOpen(false)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  const navItems = [
    { label: messages.nav.features, id: 'features' },
    { label: messages.nav.pricing, id: 'pricing' },
    { label: messages.nav.faq, id: 'faq' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass border-b border-white/[0.08] py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/"
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              CreovaLab
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors px-3 py-2 rounded-xl hover:bg-white/[0.05]"
              >
                <Globe className="w-4 h-4" />
                {languages[locale as keyof typeof languages]?.flag}
                <ChevronDown
                  className={cn(
                    'w-3 h-3 transition-transform duration-200',
                    langOpen && 'rotate-180'
                  )}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-44 bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden shadow-xl shadow-black/50"
                  >
                    {Object.entries(languages).map(([code, lang]) => (
                      <button
                        key={code}
                        onClick={() => changeLanguage(code)}
                        className={cn(
                          'w-full text-left px-4 py-3 text-sm hover:bg-white/[0.05] transition-colors flex items-center gap-2',
                          locale === code
                            ? 'text-[#6D5DFB] bg-[#6D5DFB]/5'
                            : 'text-[#A1A1AA]'
                        )}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                        {locale === code && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6D5DFB]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/auth">
              <Button variant="ghost" size="sm">
                {messages.nav.login}
              </Button>
            </Link>

            <Link href="/auth">
              <Button size="sm">{messages.nav.getStarted}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#FAFAFA] hover:bg-white/[0.05] rounded-xl transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#09090B] border-l border-[#27272A] p-6"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#A1A1AA] hover:text-[#FAFAFA] rounded-xl hover:bg-white/[0.05] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 mb-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/[0.05] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="border-t border-[#27272A] pt-6 space-y-4">
                {/* Language Selector */}
                <div className="flex gap-2">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className={cn(
                        'flex-1 px-3 py-2 rounded-xl text-sm text-center transition-colors',
                        locale === code
                          ? 'bg-[#6D5DFB]/10 text-[#6D5DFB] border border-[#6D5DFB]/20'
                          : 'text-[#A1A1AA] border border-[#27272A] hover:border-[#3F3F46]'
                      )}
                    >
                      {lang.flag} {code.toUpperCase()}
                    </button>
                  ))}
                </div>

                <Link href="/auth" className="block">
                  <Button variant="secondary" className="w-full">
                    {messages.nav.login}
                  </Button>
                </Link>
                <Link href="/auth" className="block">
                  <Button className="w-full">{messages.nav.getStarted}</Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}