import { Usuario } from "../../Entities/Usuario"

export async function getAllUsuarios() {
    const usuarios = await Usuario.find()

    return usuarios
}