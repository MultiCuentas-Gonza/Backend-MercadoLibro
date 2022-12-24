import { Tema } from "../../Entities/Tema";
import { existsName } from "../Utilities/exists";

export async function insertTema(tema: string, url_imagen: string)
{
    const existeTema = await existsName(tema, Tema);

    const obj_tema = new Tema();

    obj_tema.nombre = tema;
    obj_tema.url_imagen = url_imagen;

    await obj_tema.save()
}