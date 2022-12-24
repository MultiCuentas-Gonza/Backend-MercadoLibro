import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsGetVentas {
    @Field()
    fechaMenor: string = '';

    @Field()
    fechaMayor: string = '';

}