import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const cars = await prisma.car.findMany();
  return NextResponse.json(cars);
}
