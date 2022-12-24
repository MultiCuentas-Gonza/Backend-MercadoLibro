import { insertTema } from "../../../ORM_Queries/Tema/insertTema";
import { Send } from "../../../SendTypes/Send";

export async function InsertTema(tema: string, url_imagen: string) {
    const msj = new Send()

	try {

        await insertTema(tema, url_imagen)

        msj.message = 'TEMA AGREGADO CON EXITO!'
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