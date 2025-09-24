'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    // Log the 404 error for monitoring
    console.warn('404 Page Not Found')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="mb-8"
        >
          <AlertTriangle className="w-24 h-24 text-amber-500 mx-auto" />
        </motion.div>

        <motion.h1 
          className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>

        <motion.h2 
          className="text-2xl font-semibold text-gray-200 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p 
          className="text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </motion.div>

        <motion.div 
          className="mt-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>Error Code: NOT_FOUND</p>
        </motion.div>
      </div>
    </div>
  )
}