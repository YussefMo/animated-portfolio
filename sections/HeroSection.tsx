'use client';

import { motion } from 'framer-motion';
import AnimatedBoxes from '@/components/AnimatedBoxes';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <AnimatedBoxes />
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl">
            Hey! It&apos;s Youssef Mohammed Ali
          </h1>
          <h2 className="mb-8 text-xl text-gray-300 md:text-2xl">
            🚀 Frontend Developer (React.js | Next.js) | Tech Explorer
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <ScrollLink to="work" smooth={true} duration={500}>
              <Button className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                View Projects
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button
                variant="outline"
                className="cursor-pointer border-2 border-purple-500 bg-transparent text-white transition-all duration-300 hover:bg-purple-500 hover:text-white"
              >
                Contact Me
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
