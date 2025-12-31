"use client";
import React, { useEffect, useState } from 'react';
import CarCard from '../../components/CarCard';

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cars')
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Cars</h1>
      {loading ? (
        <p>Loading cars...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((car: any) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      )}
    </main>
  );
}
