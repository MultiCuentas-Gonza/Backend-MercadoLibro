import { Ciudad } from "../../Entities/Ciudad";
import { Direccion } from "../../Entities/Direccion";

import { Usuario } from "../../Entities/Usuario";

export async function agregarDireccion(id: number, 
                                        nombre: string, 
                                        calle_direccion: string, 
                                        infoAdicional: string, 
                                        dni: number, 
                                        telefono: string, 
                                        cp: number)
{

    let usuario = await Usuario.find({
            relations:{
                direccion: true
            },
            where:{
                id: id
            }
    })

    let arrDireccion = await Direccion.find({
        where:{
            usuario:
            {
                id: usuario[0].id
            }
        }
    })


    const ciudad = await Ciudad.find({
        where:
        {
            cp: cp
        }
    })
    let obj_direccion = new Direccion()

    if (!arrDireccion[0] && ciudad[0])
    {
        obj_direccion.nombre = nombre;
        obj_direccion.direccion = calle_direccion;
        obj_direccion.infoAdicional = infoAdicional;
        obj_direccion.dni = dni;
        obj_direccion.telefono = telefono
        obj_direccion.ciudad = ciudad[0]
        obj_direccion.usuario = usuario[0]
        
        await obj_direccion.save()
    }else if(usuario[0].direccion && ciudad[0])
    {

        obj_direccion = arrDireccion[0]

        obj_direccion.nombre = nombre;
        obj_direccion.direccion = calle_direccion;
        obj_direccion.infoAdicional = infoAdicional;
        obj_direccion.dni = dni;
        obj_direccion.telefono = telefono
        obj_direccion.ciudad = ciudad[0]

        await obj_direccion.save()
    }

    usuario = await Usuario.find({
        relations:{
            direccion: {
                ciudad: 
                {
                    provincia: true
                }
            }
        },
        where:{
            id: id
        }
    })

    return usuario
}