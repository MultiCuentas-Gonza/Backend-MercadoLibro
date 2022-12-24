
import { Autor } from "../../Entities/Autor";
import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function insertAutor(nombreAutor: string)
{
    
    const existeAutor = await existsName(nombreAutor, Autor);
    const obj_autor = new Autor();

    if (!existeAutor)
    {
        obj_autor.nombre = nombreAutor;
        await obj_autor.save()
    }

    return await getElementByName(nombreAutor, Autor)
}