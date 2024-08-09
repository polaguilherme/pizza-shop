import { http, HttpResponse } from "msw";

import { GetProfileReponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileReponse>("/me", () => {
    return HttpResponse.json({
        name: "John Doe",   
        phone: "+1234567890",
        email: "john.doe@example.com",
        updatedAt: new Date(),
        createdAt: new Date(),
        role: "customer",
        id: "123"

    })
 });
 
