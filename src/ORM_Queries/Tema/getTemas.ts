import { Tema } from "../../Entities/Tema"

export async function getTemas()
{
    const temas = await Tema.find()

    return temas
}
