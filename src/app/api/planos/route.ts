
import { NextResponse } from 'next/server';
import planosData from '@/data/planos.json'; 

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 1500)); 

  return NextResponse.json(planosData, { status: 200 });
}