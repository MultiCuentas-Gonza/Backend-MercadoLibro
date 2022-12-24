import { Libro } from "../../Entities/Libro";

export async function getAllLibrosByCategoria(categoria: string) 
{

    const libro = await Libro.find({
        relations:
        {
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
            tema: {
                nombre: categoria
            }
        }
    })

    return libro
}