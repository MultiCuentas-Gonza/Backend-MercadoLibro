import { Usuario } from "../../Entities/Usuario";

export async function eliminarUsuario(correo: string){
    const usuario = await Usuario.find({
        where: {
            correo: correo
        }
    })

    if(!usuario[0])
        throw `ERROR, EL USUARIO CON CORREO ${correo} NO EXISTE!`

    await usuario[0].remove()
}