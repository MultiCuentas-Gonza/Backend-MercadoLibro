import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";
import { getUsuarioById } from "../../../ORM_Queries/Usuario/getUsuarioById";
import { getUsuarioByMail } from "../../../ORM_Queries/Usuario/getUsuarioByMail";
import { updateUsuario } from "../../../ORM_Queries/Usuario/updateUsuarioById";
import { Send } from "../../../SendTypes/Send";


async function UpdateUsuarioByMail (correo_original: string, 
                                    nombre: string,
                                    correo: string,
                                    contrasenia: string) 
{
    const msj = new Send();

    try {
        const usuario = await getUsuarioByMail(correo_original)
        await updateUsuario(nombre, correo, contrasenia, usuario)

        msj.message = "EL USUARIO MODIFICADO CORRECTAMENTE!"
        msj.success = true;
        msj.status = 200;

        return msj;
    } catch (err: any) {
        msj.message = err
        msj.success = false;
        return msj;
    }
}

async function UpdateUsuarioByToken (tokenUser: string,
                                            nombre: string, 
                                            correo: string, 
                                            contrasenia: string) 
{
    const msj = new Send();

    try {
        const id = parseInt(<string>verify(tokenUser, JWT_SECRET))
        
        const usuario = await getUsuarioById(id)
        await updateUsuario(nombre, correo, contrasenia, usuario[0])

        msj.message = "EL USUARIO MODIFICADO CORRECTAMENTE!"
        msj.success = true;
        msj.status = 200;

    return msj;
    } catch (err: any) {
        msj.message = err
        msj.success = false;
    return msj;
    }
}

export async function selectUpdateType(args:  any)
{
    
    if (args.tokenUser != '')
    {
        return await UpdateUsuarioByToken(args.tokenUser, args.nombre, args.correo, args.contrasenia)
    }
    else if(args.correo_original != '')
    {
        return await UpdateUsuarioByMail(args.correo_original, args.nombre, args.correo, args.contrasenia)
    }
    
    const msj = new Send()
    msj.message = "ERROR, DEBE DE INGRESAR UN TOKEN O UN CORREO PARA REALIZAR UN UPDATE"
    msj.status = 400

    return msj
}
