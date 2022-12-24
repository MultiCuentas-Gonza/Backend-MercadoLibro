import { Field, ObjectType } from "type-graphql";
import { Send } from "./Send";

@ObjectType()
export class SendPuntuo extends Send
{
    @Field()
    puntuo: boolean = false;

    @Field()
    compro: boolean = false;
}