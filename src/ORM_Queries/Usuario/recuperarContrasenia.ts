import { Usuario } from "../../Entities/Usuario";
import { getRecuperarContraseniaHtml } from "../../NodeMailer/Plantilla_Recuperar_contrasenia/getRecuperarContraseniaHtml";
import { message } from "../../NodeMailer/message";
import { sendMail } from "../../NodeMailer/sendMail";
import { generatePassRandom } from "../Utilities/generatePassRandom";


async function enviarContraseniaPorMail(correo: string, contraseniaTemporal: string)
{
    const mensaje = message(correo, "", "", "")

    const topic: string = 'CAMBIO DE CONTRASEÑA'
    const textoMensaje: string = `Se ha generado una contraseña temporal de acceso, si usted no solicito el cambio de contraseña ignore este correo`

    mensaje.subject = topic
    mensaje.text = textoMensaje
    mensaje.html = getRecuperarContraseniaHtml(`Se ha generado una contraseña temporal de acceso, tiene tiempo hasta las 00:00 antes de que expire.
                                                Si usted no solicito el cambio de contraseña ignore este correo.`, 
                                                contraseniaTemporal)
                                    
    await sendMail(mensaje)
}

export async function recuperarCotrasenia(correo: string) 
{
    const usuario = await Usuario.find({
        where:{
            correo: correo
        }
    })

    if(!usuario[0])
        throw "USUARIO INEXISTENTE"
    else if (usuario[0].registroRedSocial)
        throw 'USUARIO REGISTRADO POR RED SOCIAL'

    const contraseniaTemporal: string = generatePassRandom()
    usuario[0].contraseniaTemporal = contraseniaTemporal
    await usuario[0].save()

    await enviarContraseniaPorMail(correo, contraseniaTemporal)
}