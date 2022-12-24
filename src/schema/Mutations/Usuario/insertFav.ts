import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { insertFav } from "../../../ORM_Queries/Usuario/insertFav";
import { Send } from "../../../SendTypes/Send";

export async function InsertFav(isbn: string, tokenUser: string) {
	const msj = new Send()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		await insertFav(isbn, id);

		msj.message = "Libro añadido a favoritos"
		msj.success = true;
		msj.status = 200;
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
