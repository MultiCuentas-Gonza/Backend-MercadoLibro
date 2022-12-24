import { Usuario } from "../../Entities/Usuario";

export async function getFavoritos(id: number)
{
    const arr_usuario = await Usuario.find({
        relations: {
            favorito: {
                autor: true
            }
        },
        where: {
            id: id
        }
    })

    if(!arr_usuario[0])
    {
        throw "ERROR, USUARIO INEXISTENTE"
    }

    

    return arr_usuario[0].favorito
}