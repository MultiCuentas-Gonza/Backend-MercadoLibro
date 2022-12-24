
import { Field, Int, ObjectType } from "type-graphql";
import { Libro } from "../Entities/Libro";
import { Send } from "./Send";

@ObjectType()
export class SendFavoritos extends Send
{
    @Field(type => [Libro], {nullable: true})
    libro: Libro[];
}