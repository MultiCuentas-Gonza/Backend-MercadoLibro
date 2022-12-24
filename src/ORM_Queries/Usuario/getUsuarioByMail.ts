
import { Usuario } from "../../Entities/Usuario";

export async function getUsuarioByMail(correo: string)
{
    const usuario = await Usuario.find({
        where:{
            correo: correo
        }
    })

    return usuario[0]
}