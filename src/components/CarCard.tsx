import React from 'react';

export interface CarCardProps {
  name: string;
  image: string;
  pricePerDay: number;
  description?: string;
}

export default function CarCard({ name, image, pricePerDay, description }: CarCardProps) {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col items-center">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <span className="font-semibold text-lg">${pricePerDay}/day</span>
      <button className="btn btn-primary mt-3">Book Now</button>
    </div>
  );
}
