import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DriveNow - Premium Car Rental',
  description: 'Book your next ride with confidence. Premium cars, best prices, easy booking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans">
        <header className="bg-white shadow sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-yellow-600 hover:text-yellow-700 transition no-underline">DriveNow</Link>
            <div className="flex gap-6 text-base font-medium">
              <Link href="/cars" className="text-gray-700 hover:text-yellow-600 transition no-underline">Cars</Link>
              <Link href="/booking" className="text-gray-700 hover:text-yellow-600 transition no-underline">Booking</Link>
            </div>
            <Link href="/booking" className="ml-6 px-5 py-2 rounded bg-yellow-500 text-white font-semibold shadow hover:bg-yellow-600 transition no-underline">Book Now</Link>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
        <footer className="bg-white border-t mt-12 py-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DriveNow. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
