import { ILike } from "typeorm";
import { Libro } from "../../Entities/Libro";

export async function getLibrosByReference(titulo: string) 
{

    const libro = await Libro.find({
        relations:{
            editorial: true,
            idioma: true,
            opinion: {
                usuario: true
            },
            puntuacion: {
                usuario: true
            },
            tema: true,
            autor: true
        },
        where: {
            
            titulo: ILike(`%${titulo}%`)
        }
    })

    return libro
}