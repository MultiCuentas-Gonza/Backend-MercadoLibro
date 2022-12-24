import { sign, verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config";
import { agregarDireccion } from "../../../ORM_Queries/Usuario/agregarDireccion";

import { SendUsuario } from "../../../SendTypes/SendUsuario";

export async function AgregarDireccion(tokenUser: string, 
                                        nombre: string, 
                                        direccion: string, 
                                        infoAdicional: string, 
                                        dni: number, 
                                        telefono: string, 
                                        cp: number): Promise<SendUsuario>
{
    const msj = new SendUsuario()

	try {

		const id: number = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const usuario = await agregarDireccion(id,
                                                nombre, 
                                                direccion, 
                                                infoAdicional, 
                                                dni, 
                                                telefono, 
                                                cp);
        

        msj.message = 'DIRECCION AGREGADA CON EXITO!!'
        msj.accessToken = tokenUser;
        msj.success = true;
        msj.usuario = usuario[0];

		return msj;
	} catch (err) {
        console.log(err)
		return msj;
	}
}