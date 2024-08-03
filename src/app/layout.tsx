import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AS Code Elevate Solution",
  description: "AS Code Elevate Solution   is a software development company that provides software development services to clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/img/favicon.png" type="image/png" sizes="16x16" /> */}
      </head>
      <body className={inter.className}>{children}</body>

      {/* // require flowbite js file here  */}
      {/* <script src="https://cdn.jsdelivr.net/npm/flowbite/dist/flowbite.js"></script> */}
      <script src="../../node_modules/flowbite/dist/flowbite.min.js"></script>
    </html>
  );
}
