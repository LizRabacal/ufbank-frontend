// src/components/FaqSection.tsx
import { FaqItem } from './FaqItem'; // Componente Client para Interatividade (expandir/minimizar)

interface PerguntaResposta {
  id: number;
  pergunta: string;
  resposta: string;
}

// Função de busca de dados (SSG/ISR)
async function getFaqData(): Promise<{ perguntas: PerguntaResposta[] }> {
  // Use a URL completa para a chamada no servidor
  const apiUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/faq'
    : 'https://seusite.com/api/faq';
    
  // Por padrão, o fetch() aqui é CASSADO (SSG). 
  const response = await fetch(apiUrl);
  
  if (!response.ok) {
    console.error(`Falha ao buscar dados do FAQ. Status: ${response.status}`);
    // Não lançamos erro se for para o build não quebrar, apenas retornamos vazio
    return { perguntas: [] }; 
  }
  
  return response.json();
}

// O componente FaqSection é um Server Component que busca os dados
export default async function FaqSection() {
  const data = await getFaqData();
  const perguntas = data.perguntas;

  if (perguntas.length === 0) {
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