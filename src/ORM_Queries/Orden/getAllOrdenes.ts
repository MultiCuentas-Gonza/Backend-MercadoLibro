import { Orden } from "../../Entities/Orden";

export async function getAllOrdenes() 
{
    const ordenes = await Orden.find({
        relations:{
            cupon: true,
            orden_detalle:{
                libro: true
            }
        }
    })
    
    return ordenes
}