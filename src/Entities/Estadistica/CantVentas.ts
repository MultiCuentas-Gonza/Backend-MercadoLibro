import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class CantVentas
{
    @Field({nullable: true})
    fechaventas: string

    @Field(type => Int)
    ventas: number
}