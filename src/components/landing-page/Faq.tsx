"use cache";

import { cacheLife } from 'next/dist/server/use-cache/cache-life';
import { FaqItem } from './FaqItem';
import { getFaq } from '@/data/faq';

interface PerguntaResposta {
  id: number;
  pergunta: string;
  resposta: string;
}

async function getFaqData() : Promise<PerguntaResposta[]>{
  const response = await getFaq()

  return response?.data ? Object.values(response?.data) : [];
}

export default async function FaqSection() {
  cacheLife({ expire: 3600 })
  const perguntas = await getFaqData();


  if (!perguntas?.length) {
    return (
      <section className="py-16 text-center text-gray-500 bg-gray-50">
        Não foi possível carregar as Perguntas Frequentes.
      </section>
    );
  }

  return (
    <section id="faq" className="py-16 md:py-24 min-h-screen bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#1D4A8C] dark:text-white">
        Perguntas Frequentes (FAQ)
      </h2>

      <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-4">
        {perguntas.map((item) => (
          <FaqItem key={item.id} pergunta={item.pergunta} resposta={item.resposta} />
        ))}
      </div>
    </section>
  );
}
