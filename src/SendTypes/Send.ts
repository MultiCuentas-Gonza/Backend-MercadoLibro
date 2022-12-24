import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Send
{
    @Field()
    message: string = "";

    @Field()
    success:boolean = false;

    @Field(type => Int)
    status: number = 0;
}