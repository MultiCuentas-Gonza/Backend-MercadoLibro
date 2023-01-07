import { ILike } from "typeorm";
import { Usuario } from "../../Entities/Usuario";
import { Carrito } from "../../Entities/Carrito";

export async function loginByRedSocial(nombre: string = "", correo: string, contrasenia: string) 
{
    
    let usuario = await Usuario.find({
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
            correo: ILike(`${correo}`),
            contrasenia: contrasenia
        },
        order:{
            notificacion:{
                id: "DESC"
            }
        }
    })
    
    if(!usuario[0])
    {
        const obj_usuario = new Usuario();
        obj_usuario.nombre = nombre;
        obj_usuario.correo = correo;
        obj_usuario.registroRedSocial = true;
        obj_usuario.contrasenia = contrasenia;
        await obj_usuario.save();

        usuario = await Usuario.find(
            {
                where:{
                    correo: correo
                }
            }
        )
    
        const obj_carrito = new Carrito();
        obj_carrito.usuario = usuario[0]
        await obj_carrito.save();
    }

    return usuario
}