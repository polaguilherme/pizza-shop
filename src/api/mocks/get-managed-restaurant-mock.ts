import { http, HttpResponse } from "msw";

import { GetManagedRestaurantReponse } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<never, never, GetManagedRestaurantReponse>("/managed-restaurant", () => {
    return HttpResponse.json({
        createdAt: new Date(),
        id: "9023819481",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",	
        managerId: "1234567890",
        name: "Pizza Emporium",
        updatedAt: new Date()
    })
})