import type { Metadata } from "next";
import { Inter, Geist_Mono, Reenie_Beanie } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handwriting = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yacqub Ali",
  description: "Senior Multimedia Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${geistMono.variable} ${handwriting.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}