import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default async function PlanosETarifas() {
    
    const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api/planos'
        : 'https://seusite.com/api/planos';

    // O Next.js trata isso como uma chamada Server-Side Fetch
    // Você pode usar 'next: { revalidate: 86400 }' para forçar o ISR (24h)
    const response = await fetch(apiUrl, { next: { revalidate: 86400 } });
    
    if (!response.ok) {
        // Tratar falha na busca
        return <div className="text-center p-20 text-red-600">Erro ao carregar os planos.</div>;
    }

    const data = await response.json();
    const planos = data.planos;
    const lastUpdated = data.last_updated;

    if (!planos || planos.length === 0) {
        return <div className="text-center p-20">Não há planos disponíveis no momento.</div>;
    }

    return (
        <section id="planos" className="container mx-auto p-8 min-h-screen flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-center mb-10 text-[#1D4A8C]">
                Escolha o Plano Ideal para Você
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* O resto da sua lógica de mapeamento de planos permanece igual */}
                {planos.map((plano) => (
                   <CardContainer key={plano.nome} className="inter-var">
                    <div 
                        className={`p-6 rounded-xl shadow-2xl transition duration-300 ${
                          plano.destaque 
                            ? 'bg-[#1D4A8C] text-white transform scale-105 border-4 border-[#74B72D]' 
                            : 'bg-white text-gray-800'
                        }`}
                    >
                        {/* ... Código do cartão do plano ... */}
                        <h2 className="text-2xl font-extrabold mb-2">{plano.nome}</h2>
                        <p className={`mb-4 italic ${plano.destaque ? 'text-gray-200' : 'text-gray-500'}`}>
                          {plano.idealPara}
                        </p>
                        
                        <div className={`text-3xl font-bold mb-6 ${plano.destaque ? 'text-[#74B72D]' : 'text-[#1D4A8C]'}`}>
                          {plano.precoMensal}
                        </div>
                        
                        <ul className="space-y-3">
                          {plano.beneficios.map((b, idx) => (
                            <li key={idx} className={`flex items-start ${plano.destaque ? 'text-white' : 'text-gray-600'}`}>
                              <span className={`text-lg mr-2 ${plano.destaque ? 'text-[#74B72D]' : 'text-[#74B72D]'}`}>
                                ✔
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>
                        
                        <button className={`mt-8 w-full py-3 font-semibold rounded-lg ${
                          plano.destaque 
                            ? 'bg-[#74B72D] text-white hover:bg-green-700' 
                            : 'bg-gray-200 text-[#1D4A8C] hover:bg-gray-300'
                        }`}>
                          Contratar Agora
                        </button>
                    </div>


                   </CardContainer>
                ))}
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-10">
              Última atualização dos planos: {new Date(lastUpdated).toLocaleDateString('pt-BR')}
            </p>
        </section>
    );
}