import { Libro } from "../../Entities/Libro";
import { Puntuacion } from "../../Entities/Puntuacion";
import { Usuario } from "../../Entities/Usuario";

export async function puntuar(puntuacion: number, isbn: string, id: number) 
{
    const obj_puntuacion = new Puntuacion()
    
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

    obj_puntuacion.usuario_libro = id.toString() + isbn;
    obj_puntuacion.puntuacion = puntuacion
    obj_puntuacion.usuario = usuario[0]
    obj_puntuacion.libro = libro[0]

    await obj_puntuacion.save()

}