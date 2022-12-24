
import { Ciudad } from "../../Entities/Ciudad";
import { Provincia } from "../../Entities/Provincia";
import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function insertCiudad(nombre: string, nombreProvincia: string) 
{
    const existeProvincia = await existsName(nombreProvincia, Provincia)

    if(!existeProvincia)
        throw `ERROR, NO EXISTE LA PROVINCIA ${nombreProvincia}`

    const provincia = await getElementByName(nombreProvincia, Provincia)
    
    const ciudad = new Ciudad()
    
    ciudad.nombre = nombre
    ciudad.provincia = provincia
    
    await ciudad.save()
}