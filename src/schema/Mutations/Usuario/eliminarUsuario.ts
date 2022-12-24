import { eliminarUsuario } from "../../../ORM_Queries/Usuario/eliminarUsuario";

import { Send } from "../../../SendTypes/Send";

export async function EliminarUsuario(correo: string) {
	const msj = new Send()

	try {
		await eliminarUsuario(correo);

		msj.message = `USUARIO ELIMINADO!`
		msj.success = true;
		msj.status = 200;
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
