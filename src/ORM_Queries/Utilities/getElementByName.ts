import { ILike } from "typeorm"

/*
obtienes un elemento de una entidad basica
como lo seria las entidades Tema, Autor, Idioma, Pais, Ciudad, Provincia, 
etc...
*/

export async function getElementByName(nombre: any, entidad: any)
{

    const resultado = await entidad.find({
        where:
        {
            nombre: ILike(nombre)
        }
    })

    return resultado[0]
}