import { Field, Int, ObjectType } from "type-graphql";
import { Usuario } from "../Entities/Usuario";
import { Send } from "./Send";

@ObjectType()
export class SendUsuario extends Send
{
    @Field()
    accessToken: string = ''

    @Field(type => Usuario, {nullable: true})
    usuario?: Usuario
}