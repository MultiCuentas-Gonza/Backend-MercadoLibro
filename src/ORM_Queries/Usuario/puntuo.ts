import { Puntuacion } from "../../Entities/Puntuacion";

export async function puntuo(isbn: string, id: number)
{
    const idPuntuacion = id.toString() + isbn
    
    const puntuacion = await Puntuacion.find({
        where:{
            usuario_libro: idPuntuacion
        }
    })

    return puntuacion[0]? true : false
}