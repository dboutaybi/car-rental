import React, { useState } from 'react';

export default function BookingPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    carId: '',
    startDate: '',
    endDate: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setMessage('Booking successful!');
      setForm({ fullName: '', email: '', carId: '', startDate: '', endDate: '' });
    } else {
      setMessage('Booking failed.');
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Book a Car</h1>
      <form className="max-w-lg mx-auto bg-white rounded-lg shadow p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="fullName" value={form.fullName} onChange={handleChange} type="text" placeholder="Full Name" className="input input-bordered" required />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="input input-bordered" required />
        <input name="carId" value={form.carId} onChange={handleChange} type="text" placeholder="Car ID" className="input input-bordered" required />
        <input name="startDate" value={form.startDate} onChange={handleChange} type="date" placeholder="Pick-up Date" className="input input-bordered" required />
        <input name="endDate" value={form.endDate} onChange={handleChange} type="date" placeholder="Drop-off Date" className="input input-bordered" required />
        <button type="submit" className="btn btn-primary">Book Now</button>
        {message && <p className="mt-2">{message}</p>}
      </form>
    </main>
  );
}
