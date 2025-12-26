import React from 'react';

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
        Rent Your Dream Car <span className="text-yellow-500">Today</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
        Premium cars. Best prices. Easy booking. Experience the freedom of the road with DriveNow.
      </p>
      <form className="flex flex-col md:flex-row gap-4 w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mb-8">
        <input type="text" placeholder="Pick-up Location" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg" />
        <input type="date" placeholder="Pick-up Date" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg" />
        <input type="date" placeholder="Drop-off Date" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg" />
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-lg shadow transition text-lg">Search</button>
      </form>
      <div className="mt-16 w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Why Choose DriveNow?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full md:w-80 flex flex-col items-center">
            <span className="text-yellow-500 text-4xl mb-3">🚗</span>
            <h3 className="font-semibold text-xl mb-2">Wide Selection</h3>
            <p className="text-gray-600">Choose from economy to luxury cars, all in top condition.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full md:w-80 flex flex-col items-center">
            <span className="text-yellow-500 text-4xl mb-3">💸</span>
            <h3 className="font-semibold text-xl mb-2">Best Prices</h3>
            <p className="text-gray-600">Transparent pricing, no hidden fees, and great deals year-round.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full md:w-80 flex flex-col items-center">
            <span className="text-yellow-500 text-4xl mb-3">🛡️</span>
            <h3 className="font-semibold text-xl mb-2">Safe & Secure</h3>
            <p className="text-gray-600">Comprehensive insurance and 24/7 customer support for peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
