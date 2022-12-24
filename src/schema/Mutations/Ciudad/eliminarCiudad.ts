
import { eliminarCiudad } from "../../../ORM_Queries/Ciudad/eliminarCiudad";
import { Send } from "../../../SendTypes/Send";

export async function EliminarCiudad(nombre: string) {
    const msj = new Send()

    try{
        await eliminarCiudad(nombre)

        msj.message = 'SE ELIMINO LA CIUDAD CON EXITO!';
        msj.success = true;
        msj.status = 200;

        return msj
    }
    catch(err: any){
        
        msj.message = err
        msj.status = 400

        return msj
    }
}