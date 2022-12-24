
import { Cupon } from "../../Entities/Cupon";

import { Usuario } from "../../Entities/Usuario";


export async function agregarCupon(codigo_cupon: string, id: number) 
{

    let usuario = await Usuario.find(
        {
            relations:
            {
                carrito: true
            },
            where:{
                id: id
            }
        }
    )

    let cupon = await Cupon.find({
        where:{
            codigo_cupon: codigo_cupon
        }
    })
    
    if (usuario[0].carrito
        && (cupon[0] && (!cupon[0].utilizado))
        )
    {
        usuario[0].carrito.cupon = cupon[0]
    }

    await usuario[0].carrito.save()
    cupon[0].utilizado = true
    await cupon[0].save()
    
    return cupon
}