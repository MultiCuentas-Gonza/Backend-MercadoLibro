import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { getFavoritos } from "../../../ORM_Queries/Usuario/getFavoritos";
import { SendFavoritos } from "../../../SendTypes/SendFavoritos";

export async function GetFavoritos(tokenUser: string) {
	const msj = new SendFavoritos()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const favoritos = await getFavoritos(id);

		msj.message = "LIBROS OBTENIDOS CON EXITO"
		msj.success = true;
		msj.status = 200;
		msj.libro = favoritos || []

		return msj;
	} catch (err: any) {
		msj.message = err
		msj.success = true;
		msj.status = 200;
		
		return msj;
	}
}
