import { http, HttpResponse } from "msw";

import { GetMonthOrderAmount } from "../get-month-order-amount";

 
export const getMonthOrderAmountMock = http.get<never, never, GetMonthOrderAmount>("/metrics/month-orders-amount", () => {
    return  HttpResponse.json({
        amount: 200,
        diffFromLastMonth: 17
    })
 
})