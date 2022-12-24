import { Field, Int, ObjectType } from "type-graphql";
import { Orden } from "../Entities/Orden";
import { Send } from "./Send";

@ObjectType()
export class SendOrden extends Send
{
    @Field(type => [Orden], {nullable: true})
    orden: Orden[];
}