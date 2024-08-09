import { api } from "../lib/axios"

export interface UpdateProfileDataBody{
    name: string;
    description?: string
}

export async function upadteProfile({name, description}: UpdateProfileDataBody){   

    await api.put<UpdateProfileDataBody>("/profile", {
        name,
        description
    })
}