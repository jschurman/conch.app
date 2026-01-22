'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-500 via-ocean-500 to-coral-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image 
                src="/app_media_assets/conch_logo.png" 
                alt="Conched Logo" 
                width={60} 
                height={60}
                className="drop-shadow-lg"
              />
              <h1 className="text-5xl md:text-6xl font-bold">Conched</h1>
            </div>

            {/* Main headline */}
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
                Blow the Conch.
                <br />
                <span className="text-coral-200">Gather Your Crew.</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                The spontaneous social coordination app that helps college students meet up in real-time. 
                <span className="font-semibold"> Stop planning, start hanging out.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#download" 
                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all"
              >
                <Download size={24} />
                Download on the App Store
              </a>
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-white/30 transition-all"
              >
                <Play size={24} />
                See How It Works
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>iOS 17.0+</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>No Subscriptions</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Phone mockup frame */}
              <div className="relative z-10 animate-float">
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-gradient-to-br from-ocean-400 to-primary-600 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* Notch */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-20"></div>
                    
                    {/* Real app screenshot */}
                    <div className="relative h-full">
                      <Image 
                        src="/screenshots/IMG_5490.jpeg"
                        alt="Conched App Interface - Blow the Conch"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-8 top-1/4 glass-dark rounded-2xl p-4 shadow-xl max-w-[200px] hidden lg:block"
              >
                <p className="text-white text-sm font-semibold mb-1">🐚 Sarah blew the conch!</p>
                <p className="text-white/80 text-xs">Coffee at Starbucks in 10 min</p>
              </motion.div>

              {/* Floating stats card */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -right-8 bottom-1/4 glass-dark rounded-2xl p-4 shadow-xl hidden lg:block"
              >
                <p className="text-white text-sm font-semibold mb-2">✨ Live RSVPs</p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-coral-400 to-coral-600 border-2 border-white"></div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white text-xs font-bold">+5</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
