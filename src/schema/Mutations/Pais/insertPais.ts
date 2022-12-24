import { insertPais } from "../../../ORM_Queries/Pais/insertPais";
import { Send } from "../../../SendTypes/Send";

export async function InsertPais(nombre: string) {
    const msj = new Send()

    try{
        await insertPais(nombre)

        msj.message = 'SE INSERTO EL PAIS CON EXITO!';
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