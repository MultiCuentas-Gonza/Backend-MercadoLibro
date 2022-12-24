import { Usuario } from "../../Entities/Usuario";


export async function eliminarProducto(isbn: string, id: number) 
{

    const usuario = await Usuario.find({
        relations:
        {
            carrito: {
                items: {
                    libro: true
                }
            }
        },
        where:{
            id: id
        }
    })
    
    if (usuario[0].carrito.items)
    {
        const index = usuario[0].carrito.items.findIndex(item => item.libro.isbn === isbn)

        if (index != -1)
        {
            await usuario[0].carrito.items[index].remove()
        }
    }
 
}