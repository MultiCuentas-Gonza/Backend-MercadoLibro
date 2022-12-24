import { Ciudad } from "../../Entities/Ciudad";

export async function getAllCiudades() {
    const ciudades = await Ciudad.find()

    return ciudades
}