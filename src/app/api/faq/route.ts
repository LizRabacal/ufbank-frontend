import { NextRequest, NextResponse } from 'next/server';
import faqData from '@/data/faq.json';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(faqData, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar dados do FAQ:', error);
    return NextResponse.json({ message: 'Erro interno do servidor ao carregar o FAQ.' }, { status: 500 });
  }
}