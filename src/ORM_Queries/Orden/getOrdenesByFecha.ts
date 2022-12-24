import { Between } from "typeorm";
import { Orden } from "../../Entities/Orden";

export async function getOrdenesByFecha(fechaMenor: string, fechaMayor: string) {
    const ordenes = await Orden.find({
        relations:{
            cupon: true,
            orden_detalle:{
                libro: true
            }
        },
        where: {
            fecha: Between(
                fechaMenor, 
                fechaMayor
            ),
        }
    })
    
    return ordenes
}