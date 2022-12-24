import { MoreThan } from "typeorm";
import { Libro } from "../../Entities/Libro";

export async function getLibrosConDescuento() 
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
        //     nombre: true
        //     },
        //     tema: {
        //     nombre: true
        //     },
        //     autor: {
        //     nombre: true
        //     },
        //     opinion:{
        //     comentario: true,
        //     usuario:{
        //         nombre: true
        //     }
        //     },
        //     puntuacion:{
        //     puntuacion: true,
        //     usuario:{
        //         nombre: true
        //     }
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
            descuento: MoreThan(0)
        }
    })

    return libro
}