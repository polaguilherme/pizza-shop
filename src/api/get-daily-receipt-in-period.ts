import { api } from "../lib/axios"


export type GetOrderedReceiptPerDay = {
    date: string;
    receipt: number;
}[]

export interface GetDailyReceiptInPeriodQuery{
    from?:Date
    to?: Date
}

export async function getOrderedReceiptPerDay({ from, to }: GetDailyReceiptInPeriodQuery){
    const response = await api.get<GetOrderedReceiptPerDay>("/metrics/daily-receipt-in-period", {
        params: {
            from,
            to
        }
    })


    return response.data

}