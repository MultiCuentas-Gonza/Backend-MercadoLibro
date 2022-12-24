
import { eliminarLibro } from "../../../ORM_Queries/Libro/eliminarLibro";
import { Send } from "../../../SendTypes/Send";

export async function EliminarLibro(isbn: string)
{
	const msj = new Send()
	try {

		await eliminarLibro(isbn)
										
		msj.message = 'SE ELIMINO EL LIBRO CON EXITO';
		msj.success = true;
		msj.status = 200;

		return msj;

	} catch (err: any) {
		msj.message = err;
		msj.status = 400;

		return msj;
	}
}