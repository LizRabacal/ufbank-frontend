"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { CometCard } from "@/components/ui/comet-card";


const content = [
    {
        title: "Cashback Turbinado em Todas as Compras 💸",
        description:
            "Pare de gastar dinheiro à toa. Com o cartão UFBank, você recebe uma porcentagem de volta em absolutamente todas as suas compras, direto na sua conta. Acumule valores de forma automática e use como quiser, sem programas de pontos complicados. Seu dinheiro trabalhando por você, sempre.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#74B72D,#3D8830)] text-white">
                <CometCard>

                    <img
                        src="/cashback.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="Cashback Turbinado em Todas as Compras"
                    />
                </CometCard>
            </div>
        ),
    },
    {
        title: "Investir Ficou Simples e Digital 📈",
        description:
            "Liberte-se da poupança! Na UFBank, você tem acesso aos melhores investimentos de Renda Fixa e Variável a partir de R$ 10. Acompanhe seus rendimentos pelo app de forma clara e intuitiva, com sugestões personalizadas para você alcançar seus objetivos mais rápido.",
        content: (
            // Sugestão Visual: Imagem do App mostrando um gráfico de crescimento
            <div className="flex h-full w-full items-center justify-center text-white">
                <CometCard>
                    <img
                        src="/investimentos.png" // Substitua pelo caminho real
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="App UFBank Investimentos"
                    />
                </CometCard>

            </div>
        ),
    },
    {
        title: "Sua Conta PJ Descomplicada e Sem Custos 💼",
        description:
            "Chega de burocracia para sua empresa. Abra sua conta Pessoa Jurídica em minutos e tenha TEDs e Pix ilimitados e gratuitos. Gerencie o fluxo de caixa, emita boletos e tenha um cartão exclusivo para o seu negócio. Foco total no crescimento, zero preocupação com tarifas.",
        content: (
            // Sugestão Visual: Gradiente com o Azul da Marca
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#1D4A8C,#0077B6)] text-white">
                <CometCard>
                    <img
                        src="/Pjotinha.png" // Substitua pelo caminho real
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="App UFBank Investimentos"
                    />
                </CometCard>

            </div>
        ),
    },
    {
        title: "Segurança de Banco Grande, Tecnologia de Digital 🛡️",
        description:
            "Sua tranquilidade é nossa prioridade. Utilizamos criptografia de ponta e autenticação de dois fatores para proteger seu patrimônio. Receba alertas em tempo real sobre qualquer movimentação e tenha suporte 24h para resolver qualquer imprevisto. Máxima segurança, acesso imediato.",
        content: (
            // Sugestão Visual: Um ícone de segurança ou o App com um cadeado animado
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#0077B6,#74B72D)] text-white">
                <img
                    src="/seguranca.png" // Substitua pelo caminho real
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="App UFBank Investimentos"
                />
            </div>
        ),
    },
];

export function StickyScrollRevealDemo() {
    return (
        <div id="solucoes" className="w-full bg-gray-50 dark:bg-black">

            <StickyScroll contentClassName="min-h-sreen" content={content} />
        </div>
    );
}