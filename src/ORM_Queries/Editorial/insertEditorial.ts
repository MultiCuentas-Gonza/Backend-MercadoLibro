import { Editorial } from "../../Entities/Editorial";
import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function insertEditorial(nombreEditorial: string): Promise<Editorial>
{
    const existeIdioma = await existsName(nombreEditorial, Editorial);

    if (!existeIdioma)
    {
        const obj_editorial = new Editorial();
        obj_editorial.nombre = nombreEditorial;
        await obj_editorial.save()
    }

    return getElementByName(nombreEditorial, Editorial)
}