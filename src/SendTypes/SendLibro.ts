import { Field, Float, Int, ObjectType } from "type-graphql";
import { Libro } from "../Entities/Libro";
import { Send } from "./Send";

@ObjectType()
export class SendLibro extends Send
{
    @Field(type => Int)
    page: number = 0

    @Field(type => Int)
    totalPage: number = 0

    @Field(type => Float)
    puntuacion: number = 0

    @Field(type => [Libro], {nullable: true})
    libro: Libro[] = []
}