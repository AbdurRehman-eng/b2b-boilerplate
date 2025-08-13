import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Boilerplate - B2B & B2C Platform",
  description: "A scalable ecommerce boilerplate for B2B and B2C applications built with Next.js and Tailwind CSS",
  keywords: "ecommerce, b2b, b2c, nextjs, tailwind, boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
