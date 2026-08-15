import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const googleSans = localFont({
  src: [
    { path: '../public/font/GoogleSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/font/GoogleSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/font/GoogleSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/font/GoogleSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/font/GoogleSans-Italic.ttf', weight: '400', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-google-sans',
});

export const metadata: Metadata = {
  title: "Yacqub Ali | Creative Portfolio",
  description: "Minimalist portfolio of Yacqub Ali, creative designer and multimedia specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${googleSans.className} antialiased`}>{children}</body>
    </html>
  );
}
