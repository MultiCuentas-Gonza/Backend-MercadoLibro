import { ILike } from "typeorm"

/*
Comprueba si existe un nombre en una entidad basica
como lo seria las entidades Tema, Autor, Idioma, Pais, Ciudad, Provincia, 
etc...
*/
export async function existsName(nombre: any, entidad: any) 
{

    const resultado = await entidad.find({
        where:
        {
            nombre: ILike(nombre)
        }
    })

    return resultado[0]? true : false
}