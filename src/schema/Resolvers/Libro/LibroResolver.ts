import { Resolver, Args, Query, Mutation, Arg } from "type-graphql";

import { SendLibro } from "../../../SendTypes/SendLibro";
import { InsertLibro } from "../../Mutations/Libro/insertLibro";
import { GetLibros } from "../../Queries/Libro/getibros";
import { UpdateLibro } from "../../Mutations/Libro/updateLibro";
import { ArgsGetLibro, ArgsInsertLibro, ArgsUpdateLibro } from "./argsDefs";
import { Send } from "../../../SendTypes/Send";
import { EliminarLibro } from "../../Mutations/Libro/eliminarLibro";

@Resolver()
export class LibroResolver
{
    @Query(() => SendLibro)
    async getLibro(@Args() args: ArgsGetLibro)
    {
        return await GetLibros(args);
    }

    @Mutation(() => SendLibro)
    async insertLibro(@Args() {isbn, 
                                imagen,
                                titulo,
                                fecha_edicion,
                                precio,
                                stock,
                                descripcion,
                                fecha_ingreso,
                                descuento,
                                idioma,
                                editorial,
                                autor,
                                tema}: ArgsInsertLibro)
    {

        return await InsertLibro(isbn, 
                                imagen,
                                titulo,
                                fecha_edicion,
                                precio,
                                stock,
                                descripcion,
                                fecha_ingreso,
                                descuento, 
                                idioma,
                                editorial,
                                autor,
                                tema);
    }

    @Mutation(() => Send)
    async updateLibro(@Args() {isbn_original,
                                isbn, 
                                imagen,
                                titulo,
                                fecha_edicion,
                                precio,
                                stock,
                                descripcion,
                                fecha_ingreso,
                                descuento,
                                idioma,
                                editorial,
                                autor,
                                tema}: ArgsUpdateLibro)
    {

        return await UpdateLibro(isbn_original,
                                isbn, 
                                imagen,
                                titulo,
                                fecha_edicion,
                                precio,
                                stock,
                                descripcion,
                                fecha_ingreso,
                                descuento, 
                                idioma,
                                editorial,
                                autor,
                                tema);
    }

    @Mutation(() => Send)
    async eliminarLibro(@Arg('isbn') isbn: string)
    {
        return await EliminarLibro(isbn);
    }
}