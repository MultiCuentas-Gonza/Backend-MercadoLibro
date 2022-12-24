import { Orden_detalle } from "../../Entities/Orden_detalle";

export async function eliminarOrden_detalle(id: number) 
{
    const orden = await Orden_detalle.find({
        where:{
            id: id
        }
    })

    if(!orden[0])
        throw `ERROR, LA ORDEN CON ID ${id} NO EXISTE!`

    await orden[0].remove()
}