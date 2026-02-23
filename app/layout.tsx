import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google"; 
import "./globals.css";

// 1. Qeexitaanka farta Outfit
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yacqub Ali",
  description: "Senior Multimedia Designer",
};


// layout.tsx dhexdiisa ku dar
import { Reenie_Beanie } from 'next/font/google'

const handwriting = Reenie_Beanie({ 
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 2. Halkan waxaa lagu daray outfit.className si uu bogga oo dhan u qaato */}
      <body className={`${outfit.className} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}