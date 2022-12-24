import { Field, ObjectType } from "type-graphql";
import { Ciudad } from "../Entities/Ciudad";
import { Send } from "./Send";

@ObjectType()
export class SendCiudad extends Send
{
    @Field(type => [Ciudad])
    ciudad: Ciudad[]
}