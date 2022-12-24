import { updateTema } from "../../../ORM_Queries/Tema/updateTema";
import { Send } from "../../../SendTypes/Send";

export async function UpdateTema(tema_original: string, tema: string, url_imagen: string) {
	const msj = new Send()
	try {
		await updateTema(tema_original, tema, url_imagen)

		msj.message = 'SE MODIFICO EL TEMA CON EXITO!'
		msj.success = true
		msj.status = 200

		return msj;
	} catch (err: any) {
		msj.message = err
		msj.status = 400

		return msj;
	}
}