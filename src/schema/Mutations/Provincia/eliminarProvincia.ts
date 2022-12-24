import { eliminarProvincia } from "../../../ORM_Queries/Provincia/eliminarProvincia";
import { Send } from "../../../SendTypes/Send";

export async function EliminarProvincia(nombre: string) {
    const msj = new Send()

    try{
        await eliminarProvincia(nombre)

        msj.message = 'SE ELIMINO LA PROVINCIA CON EXITO!';
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