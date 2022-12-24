import { Orden } from "../../Entities/Orden"

export async function libroComprado(isbn: string, id: number)
{

    const compro = await Orden.find({
        relations:{
            usuario: true,
            orden_detalle:{
                libro: true
            }
        },
        where:{
            usuario: {
                id: id
            },
            orden_detalle:{
                libro:{
                    isbn: isbn
                }
            }
        }
    })

    return compro[0]? true : false
}