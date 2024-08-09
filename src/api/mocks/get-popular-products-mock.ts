import { http, HttpResponse } from "msw";

import { GetPopularProducts } from "../get-popular-product";

 

 

 
export const getPopularProductsMock = http.get<never, never, GetPopularProducts>("/metrics/popular-products", () => {
    return  HttpResponse.json([
        {product: "pizza calabresa", amount: 100},
        {product: "pizza chocolate", amount: 100},
        {product: "pizza pepperoni", amount: 100},
        {product: "pizza portuguesa", amount: 100},
        {product: "pizza bacon", amount: 100},
      
    ])
 
})