import { Args, ArgsType, Field, Mutation, Query } from "type-graphql";

import { Resolver} from "type-graphql";
import { Send } from "../../../SendTypes/Send";
import { GetEstadisticas } from "../../Queries/Estadistica/getEstadisticas";
import { SendEstadistica } from "../../../SendTypes/SendEstadisticas";


@Resolver()
export class EstadisticaResolver
{
    
    @Query(() => SendEstadistica)
    async getEstadisticas()
    {
        return await GetEstadisticas();
    }
}