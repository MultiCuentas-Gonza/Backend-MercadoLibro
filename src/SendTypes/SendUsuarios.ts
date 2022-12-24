import { Field } from "type-graphql";
import { Usuario } from "../Entities/Usuario";
import { Send } from "./Send";

export class SendUsuarios extends Send
{
    @Field(type => [Usuario])
    usuarios: Usuario[]
}