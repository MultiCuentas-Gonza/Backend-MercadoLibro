
import { Ciudad } from "../../Entities/Ciudad";

import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function eliminarCiudad(nombre: string) 
{
    const existeCiudad = await existsName(nombre, Ciudad)

    if(!existeCiudad)
        throw `ERROR, NO EXISTE LA CIUDAD ${nombre}`

    const ciudad = await getElementByName(nombre, Ciudad)
    
    await ciudad[0].remove()
}