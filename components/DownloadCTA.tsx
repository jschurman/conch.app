'use client';

import { motion } from 'framer-motion';
import { Download, Apple, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-primary-600 via-ocean-500 to-primary-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-coral-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '0.75s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Main heading */}
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6"
              >
                <Download className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                Ready to Blow the Conch?
              </h2>
              <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto mb-4">
                Download now and start hanging out more with less planning.
              </p>
              <p className="text-lg text-white/70">
                Join thousands of college students who've stopped planning and started living.
              </p>
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {/* App Store button - Primary */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 bg-black hover:bg-gray-900 text-white px-8 py-5 rounded-2xl text-lg font-semibold shadow-2xl transition-all"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
              </motion.a>

              {/* Coming Soon - Android */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-5 rounded-2xl text-lg font-semibold cursor-not-allowed opacity-75"
              >
                <Smartphone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs">Coming Soon to</div>
                  <div className="text-xl font-bold">Android</div>
                </div>
              </motion.div>
            </div>

            {/* Requirements & features */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>iOS 17.0 or Later</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>No Subscriptions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>iPhone Only</span>
              </div>
            </div>

            {/* Stats / Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { label: 'Active Users', value: '10K+' },
                { label: 'Events Created', value: '50K+' },
                { label: 'Themes Available', value: '12' },
                { label: 'Avg. RSVP Rate', value: '78%' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative conch shells */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-10 opacity-20 hidden lg:block"
      >
        <Image
          src="/app_media_assets/ConchShells/classic.imageset/classic.png"
          alt=""
          width={100}
          height={100}
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute top-10 right-10 opacity-20 hidden lg:block"
      >
        <Image
          src="/app_media_assets/ConchShells/classic.imageset/classic.png"
          alt=""
          width={80}
          height={80}
        />
      </motion.div>
    </section>
  );
}
