import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conched - Blow the Conch. Gather Your Crew.",
  description: "The spontaneous social coordination app that helps college students meet up in real-time. Stop planning, start hanging out.",
  keywords: "conched, hangout app, college social app, spontaneous plans, meetup app, social coordination, RSVP app",
  authors: [{ name: "Conched Team" }],
  creator: "Conched",
  publisher: "Conched",
  metadataBase: new URL('https://conched.app'),
  openGraph: {
    title: "Conched - Blow the Conch. Gather Your Crew.",
    description: "The spontaneous social coordination app for college students. Create hangouts in 30 seconds, see real-time RSVPs.",
    url: 'https://conched.app',
    siteName: 'Conched',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Conched App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Conched - Blow the Conch. Gather Your Crew.",
    description: "The spontaneous social coordination app for college students.",
    images: ['/og-image.png'],
    creator: '@conchapp',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
