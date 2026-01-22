import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import HowItWorks from '@/components/HowItWorks';
import ThemeStore from '@/components/ThemeStore';
import DownloadCTA from '@/components/DownloadCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <ThemeStore />
      <DownloadCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
