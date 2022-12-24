import { getTemas } from "../../../ORM_Queries/Tema/getTemas";
import { SendTema } from "../../../SendTypes/SendTema";

export async function GetTemas(): Promise<SendTema>
{
    const msj = new SendTema()

	try {
		const temas = await getTemas();

        msj.message = 'TEMAS OBTENIDOS CON EXITO!!'
        msj.success = true;
        msj.temas = temas;

		return msj;
	} catch (err) {
        msj.message = 'ERROR AL OBTENER LOS TEMAS!!'
        msj.success = false;
        msj.temas = [];
		return msj;
	}
}
