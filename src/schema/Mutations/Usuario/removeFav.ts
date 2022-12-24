import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { removeFav } from "../../../ORM_Queries/Usuario/removeFav";
import { Send } from "../../../SendTypes/Send";

import { SendUsuario } from "../../../SendTypes/SendUsuario";

export async function RemoveFav(isbn: string, tokenUser: string) {
	const msj = new Send()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		await removeFav(isbn, id);

		msj.message = "Libro removido de favoritos"
		msj.success = true;
		msj.status = 200;
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
