"use server";

import { adminDb } from "@/lib/firebase-admin";

interface PerguntaResposta {
  id: number;
  pergunta: string;
  resposta: string;
}

export async function getFaq() : Promise<{ success: boolean, data?: PerguntaResposta[] | null, message?: string}> {
  try {
    const data = await adminDb.ref("/perguntas").once('value');
    return { success: true, data: data.toJSON() as PerguntaResposta[] };
  } catch (error) {
    return { success: false, message: "Erro ao buscar dados." };
  }
}
