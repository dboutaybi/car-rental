import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const data = await request.json();
  const booking = await prisma.booking.create({
    data: {
      carId: data.carId,
      fullName: data.fullName,
      email: data.email,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
    },
  });
  return NextResponse.json(booking);
}
