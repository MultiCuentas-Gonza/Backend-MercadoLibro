
import { Resolver, Query, Args} from "type-graphql";
import { SendOrden } from "../../../SendTypes/SendOrden";

import { GetOrdenes } from "../../Mutations/Orden/getAllOrdenes";
import { ArgsGetVentas } from "./argsDefs";

@Resolver()
export class OrdenRsolver
{

    @Query(() => SendOrden)
    async getVentas(@Args() args: ArgsGetVentas){
        return await GetOrdenes(args);
    }

}