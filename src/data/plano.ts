"use server";

import { adminDb } from "@/lib/firebase-admin";


export async function getPlanos(){
  try {
    const data = await adminDb.ref("/planos").once('value');
    const res =  data.toJSON() as any
    return { success: true, data: res.planos };
  } catch (error) {
    return { success: false, message: "Erro ao buscar dados." };
  }
}
