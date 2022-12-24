import { getAllCiudades } from "../../../ORM_Queries/Ciudad/getAllCiudades";

import { Send } from "../../../SendTypes/Send";
import { SendCiudad } from "../../../SendTypes/SendCiudad";

export async function GetAllCiudades() {
    const msj = new SendCiudad()

    try{
        const ciudades = await getAllCiudades()

        msj.message = 'SE OBTUVIERON LAS CIUDADES CON EXITO!';
        msj.success = true;
        msj.status = 200;

        msj.ciudad = ciudades;
        return msj
    }
    catch(err: any){
        msj.message = err
        msj.status = 400

        return msj
    }
}