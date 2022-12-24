import { eliminarTema } from "../../../ORM_Queries/Tema/eliminarTema";

import { Send } from "../../../SendTypes/Send";

export async function EliminarTema(nombre: string) {
    const msj = new Send()

	try {

        await eliminarTema(nombre)

        msj.message = 'TEMA ELIMINADO!'
        msj.success = true
        msj.status = 200

		return msj;

	} catch (err: any) {

        msj.message = err
        msj.success = false
        msj.status = 404

		return msj;
	}
}