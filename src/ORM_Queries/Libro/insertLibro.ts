import { Libro } from "../../Entities/Libro"
import { Tema } from "../../Entities/Tema";
import { insertAutor } from "../Autor/InsertAutor";
import { insertEditorial } from "../Editorial/insertEditorial";
import { insertIdioma } from "../Idioma/insertIdioma";

import { formatedDate } from "../Utilities/formatedDate";
import { getElementByName } from "../Utilities/getElementByName";

  
export async function insertLibro(isbn: string,
                                    imagen: string,
                                    titulo: string,
                                    fecha_edicion: string,
                                    precio: number,
                                    stock: number,
                                    descripcion: string,
                                    fecha_ingreso: string = '',
                                    descuento: number = 0,
                                    idioma: string,
                                    editorial: string,
                                    autores: Array<string>,
                                    temas: Array<any>)
{

    const obj_libro = new Libro();

    obj_libro.isbn = isbn;
    obj_libro.url_imagen = imagen;
    obj_libro.titulo = titulo;
    obj_libro.fecha_edicion = fecha_edicion;
    obj_libro.precio = precio;
    obj_libro.stock = stock;
    obj_libro.descripcion = descripcion;

    if (fecha_ingreso != "null")
    {
        obj_libro.fecha_ingreso = fecha_ingreso
    }
    else
    {
        obj_libro.fecha_ingreso = formatedDate(new Date())
    }

    if (descuento > 0)
    {
        obj_libro.descuento = descuento;
    }

    obj_libro.idioma = await insertIdioma(idioma);
    obj_libro.editorial = await insertEditorial(editorial);


    obj_libro.autor = []
    for (const autor of autores) {
        obj_libro.autor.push(await insertAutor(autor))
    }

    obj_libro.tema = []
    for (const tema of temas) {
        obj_libro.tema.push(await getElementByName(tema, Tema))
    }

    await obj_libro.save()
    

    return obj_libro
}
