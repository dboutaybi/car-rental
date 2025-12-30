import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
let prisma: PrismaClient;
if (!(global as any).prisma) {
  (global as any).prisma = new PrismaClient();
}
prisma = (global as any).prisma;

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
