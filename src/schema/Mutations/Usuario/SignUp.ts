import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config"
import { signUp } from '../../../ORM_Queries/Usuario/signUp'
import { SendUsuario } from "../../../SendTypes/SendUsuario";

export async function SignUp(nombre: string, 
							correo: string, 
							contrasenia: string) 
{
	const msj = new SendUsuario();

	try {

		const usuario = await signUp(nombre,
									correo,
									contrasenia);

		const id_usuario: string = usuario[0].id.toString()
		
		msj.message = "EL USUARIO SE REGISTRO CORRECTAMENTE!"
		msj.accessToken = sign(id_usuario, JWT_SECRET);
		msj.success = true;
		msj.usuario = usuario[0];
		
		return msj;
	} catch (err: any) {
		msj.message = err
		msj.success = false;
		return msj;
	}
}