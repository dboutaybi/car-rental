import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Car Rental Service',
  description: 'Find and book your perfect rental car!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <nav className="bg-white shadow mb-8 p-4 flex gap-6">
          <Link href="/" className="font-bold text-xl">Car Rental</Link>
          <Link href="/cars">Cars</Link>
          <Link href="/booking">Booking</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
