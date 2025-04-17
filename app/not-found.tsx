'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedBoxes from '@/components/AnimatedBoxes';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black bg-gradient-to-br px-4">
      <AnimatedBoxes />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <h1 className="mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl">
          404
        </h1>
        <p className="mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl">
          Page Not Found
        </p>
        <p className="mb-8 max-w-md text-center text-gray-300">
          Oops! The page you are looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track!
        </p>
        <Link
          className="inline-block rounded-lg bg-gradient-to-r from-purple-500 to-pink-400 px-6 py-3 font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105"
          href="/"
        >
          Go Home
        </Link>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Animated background shapes for theme consistency */}
        <motion.div
          className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-blue-500 opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-60 w-60 rounded-full bg-teal-400 opacity-20 blur-2xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
      </div>
    </main>
  );
}
