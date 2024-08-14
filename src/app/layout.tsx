import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, AppHeader } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AS Code Elevate Solution",
  description: "AS Code Elevate Solution   is a software development company that provides software development services to clients.",
  keywords: ["software development", "web development", "mobile app development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>
      <body className={inter.className}>
        <AppHeader />
        {children}
        <Footer />
        </body>
    </html>
  );
}
