
import { MERCADO_PAGO_TOKEN, URL_NOTIFICACION } from "../../config";
import { Usuario } from "../../Entities/Usuario";
import { getCarritoUsuario } from "./getCarritoUsuario";

const mercadopago = require("mercadopago");

function getItems(usuario: Usuario): Array<any>
{
    let items: Array<any> = [];
    
    if (usuario.carrito.items)
    {
        usuario.carrito.items.forEach(item => 
        {
            const precioNeto = item.libro.precio
            let precio = precioNeto

            if (usuario.carrito.cupon != null)
            {
                precio = precio - (+precioNeto * (usuario.carrito.cupon.porc_descuento/100))
            }

            items.push({
                id: usuario.id,
                title: item.libro.titulo,
                quantity: (+item.cantidad),
                currency_id: "ARS",
                category: "Libro",
                unit_price: +precio
            });
        });

    }

    return items
}


async function crearLinkDePago(usuario: Usuario, items: any): Promise<string>
{
    mercadopago.configure({access_token: MERCADO_PAGO_TOKEN});

    const preference = {
        payer: {
            name: usuario.nombre,
            email: usuario.correo
        },
        items: items,
        back_urls: {
            success: 'https://mercado-libro.vercel.app/checkout/success',
            failure: 'https://mercado-libro.vercel.app/checkout/failure',
            pending: 'https://mercado-libro.vercel.app/checkout/pending',
        },
        auto_return: 'approved',
        notification_url: `${URL_NOTIFICACION}/notificar`,
    };

    const link =  mercadopago.preferences
    .create(preference)
    .then(function (response: any) {
        return response.body.sandbox_init_point;
    })
    .catch(function (error: any) {
        console.log(error);
        return null;
    });

    return link

}

export async function realizarCompra (id: number) 
{
    let res = ""
    
    const usuario = await getCarritoUsuario(id)

    if (usuario)
    {

        const items = getItems(usuario[0])

        res = await crearLinkDePago(usuario[0], items)
    }
    

    return res
}