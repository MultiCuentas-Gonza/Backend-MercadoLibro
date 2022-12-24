
import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { realizarCompra } from "../../../ORM_Queries/Usuario/realizarCompra";

import { SendMercadoPago } from "../../../SendTypes/SendMercadoPago";

export async function RealizarCompra(tokenUser: string) {
	const msj = new SendMercadoPago()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET));

		const res = await realizarCompra(id);

		msj.message = "realizada con exito!"
		msj.success = true;
		msj.init_point = res;

		return msj;
	} catch (err) {
		msj.message = "Compra rechazada"
		msj.success = false;
		msj.init_point = ''
		console.log(err)
		return msj;
	}
}