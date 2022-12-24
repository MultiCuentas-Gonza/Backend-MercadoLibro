import { Usuario } from "../../Entities/Usuario";
import { getUsuarioByMail } from "./getUsuarioByMail";

export async function updateUsuario(nombre: string,
                                    correo: string,
                                    contrasenia: string,
                                    usuario: Usuario)
{

    if ((nombre.length + (+correo.length) + (+contrasenia.length)) == 0)
        throw `ERROR, CAMPOS NOMBRE, CORREO Y CONTRASEÑA VACIOS`

    if (nombre != null
        && nombre.length > 0)
        usuario.nombre = nombre

    if ((correo != null
        && correo.length > 0)
        && (usuario.correo != correo)) {
        const userComprob = await getUsuarioByMail(correo)

        if (userComprob)
            throw `ERROR, CORREO '${correo}' REGISTRADO`

        usuario.correo = correo
    }

    if (contrasenia != null
        && contrasenia.length > 0)
        usuario.contrasenia = contrasenia

    await usuario.save()
}