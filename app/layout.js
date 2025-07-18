import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Contacted AI - AI-Powered Customer Communication Solutions",
  description: "Revolutionary AI-powered customer communication platform by Scavenger AI LLC. Transform your customer interactions with intelligent automation and seamless integration.",
  keywords: "AI, customer communication, automation, SaaS, business solutions, contacted ai, scavenger ai",
  authors: [{ name: "Scavenger AI LLC" }],
  creator: "Scavenger AI LLC",
  publisher: "Scavenger AI LLC",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
