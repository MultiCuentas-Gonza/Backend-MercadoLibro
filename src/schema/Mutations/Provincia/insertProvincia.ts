import { insertProvincia } from "../../../ORM_Queries/Provincia/insertProvincia";
import { Send } from "../../../SendTypes/Send";

export async function InsertProvincia(nombre: string, nombrePais: string) {
    const msj = new Send()

    try{
        await insertProvincia(nombre, nombrePais)

        msj.message = 'SE INSERTO LA PROVINCIA CON EXITO!';
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