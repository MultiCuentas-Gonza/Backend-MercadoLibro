import { Usuario } from "../../Entities/Usuario";

export async function eliminarUsuario(id: number){
    
    const usuario = await Usuario.find({
        where: {
            id: id
        }
    })

    if(!usuario[0])
        throw `ERROR, EL USUARIO NO EXISTE!`

    await usuario[0].remove()
}