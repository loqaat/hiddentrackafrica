import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hidden Track Africa',
  description: 'Booking',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${plusJakartaSans.variable}`}>{children}</body>
    </html>
  );
}
