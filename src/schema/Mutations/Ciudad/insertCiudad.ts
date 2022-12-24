import { insertCiudad } from "../../../ORM_Queries/Ciudad/insertCiudad";

import { Send } from "../../../SendTypes/Send";

export async function InsertCiudad(nombre: string, nombreProvincia: string) {
    const msj = new Send()

    try{
        await insertCiudad(nombre, nombreProvincia)

        msj.message = 'SE INSERTO LA CIUDAD CON EXITO!';
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