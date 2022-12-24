import { verify } from "jsonwebtoken";

import { eliminarNotificacion } from "../../../ORM_Queries/Usuario/eliminarNotificacion";
import { Send } from "../../../SendTypes/Send";


export async function EliminarNotificacion(idNotificacion: number) {
	const msj = new Send()

	try {

		await eliminarNotificacion(idNotificacion);

		msj.message = 'NOTIFICACION ELIMINADA EXITOSAMENTE!!';
		msj.success = true;
		msj.status = 200;
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
