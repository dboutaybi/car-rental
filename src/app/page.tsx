import React from 'react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-4">Car Rental Service</h1>
      <p className="text-lg mb-8">Find and book your perfect rental car!</p>
      {/* Placeholder for car search and booking UI */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-semibold mb-4">Search for Cars</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Location" className="input input-bordered" />
          <input type="date" placeholder="Pick-up Date" className="input input-bordered" />
          <input type="date" placeholder="Drop-off Date" className="input input-bordered" />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    </main>
  );
}
