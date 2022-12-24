import { Idioma } from "../../Entities/Idioma";
import { getElementByName } from "../Utilities/getElementByName";

export async function eliminarIdioma(nombre: string) 
{
    const idioma = await getElementByName(nombre, Idioma)
    
    if(!idioma[0])
        throw `ERROR, EL IDIOMA ${nombre} NO EXISTE!`

    await idioma[0].remove()
}