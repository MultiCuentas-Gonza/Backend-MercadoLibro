import { getAllOrdenes } from "../../../ORM_Queries/Orden/getAllOrdenes";
import { getOrdenesByFecha } from "../../../ORM_Queries/Orden/getOrdenesByFecha";
import { SendOrden } from "../../../SendTypes/SendOrden";

async function selectOrdenesMethods(args: any) 
{
    if ((args.fechaMenor && args.fechaMayor)
        && (args.fechaMenor != '' && args.fechaMayor != ''))
    {
        return await getOrdenesByFecha(args.fechaMenor, args.fechaMayor)
    }

    return await getAllOrdenes()
}

export async function GetOrdenes(args: any) {
    const msj = new SendOrden()

	try {

        const orden = await selectOrdenesMethods(args)

        msj.message = 'ORDENES OBTENIDAS CON EXITO!!'
        msj.success = true
        msj.status = 200
        msj.orden = orden
		return msj;

	} catch (err: any) {

        msj.message = err
        msj.success = true
        msj.status = 404

		return msj;
	}
}