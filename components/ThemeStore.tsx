'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Volume2, ImageIcon, Palette } from 'lucide-react';

const themes = [
  {
    name: 'Classic Conch',
    price: 'FREE',
    image: '/app_media_assets/ConchShells/classic.imageset/classic.png',
    background: '/app_media_assets/Backgrounds/christmas_2025_background.imageset/christmas_2025_background.png',
    description: 'The original beach shell',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    name: "Raising Cane's 2025",
    price: '$4.99',
    image: '/app_media_assets/ConchShells/canes_2025.imageset/canes_2025.png',
    background: '/app_media_assets/Backgrounds/canes_2025_background.imageset/canes_2025_background.png',
    description: 'Official branded theme',
    gradient: 'from-yellow-500 to-yellow-600',
    featured: true,
  },
  {
    name: 'Christmas 2025',
    price: '$2.99',
    image: '/app_media_assets/ConchShells/christmas_2025.imageset/christmas_2025.png',
    background: '/app_media_assets/Backgrounds/christmas_2025_background.imageset/christmas_2025_background.png',
    description: 'Festive holiday vibes',
    gradient: 'from-red-500 to-green-600',
  },
  {
    name: "New Year's 2026",
    price: '$2.99',
    image: '/app_media_assets/ConchShells/new_years_2026.imageset/new_years_2026.png',
    background: '/app_media_assets/Backgrounds/new_years_2026_background.imageset/new_years_2026_background.png',
    description: 'Celebration mode',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'D&D: Blasting',
    price: '$3.99',
    image: '/app_media_assets/ConchShells/dnd_blasting.imageset/dnd_blasting.png',
    background: '/app_media_assets/Backgrounds/dnd_blasting_background.imageset/dnd_blasting_background.png',
    description: 'Fantasy fire and fury',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    name: 'D&D: Silent',
    price: '$3.99',
    image: '/app_media_assets/ConchShells/dnd_silent.imageset/dnd_silent.png',
    background: '/app_media_assets/Backgrounds/dnd_silent_background.imageset/dnd_silent_background.png',
    description: 'Stealthy rogue theme',
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    name: 'D&D: Valhalla',
    price: '$4.99',
    image: '/app_media_assets/ConchShells/dnd_valhalla.imageset/dnd_valhalla.png',
    background: '/app_media_assets/Backgrounds/dnd_valhalla_background.imageset/dnd_valhalla_background.png',
    description: 'Epic Viking warriors',
    gradient: 'from-amber-600 to-orange-700',
    featured: true,
  },
  {
    name: 'Mickey Magic',
    price: '$5.99',
    image: '/app_media_assets/ConchShells/mickey.imageset/mickey.png',
    background: '/app_media_assets/Backgrounds/mickey_background.imageset/mickey_background.png',
    description: 'Disney-inspired magic',
    gradient: 'from-blue-600 to-purple-600',
  },
];

const includesItems = [
  { icon: Palette, text: 'Custom conch shell design' },
  { icon: Volume2, text: 'Unique notification sound' },
  { icon: ImageIcon, text: 'Themed background image' },
  { icon: Sparkles, text: 'Matching color palette' },
];

export default function ThemeStore() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Express Yourself With
            <span className="block bg-gradient-to-r from-coral-400 to-pink-500 bg-clip-text text-transparent">
              Premium Themes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transform your Conched experience with custom shells, sounds, and backgrounds. 
            Each theme is a complete visual and audio makeover.
          </p>

          {/* What's included */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {includesItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <item.icon className="w-5 h-5 text-coral-400" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-gray-400">
            Buy once, keep forever • Switch themes anytime • No subscriptions
          </p>
        </motion.div>

        {/* Themes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative"
            >
              {/* Featured badge */}
              {theme.featured && (
                <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  FEATURED
                </div>
              )}

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
                {/* Background preview */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-50`}></div>
                  <Image
                    src={theme.background}
                    alt={`${theme.name} background`}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  
                  {/* Conch shell overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <Image
                        src={theme.image}
                        alt={theme.name}
                        fill
                        className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{theme.name}</h3>
                    <span className={`text-lg font-black ${theme.price === 'FREE' ? 'text-green-400' : 'text-coral-400'}`}>
                      {theme.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{theme.description}</p>
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional themes notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-8">
            + More themes including Rolling Stones, Tropical Paradise, Mystical Realm, and seasonal releases
          </p>
          
          <a 
            href="#download"
            className="inline-block bg-gradient-to-r from-coral-500 to-pink-500 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Browse All Themes in App
          </a>

          <p className="text-sm text-gray-500 mt-6">
            New themes added regularly • Early access for existing customers
          </p>
        </motion.div>
      </div>
    </section>
  );
}
