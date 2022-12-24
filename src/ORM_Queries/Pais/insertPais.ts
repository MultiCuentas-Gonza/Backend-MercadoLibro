import { Pais } from "../../Entities/Pais";

export async function insertPais(nombre: string) 
{
    const pais = new Pais()
    
    pais.nombre = nombre

    await pais.save()
}