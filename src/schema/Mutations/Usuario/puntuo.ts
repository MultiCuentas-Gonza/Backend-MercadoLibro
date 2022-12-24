import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { libroComprado } from "../../../ORM_Queries/Usuario/libroComprado";
import { puntuo } from "../../../ORM_Queries/Usuario/puntuo";
import { SendPuntuo } from "../../../SendTypes/SendPuntuo";

export async function Puntuo( isbn: string, tokenUser: string) {
	const msj = new SendPuntuo()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const estaPuntuado = await puntuo(isbn, id);
		const compro = await libroComprado(isbn, id);

		if(estaPuntuado)
		{
			msj.message = "EL LIBRO ESTA OPINADO"
		}
		else
		{
			msj.message = "EL LIBRO NO ESTA OPINADO"
		}

		msj.success = true;
		msj.status = 200;
		msj.puntuo = estaPuntuado;
		msj.compro = compro;
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
