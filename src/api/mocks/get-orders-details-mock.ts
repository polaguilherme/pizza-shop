import { http, HttpResponse } from "msw";

import { GetOrderDetailsProps, GetOrderDetailsReponse } from "../get-order-details";
 

export const getOrderDetailsMock = http.get<GetOrderDetailsProps, never, GetOrderDetailsReponse>("/orders/:orderId", ({ params }) => {
    return HttpResponse.json({
     id: params.orderId,
    customer: {
        email: "john.doe@example.com",
        phone: "+1234567890",
        name: "John Doe",
    },
    createdAt: new Date().toISOString(),
     status: "delivering",
     totalInCents: 12000,
     orderItems: [
        {
            id: "1",
            priceInCents: 5000,
            quantity: 2,
            product: {
                name: "Pepperoni Pizza",
            },
        },
        {
            id: "2",
            priceInCents: 7000,
            quantity: 1,
            product: {
                name: "Margherita Pizza",
            },
        },
     ],
    })
 });
 
