import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, AppHeader, CTA } from "@/components";
const inter = Inter({ subsets: ["latin"] });


export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Ascodeelevatesolution - Modern Technical Skills Training & Software Solutions",
    description: "Ascodeelevatesolution offers comprehensive technical skills training for all ages and custom software solutions for businesses. From basic computer skills to advanced software development, we equip learners and enterprises for the digital world.",
    keywords: [
      "technical skills training", "software development", "web development",
      "mobile app development", "kids coding", "adult education",
      "business software solutions", "online training", "computer skills",
      "MS Word", "PowerPoint", "CorelDraw", "website development"
    ],
    authors: [{ name: "Ascodeelevatesolution" }],
    creator: "Ascodeelevatesolution",
    publisher: "Ascodeelevatesolution",
    openGraph: {
      title: "Ascodeelevatesolution - Empowering All Ages with Technical Skills",
      description: "Comprehensive technical training and custom software solutions. From kids to professionals, we offer courses in basic computer skills, software development, and tailored business applications.",
      url: "https://www.ascodeelevate.com",
      siteName: "Ascodeelevatesolution",
      images: [
        {
          url: "https://ascodeelevate.com/logo.png",
          width: 1200,
          height: 630,
          alt: "Ascodeelevatesolution - Technical Skills & Software Solutions",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ascodeelevatesolution - Technical Skills for All Ages & Custom Software",
      description: "Learn essential tech skills or get custom software solutions. Courses for kids and adults, from basic computer use to advanced development. Tailored business software available.",
      images: ["https://ascodeelevate.com/logo.png"],
      creator: "@Ascodeelevate",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#6f437f",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        {children}
        <CTA />
        <Footer />
        </body>
    </html>
  );
}
