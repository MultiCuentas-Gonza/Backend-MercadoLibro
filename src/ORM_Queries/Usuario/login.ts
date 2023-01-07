import { ILike } from "typeorm";
import { Usuario } from "../../Entities/Usuario";

export async function login(correo: string, contrasenia: string)
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
        where:[
            {
                correo: ILike(`${correo}`),
                contrasenia: contrasenia
            },
            {
                correo: ILike(`${correo}`),
                contraseniaTemporal: contrasenia
            }
        ],
        order:{
            notificacion:{
                id: "DESC"
            }
        }
    })

    if(!usuario[0])
    {
        throw "ERROR, CORREO O CONTRASEÑA INVALIDAS"
    }
    
    return usuario
}