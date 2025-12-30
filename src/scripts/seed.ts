import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Check if there are any cars already
  const carCount = await prisma.car.count();
  if (carCount === 0) {
    // Only seed if no cars exist
    await prisma.car.createMany({
      data: [
        {
          name: 'Toyota Corolla',
          image: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e',
          pricePerDay: 45.00,
          description: 'Reliable and fuel-efficient sedan.'
        },
        {
          name: 'BMW 3 Series',
          image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d',
          pricePerDay: 120.00,
          description: 'Luxury sports sedan with premium features.'
        },
        {
          name: 'Tesla Model 3',
          image: 'https://images.unsplash.com/photo-1511391403515-5c1e8b6b73c5',
          pricePerDay: 150.00,
          description: 'Electric car with autopilot and long range.'
        },
        {
          name: 'Ford Mustang',
          image: 'https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b',
          pricePerDay: 110.00,
          description: 'Classic American muscle car.'
        },
        {
          name: 'Volkswagen Golf',
          image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
          pricePerDay: 60.00,
          description: 'Compact hatchback, perfect for city driving.'
        }
      ]
    });
    console.log('Database seeded!');
  } else {
    console.log('Seed skipped: Cars already exist.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
