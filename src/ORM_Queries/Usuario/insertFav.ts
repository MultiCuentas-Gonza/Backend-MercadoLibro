import { Libro } from "../../Entities/Libro";
import { Notificacion } from "../../Entities/Notificacion";
import { Usuario } from "../../Entities/Usuario";


export async function insertFav(isbn: string, id: number) 
{

    const libro = await Libro.find(
        {
            where:{
                isbn: isbn
            }
        }
    )

    const usuario = await Usuario.find(
        {
            relations:
            {
                favorito: true,
                notificacion: true
            },
            where:{
                id: id
            }
        }
    )
    
    if (usuario[0].favorito)
    {
        usuario[0].favorito.push(libro[0]);
        const notificacion = new Notificacion();
        notificacion.mensaje = `'${libro[0].titulo}' se agregó a favoritos`;
        notificacion.usuario = usuario[0];

        await usuario[0].save();
        await notificacion.save();
    }
    
}