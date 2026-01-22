'use client';

import Image from 'next/image';
import { Instagram, Twitter, Mail } from 'lucide-react';

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Themes', href: '#themes' },
    { name: 'Download', href: '#download' },
    { name: 'FAQ', href: '#faq' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: 'mailto:hello@conched.app' },
    { name: 'Support', href: 'mailto:support@conched.app' },
    { name: 'Press', href: 'mailto:press@conched.app' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Community Guidelines', href: '/guidelines' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/conchapp', icon: Instagram },
    { name: 'Twitter', href: 'https://twitter.com/conchapp', icon: Twitter },
    { name: 'Email', href: 'mailto:hello@conched.app', icon: Mail },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/app_media_assets/conch_logo.png" 
                alt="Conched Logo" 
                width={50} 
                height={50}
              />
              <h3 className="text-2xl font-bold">Conched</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The spontaneous social coordination app for college students. 
              Stop planning, start hanging out.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Conched. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Made with 🐚 for college students everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
