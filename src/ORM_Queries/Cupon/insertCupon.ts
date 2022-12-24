import { Cupon } from "../../Entities/Cupon";

import { existeCupon } from "./existeCupon";

export async function insertCupon(codigo_cupon: string, descuento: number) 
{
    if (await existeCupon(codigo_cupon))
    {
        throw "ERROR, CUPON EXISTENTE"
    }

    const obj_cupon = new Cupon()

    obj_cupon.codigo_cupon = codigo_cupon
    obj_cupon.porc_descuento = descuento
    
    await obj_cupon.save()
}