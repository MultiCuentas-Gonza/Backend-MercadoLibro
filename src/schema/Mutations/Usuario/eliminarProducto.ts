import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config";
import { eliminarProducto } from "../../../ORM_Queries/Usuario/eliminarProducto";
import { Send } from "../../../SendTypes/Send";

export async function EliminarProducto(isbn: string, tokenUser: string): Promise<Send>
{
    const msj = new Send()

	try {

		const id: number = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const usuario = await eliminarProducto(isbn, id);

        msj.message = `EL PRODUCTO SE ELIMINO CON EXITO!!!`
        msj.success = true;
		msj.status = 200;

		return msj;
	} catch (err) {
        
		return msj;
	}
}

