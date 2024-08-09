import { api } from "@/lib/axios";

export interface GetDailyReceiptInPeriod{
    date: string;
    receipt: number;
}

export async function getDayliReceiptInPeriod(){
    const reponse = await api.get("/metrics/daily-receipt-in-period")


  return reponse.data;
}