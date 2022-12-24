import { getLibroByIsbn } from "./getLibroByIsbn";

export async function eliminarLibro(isbn: string){
    const libro = await getLibroByIsbn(isbn)

    await libro[0].remove()
}