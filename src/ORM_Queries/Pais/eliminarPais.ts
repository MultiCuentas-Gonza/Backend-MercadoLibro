import { Pais } from "../../Entities/Pais";

import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function eliminarPais(nombre: string) 
{
    const existePais = await existsName(nombre, Pais)

    if(!existePais)
        throw `ERROR, NO EXISTE EL PAIS ${nombre}`

    const pais = await getElementByName(nombre, Pais)
    
    await pais[0].remove()
}