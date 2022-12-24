import { Orden } from "../../Entities/Orden";

export async function eliminarOrden(id: number) 
{
    const orden = await Orden.find({
        where:{
            id: id
        }
    })

    if(!orden[0])
        throw `ERROR, LA ORDEN CON ID ${id} NO EXISTE!`

    await orden[0].remove()
}