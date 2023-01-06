import { Like } from "typeorm";

import { Direccion_entrega } from "../../Entities/Direccion_entrega";
import { Libro } from "../../Entities/Libro";
import { Notificacion } from "../../Entities/Notificacion";
import { Orden } from "../../Entities/Orden";
import { Orden_detalle } from "../../Entities/Orden_detalle";

import { Usuario } from "../../Entities/Usuario";
import { eliminarProducto } from "../Usuario/eliminarProducto";
import { calcTotal } from "../Utilities/calcTotal";
import { formatedDate } from "../Utilities/formatedDate";
import { AppDataSource } from "../../Connection/Connection";
import { Carrito } from "../../Entities/Carrito";
import { message } from "../../NodeMailer/message";
import { sendMail } from "../../NodeMailer/sendMail";
import { getMessageHtml } from "../../NodeMailer/Plantilla_notificacion/notificacion";

async function esNotificacionRepetida(paymentId: string) 
{
    const notificacion = await Notificacion.find({
        where:{
            mensaje: Like(`%${paymentId}%`)
        }
    })

    return (!notificacion[0])? true : false
}

export async function crearOrden(status: string, items: Array<any>, paymentId: string) 
{
    let total: number = 0
    let topic: string;
    let textoMensaje: string;
    

    const idUsuario = items[0].id

    let orden = new Orden();
    
    const arr_usuario = await Usuario.find({
        relations: {
            direccion: true,
            carrito: {
                cupon: true,
                items: {
                    libro: true
                }
            }
        },
        where: {
            id: idUsuario
        }
    })

    const usuario = arr_usuario[0]

    if(!usuario)
        throw new Error("EL USUARIO NO EXISTE");
    else if (!usuario.correo)
        throw new Error("EL USUARIO TIENE CORREO");
    else if (usuario.carrito.items && usuario.carrito.items.length <= 0)
        throw new Error("EL USUARIO NO TIENE SU CARRITO VACIO");

    let mensaje = message(usuario.correo, "", "", "")

    if (status == 'approved')
    {

        const payment = await Orden.find({
            where:{
                payment_id_mp: paymentId
            }
        })

        

        if (!payment[0]
            && (((usuario && usuario.carrito.items) && (usuario.carrito.items.length > 0))))
        {
            
            const obj_orden = new Orden()
            const direccion_entrega = new Direccion_entrega()

            direccion_entrega.nombre = usuario.direccion.nombre
            direccion_entrega.direccion = usuario.direccion.direccion
            direccion_entrega.infoAdicional = usuario.direccion.infoAdicional
            direccion_entrega.dni = usuario.direccion.dni
            direccion_entrega.telefono = usuario.direccion.telefono
            direccion_entrega.usuario = usuario
            direccion_entrega.ciudad = usuario.direccion.ciudad


            for (const item_carrito of usuario.carrito.items)
            {
                total = total + (+calcTotal(item_carrito.cantidad, item_carrito.libro.precio))
            }

            obj_orden.usuario = usuario
            obj_orden.fecha = (formatedDate(new Date())).toString()
            obj_orden.total = total
            obj_orden.payment_id_mp = paymentId

            //APLICO DESCUENTO
            if (usuario.carrito.cupon != null)
            {
                obj_orden.cupon = usuario.carrito.cupon
                obj_orden.total = obj_orden.total - (+total * (usuario.carrito.cupon.porc_descuento/100))

                await AppDataSource
                    .createQueryBuilder()
                    .update(Carrito)
                    .set({ cupon: null})
                    .where("id_usuario = :id", { id: usuario.id })
                    .execute()
            }
            
            await direccion_entrega.save()
            obj_orden.direccion_entrega = direccion_entrega
            await obj_orden.save()


            for (const item_carrito of usuario.carrito.items)
            {
                const libro = await Libro.find({
                    where: {
                        isbn: item_carrito.libro.isbn
                    }
                })

                libro[0].stock = libro[0].stock - (+ item_carrito.cantidad)

                const obj_detalle = new Orden_detalle()

                obj_detalle.precio = item_carrito.libro.precio
                obj_detalle.cantidad = item_carrito.cantidad

                obj_detalle.libro = item_carrito.libro
                obj_detalle.orden = obj_orden
                await eliminarProducto(item_carrito.libro.isbn, idUsuario) 
                await obj_detalle.save()
                await libro[0].save()
            }

            const notificacion = new Notificacion()
            notificacion.mensaje = `Compra aprobada\nTicket: ${paymentId}`;
            notificacion.usuario = usuario;
            await notificacion.save()

            //NOTIFICAR VIA MAIL
            topic = 'COMPRA APROBADA'
            textoMensaje = `Pago exitoso! que disfrute de sus libros 
                            ticket: ${paymentId}`
            mensaje.subject = topic
            mensaje.text = textoMensaje
            mensaje.html = getMessageHtml(`Pago exitoso! que disfrute de sus libros `, paymentId)
            await sendMail(mensaje)

            orden = obj_orden
        }
    } else if(status == 'in_process')
    {
        if(await esNotificacionRepetida(paymentId))
        {
            const notificacion = new Notificacion()
            notificacion.mensaje = `Compra pendiente\nTicket: ${paymentId}`;
            notificacion.usuario = arr_usuario[0];
            await notificacion.save()

            //NOTIFICAR VIA MAIL
            topic = 'PAGO PENDIENTE'
            textoMensaje = `El estado del pago es pendiente. 
                            Por ende no se ha podido concretar por el momento, su ticket es: ${paymentId}`
            mensaje.subject = topic
            mensaje.text = textoMensaje
            mensaje.html = getMessageHtml(`El estado del pago es pendiente. 
                                            Por ende no se ha podido concretar por el momento`, paymentId)
            await sendMail(mensaje)
        }
    }
    else if(status == 'rejected')
    {
        if(await esNotificacionRepetida(paymentId))
        {
            const notificacion = new Notificacion()
            notificacion.mensaje = `Compra rechazada`;
            notificacion.usuario = arr_usuario[0];
            await notificacion.save()

            //NOTIFICAR VIA MAIL
            topic = 'PAGO RECHAZADO'
            textoMensaje = `El pago de su compra fue rechazado. 
                            Por ende no se ha podido concretar, su ticket es: ${paymentId}`
            mensaje.subject = topic
            mensaje.text = textoMensaje
            mensaje.html = getMessageHtml(`El pago de su compra fue rechazado. 
                                            Por ende no se ha podido concretar`, paymentId)
            await sendMail(mensaje)
        }
    }

    //return orden
}