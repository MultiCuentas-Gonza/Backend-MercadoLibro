import { decode, sign, verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config";

import { getUsuarioById } from "../../../ORM_Queries/Usuario/getUsuarioById";
import { login } from "../../../ORM_Queries/Usuario/login";
import { SendUsuario } from "../../../SendTypes/SendUsuario";
import { loginByRedSocial } from "../../../ORM_Queries/Usuario/loginByRedSocial";

async function LoginByRedSocial(nombre: string, correo: string, contrasenia: string) 
{
    const msj = new SendUsuario()

    try {
        const usuario = await loginByRedSocial(nombre , correo, contrasenia)

        const id_usuario: string = usuario[0].id.toString()

        msj.message = 'USUARIO LOGUEADO CORRECTAMENTE!!'
        msj.accessToken = sign(id_usuario, JWT_SECRET);
        msj.success = true;
        msj.usuario = usuario[0];
      
        return msj;
    } catch (err: any) {
        msj.message = err
        msj.success = false
        return msj;
    }    
}

async function GetUsuarioByCorreoYPassword(args: any): Promise<SendUsuario> 
{
    const msj = new SendUsuario()

    try {
        const usuario = await login(args.correo, args.contrasenia)

        const id_usuario: string = usuario[0].id.toString()

        msj.message = 'USUARIO LOGUEADO CORRECTAMENTE!!'
        msj.accessToken = sign(id_usuario, JWT_SECRET);
        msj.success = true;
        msj.usuario = usuario[0];
      
        return msj;
    } catch (err: any) {
        msj.message = err
        msj.success = false
        return msj;
    }
}

async function GetUsuarioByToken(tokenUser: string): Promise<SendUsuario>
{
    const msj = new SendUsuario()
    let idString = ''
    try
    {
        idString = <string>verify(tokenUser, JWT_SECRET) 
        
    }catch(err: any)
    {
        msj.message = "ERROR, TOKEN INVALIDO"
        msj.success = false
		return msj;
    }
	try {

		const id: number = parseInt(idString)
        
		const usuario = await getUsuarioById(id);

        msj.message = 'USUARIO LOGUEADO CORRECTAMENTE!!'
        msj.accessToken = tokenUser;
        msj.success = true;
        msj.usuario = usuario[0];

		return msj;
	}
    catch (err: any) {
        msj.message = err
        msj.success = false
		return msj;
	}
}

export async function selectLoginType(args:  any)
{
    if(args.nombre != '' && (args.correo != '' && (args.contrasenia != '' && args.contrasenia != null)))
    {
        return await LoginByRedSocial(args.nombre, args.correo, args.contrasenia)
    }
    else if (args.correo != '' && (args.contrasenia != '' && args.contrasenia != null))
    {
        return await GetUsuarioByCorreoYPassword(args)
    }
    else if(args.tokenUser != '')
    {
        return await GetUsuarioByToken(args.tokenUser)
    } 
    
    return new SendUsuario()
}