import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"


import { puntuar } from "../../../ORM_Queries/Usuario/puntuar";
import { Send } from "../../../SendTypes/Send";

export async function Puntuar(puntuacion: number, isbn: string, tokenUser: string) {
	const msj = new Send()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		 await puntuar(puntuacion, isbn, id);

		msj.message = "LIBRO SE PUNTUO CON EXITO!!!"
		msj.success = true;
		msj.status = 200;
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
