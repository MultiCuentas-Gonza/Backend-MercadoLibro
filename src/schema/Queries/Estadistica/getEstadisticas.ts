import { getCantVentasByDia } from "../../../ORM_Queries/Estadistica/getCantVentasByDia";
import { getCantVentasByMes } from "../../../ORM_Queries/Estadistica/getCantVentasByMes";
import { SendEstadistica } from "../../../SendTypes/SendEstadisticas";

export async function GetEstadisticas() {
    let msj = new SendEstadistica()

    try {

        msj.ventasDia = await getCantVentasByDia()
        msj.ventasMes = await getCantVentasByMes()
        msj.message = 'ESTADISTICAS OBTENIDAS CON EXITO'
        msj.status = 200
        msj.success = true

        return msj
    } catch (err) {
        return msj;
    }
}