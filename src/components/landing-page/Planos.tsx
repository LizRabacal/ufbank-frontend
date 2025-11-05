import { CardContainer } from "@/components/ui/3d-card";
import { getPlanos } from "@/data/plano";

export const dynamic = 'force-dynamic';

export default async function PlanosETarifas() {

  const response = await getPlanos();

  if (!response.success) {
    return <div className="text-center p-20 text-red-600">Erro ao carregar os planos.</div>;
  }

  const planos = Object.values(response.data ?? []) as any;

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
        {planos.map((plano: any) => (
          <CardContainer key={plano.nome} className="inter-var">
            <div
              className={`p-6 rounded-xl shadow-2xl transition duration-300 ${plano.destaque
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
                {Object.values(plano.beneficios).map((b: any, idx: any) => (
                  <li key={idx} className={`flex items-start ${plano.destaque ? 'text-white' : 'text-gray-600'}`}>
                    <span className={`text-lg mr-2 ${plano.destaque ? 'text-[#74B72D]' : 'text-[#74B72D]'}`}>
                      ✔
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <button className={`mt-8 w-full py-3 font-semibold rounded-lg ${plano.destaque
                  ? 'bg-[#74B72D] text-white hover:bg-green-700'
                  : 'bg-gray-200 text-[#1D4A8C] hover:bg-gray-300'
                }`}>
                Contratar Agora
              </button>
            </div>


          </CardContainer>
        ))}
      </div>
    </section>
  );
}
