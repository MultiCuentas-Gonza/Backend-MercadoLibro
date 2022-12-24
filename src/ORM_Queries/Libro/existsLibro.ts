import { Libro } from "../../Entities/Libro"

export async function existsLibro(isbn: any) 
{

    const resultado = await Libro.find({
        where:
        {
            isbn: isbn
        }
    })

    return resultado[0]? true : false
}