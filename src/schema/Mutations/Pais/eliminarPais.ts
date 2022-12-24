import { eliminarPais } from "../../../ORM_Queries/Pais/eliminarPais";

import { Send } from "../../../SendTypes/Send";

export async function EliminarPais(nombre: string) {
    const msj = new Send()

    try{
        await eliminarPais(nombre)

        msj.message = 'SE ELIMINO EL PAIS CON EXITO!';
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