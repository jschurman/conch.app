'use client';

import { motion } from 'framer-motion';
import { Shell, Bell, ThumbsUp, Users, Palette, Camera, Calendar, MapPin, Lock, Settings } from 'lucide-react';

const features = [
  {
    icon: Shell,
    title: 'Blow the Conch',
    description: 'Send instant meetup invitations to friends with one tap. Choose location, pick friends, and send—all in 30 seconds.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Bell,
    title: 'Real-Time Notifications',
    description: 'Get instant push notifications when friends want to hang out. Custom sounds and rich details right on your lock screen.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: ThumbsUp,
    title: 'RSVP System',
    description: 'Simple Coming, Maybe, or Can\'t Make It responses. See who\'s in before you commit. Build momentum in real-time.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Friends & Groups',
    description: 'Build your crew and organize friends into custom groups. Sync contacts, send friend requests, and coordinate effortlessly.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Palette,
    title: 'Theme Store',
    description: '12 premium themes featuring unique shells, sounds, and backgrounds. From D&D to Disney, express yourself your way.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Camera,
    title: 'Event Photos',
    description: 'Capture memories with built-in selfie camera. Share photos publicly or keep them private. Every hangout becomes a memory.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Full control from creation to completion. Edit details, cancel events, view history, and track your social stats.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: MapPin,
    title: 'Smart Locations',
    description: 'Powered by Apple Maps. Search any venue, use current location, or enter custom addresses. Your friends know exactly where to go.',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Lock,
    title: 'Privacy & Safety',
    description: 'Block users, control visibility, own your data. Only friends see your events. You hang out on your terms.',
    color: 'from-gray-600 to-gray-800',
  },
  {
    icon: Settings,
    title: 'Customization',
    description: 'Adjust card opacity, notification preferences, themes, and more. Make Conched work exactly how you want it to.',
    color: 'from-cyan-500 to-blue-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary-500 to-ocean-500 bg-clip-text text-transparent pb-2">
              Hang Out More
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conched makes spontaneous coordination effortless. No group chat chaos, no endless planning—just simple, beautiful tools to bring your friends together.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -8 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            All features are <span className="font-bold text-primary-600">free forever</span>. Premium themes are optional.
          </p>
          <a 
            href="#download"
            className="inline-block bg-gradient-to-r from-primary-500 to-ocean-500 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
