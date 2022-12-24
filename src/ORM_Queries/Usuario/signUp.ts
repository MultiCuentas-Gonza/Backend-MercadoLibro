
import { ILike } from "typeorm";
import { Usuario } from "../../Entities/Usuario";
import { Carrito } from "../../Entities/Carrito";

export async function signUp(nombre: string, 
                            correo: string, 
                            contrasenia: string) 
{
    let usuario = await Usuario.find(
        {
            where:{
                correo: ILike(`${correo}`)
            }
        }
    )

    if (usuario[0])
    {
        throw "ERROR, CORREO EN USO"
    }

    const obj_usuario = new Usuario();
    obj_usuario.nombre = nombre;
    obj_usuario.correo = correo;
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
    
    return usuario
}