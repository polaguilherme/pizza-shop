import { api } from "../lib/axios"

export interface GetMonthReceipt{
    receipt: number
    diffFromLastMonth: number
}

export async function getMonthReceipt(){
   const response = await api.get<GetMonthReceipt>("/metrics/month-receipt")

  return response.data
}