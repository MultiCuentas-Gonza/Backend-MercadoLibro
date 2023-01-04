import { Field, Int, ObjectType } from "type-graphql";
import { Any } from "typeorm";
import { Send } from "./Send";
import { CantVentas } from "../Entities/Estadistica/CantVentas";

@ObjectType()
export class SendEstadistica extends Send
{
    @Field(type => [CantVentas], {nullable: true})
    ventasDia: Array<CantVentas>

    @Field(type => [CantVentas], {nullable: true})
    ventasMes: Array<CantVentas>
}