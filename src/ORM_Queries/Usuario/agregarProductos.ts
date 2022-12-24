
import { Cupon } from "../../Entities/Cupon";
import { Libro } from "../../Entities/Libro";
import { Linea_carrito } from "../../Entities/Linea_carrito";
import { Usuario } from "../../Entities/Usuario";


export async function agregarProducto(cantidad: number, isbn: string, id: number) 
{
    let nuevaCantidad = 0;
    const libro = await Libro.find(
        {
            where:{
                isbn: isbn
            }
        }
    )

    let usuario = await Usuario.find({
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
    
    let cupon = await Cupon.find({
        where:{
            codigo_cupon: '-'
        }
    })
    
    

    if (usuario[0].carrito.items)
    {
        const index = usuario[0].carrito.items.findIndex(obj => obj.libro.isbn === isbn)

        if (index == - 1)
        {
            if (+cantidad  > +libro[0].stock)
            {
                throw "ERROR, LA CANTIDAD ES MAYOR QUE LA DEL LIBRO";
            }
            const producto = new Linea_carrito()
            producto.cantidad = cantidad;
            producto.libro = libro[0];
            producto.carrito = usuario[0].carrito;
            await producto.save();
        }
        else
        {
            nuevaCantidad = usuario[0].carrito.items[index].cantidad + (+ cantidad)

            if (nuevaCantidad  > libro[0].stock)
            {
                throw "ERROR, LA CANTIDAD A AGREGAR ES MAYOR QUE LA DEL LIBRO";
            }
            usuario[0].carrito.items[index].cantidad = nuevaCantidad
            await usuario[0].carrito.items[index].save()
        }

    }
    
}