import { http, HttpResponse } from "msw";

import { GetOrderedReceiptPerDay } from "../get-daily-receipt-in-period";

 

 

 
export const getDailyRevenueInPeriodMock = http.get<never, never, GetOrderedReceiptPerDay>("/metrics/daily-receipt-in-period", () => {
    return  HttpResponse.json([
        {
            date: '10/11/2022',
            receipt: 10000
        },
        {
            date: '10/11/2022',
            receipt: 20000
        },
        {
            date: '10/11/2022',
            receipt: 504
        },
        {
            date: '10/11/2022',
            receipt: 304
        },
        {
            date: '10/11/2022',
            receipt: 10000
        }
    ])
 
})