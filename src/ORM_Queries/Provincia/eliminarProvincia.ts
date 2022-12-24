import { Provincia } from "../../Entities/Provincia";

import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function eliminarProvincia(nombre: string) 
{
    const existeProvincia = await existsName(nombre, Provincia)

    if(!existeProvincia)
        throw `ERROR, NO EXISTE LA PROVINCIA ${nombre}`

    const provincia = await getElementByName(nombre, Provincia)
    
    await provincia[0].remove()
}