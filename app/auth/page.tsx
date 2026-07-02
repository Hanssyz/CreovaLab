'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'

type AuthStep = 'login' | 'register' | 'forgot-password' | 'verify-otp'

export default function AuthPage() {
  const [step, setStep] = useState<AuthStep>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 'register') {
      setStep('verify-otp')
    } else if (step === 'login') {
      // Handle login
      console.log('Login:', { email, password })
    } else if (step === 'forgot-password') {
      setStep('verify-otp')
    }
  }

  return (
    <div className="min-h-screen bg-[#09090B] flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <AnimatePresence mode="wait">
            {/* ========== LOGIN FORM ========== */}
            {step === 'login' && (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-[#FAFAFA] mb-2">
                    Welcome back
                  </h1>
                  <p className="text-[#A1A1AA]">
                    Sign in to continue to CreovaLab
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        required
                        className="w-full bg-[#18181B] border border-[#27272A] rounded-xl py-3 pl-12 pr-4 text-[#FAFAFA] placeholder-[#A1A1AA] outline-none focus:border-[#6D5DFB] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="w-full bg-[#18181B] border border-[#27272A] rounded-xl py-3 pl-12 pr-12 text-[#FAFAFA] placeholder-[#A1A1AA] outline-none focus:border-[#6D5DFB] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep('forgot-password')}
                      className="text-sm text-[#6D5DFB] hover:text-[#A78BFA] transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#6D5DFB] hover:bg-[#5D4FEB] text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-[#6D5DFB]/25"
                  >
                    Sign In
                  </motion.button>
                </form>

                {/* Register Link */}
                <p className="mt-6 text-center text-sm text-[#A1A1AA]">
                  Don&apos;t have an account?{' '}
                  <button
                    onClick={() => setStep('register')}
                    className="text-[#6D5DFB] hover:text-[#A78BFA] transition-colors font-medium"
                  >
                    Create account
                  </button>
                </p>
              </motion.div>
            )}

            {/* ========== REGISTER FORM ========== */}
            {step === 'register' && (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-[#FAFAFA] mb-2">
                    Create account
                  </h1>
                  <p className="text-[#A1A1AA]">
                    Start creating faceless content with AI
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        required
                        className="w-full bg-[#18181B] border border-[#27272A] rounded-xl py-3 pl-12 pr-4 text-[#FAFAFA] placeholder-[#A1A1AA] outline-none focus:border-[#6D5DFB] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Min. 8 characters"
                        required
                        className="w-full bg-[#18181B] border border-[#27272A] rounded-xl py-3 pl-12 pr-12 text-[#FAFAFA] placeholder-[#A1A1AA] outline-none focus:border-[#6D5DFB] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Repeat your password"
                        required
                        className="w-full bg-[#18181B] border border-[#27272A] rounded-xl py-3 pl-12 pr-12 text-[#FAFAFA] placeholder-[#A1A1AA] outline-none focus:border-[#6D5DFB] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#6D5DFB] hover:bg-[#5D4FEB] text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-[#6D5DFB]/25"
                  >
                    Create Account
                  </motion.button>
                </form>

                {/* Login Link */}
                <p className="mt-6 text-center text-sm text-[#A1A1AA]">
                  Already have an account?{' '}
                  <button
                    onClick={() => setStep('login')}
                    className="text-[#6D5DFB] hover:text-[#A78BFA] transition-colors font-medium"
                  >
                    Sign in
                  </button>
                </p>
              </motion.div>
            )}

            {/* ========== FORGOT PASSWORD ========== */}
            {step === 'forgot-password' && (
              <motion.div
                key="forgot"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-[#FAFAFA] mb-2">
                    Forgot password
                  </h1>
                  <p className="text-[#A1A1AA]">
                    Enter your email and we&apos;ll send you an OTP
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        required
                        className="w-full bg-[#18181B] border border-[#27272A] rounded-xl py-3 pl-12 pr-4 text-[#FAFAFA] placeholder-[#A1A1AA] outline-none focus:border-[#6D5DFB] transition-colors"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#6D5DFB] hover:bg-[#5D4FEB] text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-[#6D5DFB]/25"
                  >
                    Send OTP
                  </motion.button>
                </form>

                <p className="mt-6 text-center">
                  <button
                    onClick={() => setStep('login')}
                    className="text-sm text-[#6D5DFB] hover:text-[#A78BFA] transition-colors"
                  >
                    ← Back to login
                  </button>
                </p>
              </motion.div>
            )}

            {/* ========== VERIFY OTP ========== */}
            {step === 'verify-otp' && (
              <motion.div
                key="verify"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-[#FAFAFA] mb-2">
                    Verify OTP
                  </h1>
                  <p className="text-[#A1A1AA]">
                    We sent a 6-digit code to {email || 'your email'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* OTP Input */}
                  <div className="flex gap-3 justify-center">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-14 h-16 bg-[#18181B] border border-[#27272A] rounded-xl text-center text-2xl font-bold text-[#FAFAFA] outline-none focus:border-[#6D5DFB] focus:ring-2 focus:ring-[#6D5DFB]/20 transition-all"
                      />
                    ))}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#6D5DFB] hover:bg-[#5D4FEB] text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-[#6D5DFB]/25 flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Verify & Continue
                  </motion.button>
                </form>

                <p className="mt-6 text-center text-sm text-[#A1A1AA]">
                  Didn&apos;t receive code?{' '}
                  <button className="text-[#6D5DFB] hover:text-[#A78BFA] transition-colors font-medium">
                    Resend OTP
                  </button>
                </p>

                <p className="mt-3 text-center">
                  <button
                    onClick={() => setStep('login')}
                    className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  >
                    ← Back to login
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#6D5DFB]/5 via-[#09090B] to-[#A78BFA]/5 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6D5DFB]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="relative z-10 text-center p-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl mb-6"
          >
            🎬
          </motion.div>
          <h2 className="text-2xl font-bold text-[#FAFAFA] mb-3">
            CreovaLab
          </h2>
          <p className="text-[#A1A1AA] max-w-sm">
            Create faceless content faster with AI-powered workspace
          </p>
        </div>
      </div>
    </div>
  )
}