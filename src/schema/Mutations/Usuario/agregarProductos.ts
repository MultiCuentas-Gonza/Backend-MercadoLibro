import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config";
import { agregarProducto } from "../../../ORM_Queries/Usuario/agregarProductos";
import { Send } from "../../../SendTypes/Send";


export async function AgregarProducto(cantidad: number, isbn: string, tokenUser: string): Promise<Send>
{
    const msj = new Send()

	try {
		const id: number = parseInt(<string>verify(tokenUser, JWT_SECRET))

		await agregarProducto(cantidad, isbn, id);

        msj.message = 'SE AÑADIO AL CARRITO CON EXITO!!!'
        msj.success = true;
        msj.status = 200;

		return msj;
	} catch (err: any) {
		msj.message = err
		msj.success = false

		return msj;
	}
}

