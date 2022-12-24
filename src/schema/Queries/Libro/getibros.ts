import { getAllLibros } from "../../../ORM_Queries/Libro/getAllLibros";
import { getAllLibrosByAutor } from "../../../ORM_Queries/Libro/getAllLibrosByAutor";
import { getAllLibrosByCategoria } from "../../../ORM_Queries/Libro/getAllLibrosByCategoria";
import { getLibroByIsbn } from "../../../ORM_Queries/Libro/getLibroByIsbn";
import { getLibrosByReference } from "../../../ORM_Queries/Libro/getLibrosByReference";
import { getLibrosConDescuento } from "../../../ORM_Queries/Libro/getLibrosConDescuento";

import { SendLibro } from "../../../SendTypes/SendLibro";

async function selectFunction(args:  any)
{
    if (args.categoria 
        && args.categoria != '')
    {
        return await getAllLibrosByCategoria(args.categoria)
    }else if(args.isbn && 
            args.isbn != '')
    {
        return await getLibroByIsbn(args.isbn)
    }
    else if(args.titulo
            && args.titulo != '')
    {
        return getLibrosByReference(args.titulo)
    }
    else if(args.autor
        && args.autor != '')
    {
        return getAllLibrosByAutor(args.autor)
    }
    else if(args.descuento)
    {
        return getLibrosConDescuento()
    }
    
    return await getAllLibros()
    
}

export async function GetLibros(args: any) {
    const msj = new SendLibro()

    try {

        const libro = await selectFunction(args)
        
        for (const objLibro of libro)
        {
            let puntMedia = (objLibro.puntuacion?.reduce((prev, curr) => prev + +(curr.puntuacion), 0) || 0)/(objLibro.puntuacion?.length || 1)
            objLibro.puntuacion_media = puntMedia
        }

        msj.message = "Libros obtenidos con exito!"
        msj.status = 200;
		msj.success = true;
		msj.libro = libro
        
        return msj;
    } catch (err) {
        
        return msj;
    }
}