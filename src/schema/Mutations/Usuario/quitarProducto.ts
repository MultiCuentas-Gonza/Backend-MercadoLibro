import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config";

import { quitarProducto } from "../../../ORM_Queries/Usuario/quitarProducto";
import { Send } from "../../../SendTypes/Send";

export async function QuitarProducto(cantidad: number, isbn: string, tokenUser: string): Promise<Send>
{
    const msj = new Send()

	try {

		const id: number = parseInt(<string>verify(tokenUser, JWT_SECRET))

		await quitarProducto(cantidad, isbn, id);

        msj.message = `SE QUITARON ${cantidad} PRODUCTOS DEL CARRITO CON EXITO!!!`
        msj.success = true;
        msj.status = 200;

		return msj;
	} catch (err) {
		return msj;
	}
}

