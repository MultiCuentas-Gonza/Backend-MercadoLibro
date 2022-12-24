import { Tema } from "../../Entities/Tema";
import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function updateTema(tema_original: string, tema: string, url_imagen: string)
{
    // const existeTema = await existsName(tema_original, Tema);
    // const existeTemaModificado = await existsName(tema, Tema);
    
    // if (!existeTema)
    // {
    //     throw `ERROR, EL TEMA ${tema_original} A MODIFICAR NO EXISTE`
    // }else if(existeTemaModificado)
    // {
    //     throw `ERROR, EL TEMA ${tema} YA EXISTE`
    // }
    
    const obj_tema = await getElementByName(tema_original, Tema)

    if(tema && tema.length > 0)
        obj_tema.nombre = tema;
    
    if(url_imagen && url_imagen.length > 0)
        obj_tema.url_imagen = url_imagen;

    await obj_tema.save()
}