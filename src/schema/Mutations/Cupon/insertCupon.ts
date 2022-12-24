import { insertCupon } from "../../../ORM_Queries/Cupon/insertCupon";
import { Send } from "../../../SendTypes/Send";

export async function InsertCupon(codigo_cupon: string, descuento: number) {

    const msj = new Send()

	try {

        await insertCupon(codigo_cupon, descuento)

        msj.message = 'CUPON INSERTADO CON EXITO!!!'
        msj.success = true
        msj.status = 200

		return msj;

	} catch (err) {
		return err;
	}
}
