import { Field, ObjectType } from "type-graphql";
import { Send } from "./Send";

@ObjectType()
export class SendOpino extends Send
{
    @Field()
    opino: boolean;

    @Field()
    compro: boolean;
}