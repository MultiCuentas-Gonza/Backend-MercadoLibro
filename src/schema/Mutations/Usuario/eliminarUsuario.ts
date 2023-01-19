import { verify } from "jsonwebtoken";
import { eliminarUsuario } from "../../../ORM_Queries/Usuario/eliminarUsuario";

import { Send } from "../../../SendTypes/Send";
import { JWT_SECRET } from "../../../config";

export async function EliminarUsuario(tokenUser: string) {
	const msj = new Send()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))
		await eliminarUsuario(id);

		msj.message = `USUARIO ELIMINADO!`
		msj.success = true;
		msj.status = 200;
		
		return msj;
	} catch (err: any) {
		msj.message = err
		return msj;
	}
}
