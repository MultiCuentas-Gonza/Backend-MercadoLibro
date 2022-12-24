import { MERCADO_PAGO_TOKEN } from "./config";
import { crearOrden } from "./ORM_Queries/Orden/crearOrden";
const mercadopago = require("mercadopago")

export const notificar = async (req: any, res: any) => {

  try{
      mercadopago.configure({access_token: MERCADO_PAGO_TOKEN});

      const {query} = req

      let payment: any

      const topic = query.topic || query.type;
      

      if (topic == "payment") {

          const paymentId = query.id || query['data.id'];
          payment = await mercadopago.payment.findById(paymentId)
          
          const items = payment.body.additional_info.items
          const status = payment.body.status

          await crearOrden(status, items, <string>paymentId)
          
          res.status(200)
      }
      else
      {
        res.status(400)
      }
    }catch(err: any){
      console.log(err)
      return err
    }
}
