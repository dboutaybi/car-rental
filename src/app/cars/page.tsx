import React from 'react';
import CarCard from '../../components/CarCard';

const cars = [
  {
    name: 'Toyota Corolla',
    image: 'https://source.unsplash.com/featured/?toyota,car',
    pricePerDay: 45,
    description: 'Reliable and fuel-efficient sedan.'
  },
  {
    name: 'Ford Mustang',
    image: 'https://source.unsplash.com/featured/?mustang,car',
    pricePerDay: 120,
    description: 'Sporty convertible for a fun ride.'
  },
  {
    name: 'Tesla Model 3',
    image: 'https://source.unsplash.com/featured/?tesla,car',
    pricePerDay: 150,
    description: 'Electric car with autopilot.'
  }
];

export default function CarsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.name} {...car} />
        ))}
      </div>
    </main>
  );
}
