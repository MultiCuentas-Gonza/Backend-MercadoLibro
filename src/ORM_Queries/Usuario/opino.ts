import { Opinion } from "../../Entities/Opinion"

export async function opino(isbn: string, id: number)
{
    const idPuntuacion = id.toString() + isbn

    const opinion = await Opinion.find({
        where:{
            usuario_libro: idPuntuacion
        }
    })

    return opinion[0]? true : false
}