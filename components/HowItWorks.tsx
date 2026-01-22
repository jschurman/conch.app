'use client';

import { motion } from 'framer-motion';
import { Shell, Send, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Shell,
    title: 'Create Your Event',
    description: 'Tap the conch shell, choose location, select friends, add details. Takes just 30 seconds.',
    time: '⏱️ 30 seconds',
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Search for any venue or use current location',
      'Select friends individually or by group',
      'Add event name and optional selfie',
      'Set timing: now or schedule for later',
    ],
  },
  {
    number: '02',
    icon: Send,
    title: 'Send the Invitation',
    description: 'Tap "Blow the Conch" and friends get notified immediately with all the details.',
    time: '⏱️ Instant',
    color: 'from-purple-500 to-pink-500',
    details: [
      'Friends receive push notifications',
      'Event appears in their feed',
      'Rich notification with all details',
      'Custom sound based on your theme',
    ],
  },
  {
    number: '03',
    icon: Users,
    title: 'Watch RSVPs Roll In',
    description: 'See responses in real-time. Build momentum as friends commit. Then head to the venue!',
    time: '⏱️ Real-time',
    color: 'from-green-500 to-emerald-500',
    details: [
      'Coming / Maybe / Can\'t Make It',
      'See who\'s in before you commit',
      'Get notified of each response',
      'Group momentum encourages others',
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-ocean-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to go from "I want to hang out" to actually hanging out. 
            <span className="font-semibold text-primary-600"> No group chat debates. No planning paralysis.</span>
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Large step number background */}
                    <div className="text-9xl font-black text-gray-100 select-none">
                      {step.number}
                    </div>
                    
                    {/* Icon circle */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}>
                      <step.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900">
                      {step.title}
                    </h3>
                    <span className="px-4 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full whitespace-nowrap">
                      {step.time}
                    </span>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mt-0.5`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-1 h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Perfect For:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              '🍕 "Who wants to get food right now?"',
              '📚 "Study session at library in 30 min"',
              '🎉 "Party at my place tonight, 9pm"',
              '🏖️ "Beach day this Saturday"',
              '☕ "Coffee meetup between classes"',
              '🏀 "Pickup basketball at the rec"',
              '📺 "Watch the game at Buffalo Wild Wings"',
              '🥞 "Brunch this Sunday"',
            ].map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-4 hover:border-primary-500 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-sm font-medium text-gray-700">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-6">
            Ready to spend less time planning and more time together?
          </p>
          <a 
            href="#download"
            className="inline-block bg-gradient-to-r from-primary-500 to-ocean-500 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Download Conched Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
