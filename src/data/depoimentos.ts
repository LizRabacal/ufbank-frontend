"use server";

import { adminDb } from "@/lib/firebase-admin";

export async function getDepoimentos() {
  try {
    const data = await adminDb.ref("/depoimentos").once('value');
    console.log(data.toJSON())
    return { success: true, data: data.toJSON() };
  } catch (error) {
    return { success: false, message: "Erro ao buscar dados." };
  }
}
