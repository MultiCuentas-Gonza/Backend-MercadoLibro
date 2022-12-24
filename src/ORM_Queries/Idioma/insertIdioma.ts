import { Idioma } from "../../Entities/Idioma";
import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function insertIdioma(nombreIdioma: string): Promise<Idioma>
{
    const existeIdioma = await existsName(nombreIdioma, Idioma);

    if (!existeIdioma)
    {
        const obj_idioma = new Idioma();
        obj_idioma.nombre = nombreIdioma;
        await obj_idioma.save()
    }

    return getElementByName(nombreIdioma, Idioma)
}