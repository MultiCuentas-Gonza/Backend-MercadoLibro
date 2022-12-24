
import { Usuario } from "../../Entities/Usuario";


export async function removeFav(isbn: string, id: number) 
{

    let usuario = await Usuario.find({
        relations:
        {
            favorito: true
        },
        where:{
            id: id
        }
    })
    
    if (usuario[0].favorito)
    {
        const index = usuario[0].favorito.findIndex(obj => obj.isbn === isbn)
        usuario[0].favorito.splice(index, 1);
        await usuario[0].save();
    }
    
}