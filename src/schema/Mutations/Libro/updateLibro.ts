import { updateLibro } from "../../../ORM_Queries/Libro/updateLibro";
import { Send } from "../../../SendTypes/Send";

export async function UpdateLibro(isbn_original: string,
							isbn: string,
							imagen: string,
							titulo: string,
							fecha_edicion: string,
							precio: number,
							stock: number,
							descripcion: string,
							fecha_ingreso: string = '',
							descuento: number = 0,
							idioma: string,
							editorial: string,
							autores: Array<string>,
							temas: Array<any>) {

	const msj = new Send()

	try {

		await updateLibro(isbn_original,
                            isbn,
							imagen,
							titulo,
							fecha_edicion,
							precio,
							stock,
							descripcion,
							fecha_ingreso,
							descuento,
							idioma,
							editorial,
							autores,
							temas)

		msj.message = 'SE MODIFICO EL LIBRO CON EXITO';
		msj.success = true;
		msj.status = 200;

		return msj;

	} catch (err: any) {

		msj.message = err;
		msj.success = false;
		msj.status = 400;
		return msj;
	}
}

