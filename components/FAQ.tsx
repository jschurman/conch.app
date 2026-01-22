'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Conched?',
        a: 'Conched is a spontaneous social coordination app that helps college students and young adults meet up in real-time. Think of it as a "bat signal" for your friends—blow the conch when you want to hang out, and your friends get instant notifications.',
      },
      {
        q: 'How is Conched different from group chats or calendar apps?',
        a: 'Group chats lead to endless debates and missed messages. Calendar apps are for formal planning. Conched is built specifically for spontaneous coordination—create an event in 30 seconds, see real-time RSVPs, and hang out. No debate, no hassle.',
      },
      {
        q: 'Is Conched free?',
        a: 'Yes! All core features are free forever. Premium themes cost $2.99-$5.99 each (one-time purchase), but they\'re completely optional.',
      },
      {
        q: 'What platforms does Conched support?',
        a: 'Conched is currently available on iOS 17.0 and later. Android version coming soon!',
      },
    ],
  },
  {
    category: 'Features',
    questions: [
      {
        q: 'How do notifications work?',
        a: 'When someone blows the conch for you, you get an instant push notification with all event details. You can RSVP directly from the notification without opening the app. The notification sound matches the sender\'s chosen theme.',
      },
      {
        q: 'Can I schedule events in advance?',
        a: 'Yes! You can create events for "right now" or schedule them for later (tomorrow, next week, etc.). The system sends notifications at the appropriate time.',
      },
      {
        q: 'What\'s blow intensity?',
        a: 'It\'s a slider (0-100%) that controls how urgent your invite feels. Higher intensity = louder notification sound. Use it to signal priority.',
      },
      {
        q: 'How many people can I invite to one event?',
        a: 'There\'s no hard limit, but Conched works best for small to medium groups (2-30 people). For huge events, traditional tools might be better.',
      },
    ],
  },
  {
    category: 'Privacy & Safety',
    questions: [
      {
        q: 'Who can see my events?',
        a: 'Only people you explicitly invite. Your events are never public. Only your friends can blow the conch for you.',
      },
      {
        q: 'Can I block someone?',
        a: 'Yes. Go to their profile and tap Block. They won\'t be able to send you invites or see your activity.',
      },
      {
        q: 'What data does Conched collect?',
        a: 'We collect event data (location, time, attendees), profile info (name, email), and usage analytics. We never sell your personal data. See our Privacy Policy for full details.',
      },
    ],
  },
  {
    category: 'Themes',
    questions: [
      {
        q: 'What\'s included in a theme?',
        a: 'Each theme includes a custom conch shell design, unique notification sound, themed background image, and matching color palette. It\'s a complete visual and audio makeover.',
      },
      {
        q: 'Are themes one-time purchases or subscriptions?',
        a: 'One-time purchases. Buy once, keep forever. No recurring charges.',
      },
      {
        q: 'Can I switch themes after I buy them?',
        a: 'Yes! Go to Settings → My Themes and switch anytime. You can use any theme you own whenever you want.',
      },
    ],
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center gap-4 text-left hover:text-primary-600 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <ChevronDown 
          className={`w-6 h-6 flex-shrink-0 text-primary-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 pb-6 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? 
            <a href="mailto:support@conched.app" className="text-primary-600 hover:underline"> Email us</a>.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-ocean-500 rounded-full"></span>
                {category.category}
              </h3>
              
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                {category.questions.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.q}
                    answer={faq.a}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-primary-50 to-ocean-50 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our support team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@conched.app"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Email Support
              </a>
              <a 
                href="#download"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-primary-200 shadow-lg hover:shadow-xl transition-all"
              >
                Try It Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
