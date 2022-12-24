import { Field, Int, ObjectType } from "type-graphql";
import { Tema } from "../Entities/Tema";
import { Send } from "./Send";

@ObjectType()
export class SendTema extends Send
{
    @Field(type => [Tema], {nullable: true})
    temas?: Tema[]
}