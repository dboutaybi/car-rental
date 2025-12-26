import React from 'react';

export default function BookingPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Book a Car</h1>
      <form className="max-w-lg mx-auto bg-white rounded-lg shadow p-8 flex flex-col gap-4">
        <input type="text" placeholder="Full Name" className="input input-bordered" required />
        <input type="email" placeholder="Email" className="input input-bordered" required />
        <input type="text" placeholder="Car Model" className="input input-bordered" required />
        <input type="date" placeholder="Pick-up Date" className="input input-bordered" required />
        <input type="date" placeholder="Drop-off Date" className="input input-bordered" required />
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </main>
  );
}
