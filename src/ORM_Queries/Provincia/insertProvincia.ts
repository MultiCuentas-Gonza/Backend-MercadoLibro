import { Pais } from "../../Entities/Pais";
import { Provincia } from "../../Entities/Provincia";
import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function insertProvincia(nombre: string, nombrePais: string) 
{
    const existePais = await existsName(nombrePais, Pais)

    if(!existePais)
        throw `ERROR, NO EXISTE EL PAIS ${nombrePais}`

    const pais = await getElementByName(nombrePais, Pais)

    const provincia = new Provincia()

    provincia.nombre = nombre
    provincia.pais = pais
    await provincia.save()
}