import { getAllUsuarios } from "../../../ORM_Queries/Usuario/getAllUsuarios";
import { SendUsuarios } from "../../../SendTypes/SendUsuarios";

async function GetAllUsuarios(): Promise<SendUsuarios>
{
    const msj = new SendUsuarios()

	try {
		const usuarios = await getAllUsuarios();

        msj.message = 'USUARIOS OBTENIDOS!'
        msj.success = true;
        msj.usuarios = usuarios;

		return msj;
	}
    catch (err: any) {
        msj.message = err
        msj.success = false
        
		return msj;
	}
}