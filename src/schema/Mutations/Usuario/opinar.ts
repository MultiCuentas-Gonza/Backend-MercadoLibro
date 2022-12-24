import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"

import { opinar } from "../../../ORM_Queries/Usuario/opinar";
import { Send } from "../../../SendTypes/Send";

export async function Opinar(comentario: string, isbn: string, tokenUser: string) {
	const msj = new Send()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		await opinar(comentario, isbn, id);

		msj.message = "LIBRO SE COMENTO CON EXITO!!!"
		msj.success = true;
		msj.status = 200;
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
