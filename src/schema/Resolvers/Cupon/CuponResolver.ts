import { Args, ArgsType, Field, Mutation } from "type-graphql";

import { Resolver} from "type-graphql";
import { Send } from "../../../SendTypes/Send";
import { InsertCupon } from "../../Mutations/Cupon/insertCupon";
import { ArgsInsertCupon } from "./argsDefs";


@Resolver()
export class CuponResolver
{
    
    @Mutation(() => Send)
    async insertCupon(@Args() {codigo_cupon, descuento}: ArgsInsertCupon)
    {
        return await InsertCupon(codigo_cupon, descuento);
    }
}