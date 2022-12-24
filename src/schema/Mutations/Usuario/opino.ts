import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { libroComprado } from "../../../ORM_Queries/Usuario/libroComprado";

import { opino } from "../../../ORM_Queries/Usuario/opino";
import { SendOpino } from "../../../SendTypes/SendOpino";

export async function Opino( isbn: string, tokenUser: string) {
	const msj = new SendOpino()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const estaOpinado = await opino(isbn, id);
		const estaComprado = await libroComprado(isbn, id)

		if(estaOpinado)
		{
			msj.message = "EL LIBRO ESTA OPINADO"
		}
		else
		{
			msj.message = "EL LIBRO NO ESTA OPINADO"
		}

		msj.success = true;
		msj.status = 200;
		msj.opino = estaOpinado;
		msj.compro = estaComprado
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
