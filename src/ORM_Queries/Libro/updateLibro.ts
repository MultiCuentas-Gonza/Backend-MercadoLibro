
import { Autor } from "../../Entities/Autor";
import { Tema } from "../../Entities/Tema";
import { insertAutor } from "../Autor/InsertAutor";
import { insertEditorial } from "../Editorial/insertEditorial";
import { insertIdioma } from "../Idioma/insertIdioma";

import { formatedDate } from "../Utilities/formatedDate";
import { getElementByName } from "../Utilities/getElementByName";
import { existsLibro } from "./existsLibro"
import { getLibroByIsbn } from "./getLibroByIsbn";

  
export async function updateLibro(isbn_original: string,
                                    isbn: string,
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

    const existe = await existsLibro(isbn_original)
    
    if (!existe)
    {
        throw ` ERROR, LIBRO CON ISBN ${isbn} NO EXISTE!`
    }
    if (!isbn_original)
    {
        isbn_original = isbn
    }

    const libro = await getLibroByIsbn(isbn_original);
    const obj_libro = await libro[0];

    if(!(obj_libro.isbn == isbn)
        && (isbn_original && !(isbn_original == isbn)))
    {
        obj_libro.isbn = isbn;
    }

    obj_libro.url_imagen = imagen;
    obj_libro.titulo = titulo;
    obj_libro.fecha_edicion = fecha_edicion;
    obj_libro.precio = precio;
    obj_libro.stock = stock;
    obj_libro.descripcion = descripcion;

    if (fecha_ingreso)
    {
        obj_libro.fecha_ingreso = fecha_ingreso
    }
    else
    {
        obj_libro.fecha_ingreso = (formatedDate(new Date())).toString()
    }

    if (descuento > 0) {
        obj_libro.descuento = descuento;
    }

    obj_libro.idioma = await insertIdioma(idioma);
    obj_libro.editorial = await insertEditorial(editorial);

    
    
    if (autores.length > 0)
    {
        obj_libro.autor = []

        for (const autor of autores) {
            obj_libro.autor.push(await insertAutor(autor))
        }
    }
    else
    {
        throw "ERROR, DEBE DE HABER AL MENOS UN AUTOR"
    }
    
    if (temas.length > 0)
    {  
        //let arr_tema: Array<Tema> = []
        obj_libro.tema = []
        for (const tema of temas) {
            obj_libro.tema.push(await getElementByName(tema, Tema))
        }

    }
    else
    {
        throw "ERROR, DEBE DE HABER AL MENOS UN TEMA"
    }

    await obj_libro.save()
}
