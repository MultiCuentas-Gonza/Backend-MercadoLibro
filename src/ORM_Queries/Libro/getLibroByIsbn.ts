import { Libro } from "../../Entities/Libro";

export async function getLibroByIsbn(isbn: string) 
{

    const libro = await Libro.find({
        // select: 
        // {
        //     isbn: true,
        //     url_imagen: true,
        //     titulo: true,
        //     fecha_edicion: true,
        //     precio: true,
        //     stock: true,
        //     descripcion: true,
        //     fecha_ingreso: true,
        //     descuento: true,
        //     editorial: {
        //         nombre: true
        //     },
        //     tema: {
        //         nombre: true
        //     },
        //     autor: {
        //         nombre: true
        //     },
        //     opinion:{
        //         comentario: true,
        //         usuario:{
        //             nombre: true
        //         }
        //     },
        //     puntuacion:{
        //         puntuacion: true,
        //         usuario:{
        //             nombre: true
        //         }
        //     },
        // },
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
            isbn: isbn
        }
    })

    if(!libro[0])
    {
        throw `ERROR, EL LIBRO CON ISBN ${isbn} NO EXISTE!`
    }
    
    return libro
}