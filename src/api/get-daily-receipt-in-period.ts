import { api } from "../lib/axios"


export type GetOrderedReceiptPerDay = {
    date: string;
    receipt: number;
}[]


export async function getOrderedReceiptPerDay(){
    const response = await api.get<GetOrderedReceiptPerDay>("/metrics/daily-receipt-in-period")


    return response.data

}