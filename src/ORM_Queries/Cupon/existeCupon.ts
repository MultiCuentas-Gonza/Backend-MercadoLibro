import { Cupon } from "../../Entities/Cupon";

export async function existeCupon(codigo_cupon: string) {
    const resultado = await Cupon.find({
        where:{
            codigo_cupon: codigo_cupon
        }
    })

    return resultado[0] ? true :  false
}