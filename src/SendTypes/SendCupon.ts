import { Field, Int, ObjectType } from "type-graphql";
import { Cupon } from "../Entities/Cupon";
import { Send } from "./Send";

@ObjectType()
export class SendCupon extends Send
{
    @Field(type => Cupon, {nullable: true})
    cupon: Cupon
}