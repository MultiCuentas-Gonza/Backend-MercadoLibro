import { recuperarCotrasenia } from "../../../ORM_Queries/Usuario/recuperarContrasenia";
import { Send } from "../../../SendTypes/Send";


export async function RecuperarContrasenia(correo: string, ) 
{
    const msj = new Send();

    try {
        await recuperarCotrasenia(correo);

        msj.message = "CORREO ENVIADO CON EXITO!";
        msj.status = 200;
        msj.success = true;

        return msj;
    } catch (err: any) {
        msj.message = err
        msj.success = false;
        return msj;
    }
}