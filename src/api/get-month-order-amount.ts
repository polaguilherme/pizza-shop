import { api } from "../lib/axios"

export interface GetMonthOrderAmount{
    amount: number;
    diffFromLastMonth: number
}

export async function getMonthOrderAmount(){
  const reponse = await api.get<GetMonthOrderAmount>("/metrics/month-orders-amount")


  return reponse.data
}