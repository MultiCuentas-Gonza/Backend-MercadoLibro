import { Tema } from "../../Entities/Tema";

import { getElementByName } from "../Utilities/getElementByName";
 
export async function eliminarTema(nombre: string)
{
    const tema: Tema = (await getElementByName(nombre, Tema));

    if(!tema)
        throw `ERROR, EL TEMA NO EXISTE`

    if (tema)
        tema.remove()
}