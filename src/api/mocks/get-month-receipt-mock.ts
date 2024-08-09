import { http, HttpResponse } from "msw";

import { GetMonthReceipt } from "../get-month-receipt";

 

 
export const getMonthReceiptMock = http.get<never, never, GetMonthReceipt>("/metrics/month-receipt", () => {
    return  HttpResponse.json({
        receipt: 200,
        diffFromLastMonth: 7
    })
 
})