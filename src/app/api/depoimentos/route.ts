import { NextRequest, NextResponse } from 'next/server';
import depoimentos from '@/data/depoimentos.json';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(depoimentos, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar dados do FAQ:', error);
    return NextResponse.json({ message: 'Erro interno do servidor ao carregar os depoimentos.' }, { status: 500 });
  }
}