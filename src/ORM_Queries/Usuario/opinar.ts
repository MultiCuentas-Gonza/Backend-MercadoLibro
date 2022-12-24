import { Libro } from "../../Entities/Libro";
import { Opinion } from "../../Entities/Opinion";
import { Usuario } from "../../Entities/Usuario";

export async function opinar(comentario: string, isbn: string, id: number) 
{
    const opinion = new Opinion()
    
    const usuario = await Usuario.find({
        where:{
            id: id
        }
    })

    let libro = await Libro.find({
        where:{
            isbn: isbn
        }
    })

    opinion.usuario_libro = id.toString() + isbn;
    opinion.comentario = comentario
    opinion.usuario = usuario[0]
    opinion.libro = libro[0]

    await opinion.save()
}