import { Usuario } from "../../Entities/Usuario";

export async function getUsuarioById(id: number) 
{
    const usuario = await Usuario.find({
        relations:
        {
            direccion: {
                ciudad: true
            },
            notificacion: true,
            carrito:{
                cupon: true,
                items: {
                    libro:{
                        autor: true
                    }
                }
            },
            orden:
            {
                cupon: true,
                orden_detalle:{
                    libro: {
                        autor: true
                    }
                }
            },
            favorito: true
        },
        where:
        {
            id: id,
        },
        order:{
            notificacion:{
                id: "DESC"
            }
        }
    })

    return usuario
}