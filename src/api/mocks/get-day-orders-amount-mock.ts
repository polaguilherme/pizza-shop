import { http, HttpResponse } from "msw";

import { GetDayOrdersAmount } from "../get-day-orders-amount";

 
export const getDayOrderAmountMock = http.get<never, never, GetDayOrdersAmount>("/metrics/day-orders-amount", () => {
    return  HttpResponse.json({
        amount: 20,
        diffFromYesterday: -5
    })
 
})