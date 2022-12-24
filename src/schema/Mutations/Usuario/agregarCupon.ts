import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../../config";
import { agregarCupon } from "../../../ORM_Queries/Usuario/agregarCupon";
import { SendCupon } from "../../../SendTypes/SendCupon";


export async function AgregarCupon(codigo_cupon: string, tokenUser: string): Promise<SendCupon>
{
    const msj = new SendCupon()

	try {

		const id: number = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const cupon = await agregarCupon(codigo_cupon, id);

        msj.message = 'CUPON AGREGADO CON EXITO!!!'
        msj.success = true;
        msj.cupon = cupon[0];

		return msj;
	} catch (err) {
		return msj;
	}
}

