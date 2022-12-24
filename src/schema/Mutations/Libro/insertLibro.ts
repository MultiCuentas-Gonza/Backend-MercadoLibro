import { insertLibro } from "../../../ORM_Queries/Libro/insertLibro";

import { SendLibro } from "../../../SendTypes/SendLibro";

export async function InsertLibro(isbn: string,
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
							autor: Array<string>,
							temas: Array<string>)
{
	const msj = new SendLibro()
	try {

		const libro = await insertLibro(isbn,
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
										autor,
										temas)
										
		msj.message = 'SE INSERTO EL LIBRO CON EXITO';
		msj.success = true;
		msj.status = 200;
					
		if (libro.isbn == null)
		{
			msj.message = 'LIBRO EXISTENTE';
			msj.success = false;
			msj.status = 400;
		}
		
		msj.libro.push(libro);

		return msj;

	} catch (err) {
		return err;
	}
}