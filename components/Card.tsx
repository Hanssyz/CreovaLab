'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
  gradient?: boolean
}

export function Card({
  children,
  className,
  hover = true,
  onClick,
  gradient = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onClick={onClick}
      className={cn(
        'relative bg-[#18181B] border border-[#27272A] rounded-3xl p-6 lg:p-8',
        'transition-all duration-500',
        hover && 'hover:shadow-2xl hover:shadow-[#6D5DFB]/5 hover:border-[#6D5DFB]/30 cursor-pointer',
        gradient && 'gradient-border',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function CardIcon({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-2xl bg-[#6D5DFB]/10 flex items-center justify-center mb-4',
        'group-hover:scale-110 group-hover:bg-[#6D5DFB]/20 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}

export function FeatureCard({
  icon,
  title,
  description,
  comingSoon,
}: {
  icon: React.ReactNode
  title: string
  description: string
  comingSoon?: boolean
}) {
  return (
    <Card className="group">
      {comingSoon && (
        <span className="absolute top-4 right-4 text-[10px] font-medium px-2 py-1 rounded-full bg-[#6D5DFB]/10 text-[#A78BFA] border border-[#6D5DFB]/20">
          Coming Soon
        </span>
      )}
      <CardIcon>{icon}</CardIcon>
      <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2 group-hover:text-[#A78BFA] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex items-center text-[#6D5DFB] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
        Learn more
        <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </Card>
  )
}

export function StatCard({
  value,
  label,
  icon,
}: {
  value: string
  label: string
  icon?: React.ReactNode
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#6D5DFB]/30 hover:shadow-lg hover:shadow-[#6D5DFB]/5"
    >
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-[#6D5DFB]/10 flex items-center justify-center mx-auto mb-3">
          {icon}
        </div>
      )}
      <p className="text-3xl lg:text-4xl font-bold gradient-text mb-1">
        {value}
      </p>
      <p className="text-sm text-[#A1A1AA]">{label}</p>
    </motion.div>
  )
}