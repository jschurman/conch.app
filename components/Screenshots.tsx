'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const screenshots = [
  {
    src: '/screenshots/IMG_5490.jpeg',
    title: 'Blow the Conch',
    description: 'Create events in 30 seconds',
  },
  {
    src: '/screenshots/IMG_5491.jpeg',
    title: 'Way to Blow!',
    description: 'Blow intensity meter',
  },
  {
    src: '/screenshots/IMG_5493.jpeg',
    title: 'Event Details',
    description: 'Track RSVPs in real-time',
  },
  {
    src: '/screenshots/IMG_5497.jpeg',
    title: 'Settings',
    description: 'Customize your experience',
  },
  {
    src: '/screenshots/IMG_5500.jpeg',
    title: 'My Themes',
    description: 'Manage your theme collection',
  },
  {
    src: '/screenshots/IMG_5489.jpeg',
    title: 'Profile',
    description: 'Your social stats',
  },
];

export default function Screenshots() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beautiful glassmorphism design meets powerful coordination features. 
            Every screen is crafted for speed and clarity.
          </p>
        </motion.div>

        {/* Screenshots carousel */}
        <div className="relative">
          {/* Gradient edges for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="group relative">
                  {/* Phone frame */}
                  <div className="relative w-[280px] sm:w-[320px]">
                    {/* Phone shadow */}
                    <div className="absolute inset-0 bg-gray-900 rounded-[3rem] blur-xl opacity-20 transform group-hover:scale-105 transition-transform duration-300"></div>
                    
                    {/* Phone body */}
                    <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300">
                      {/* Screen */}
                      <div className="relative rounded-[2.5rem] overflow-hidden bg-white">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20"></div>
                        
                        {/* Screenshot */}
                        <Image
                          src={screenshot.src}
                          alt={screenshot.title}
                          width={320}
                          height={693}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{screenshot.title}</h3>
                    <p className="text-gray-600">{screenshot.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">← Scroll to see more →</p>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience it yourself?
          </p>
          <a 
            href="#download"
            className="inline-block bg-gradient-to-r from-primary-500 to-ocean-500 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Download Now
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
