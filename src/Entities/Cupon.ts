import { Field, Float, ID, ObjectType} from "type-graphql";
import { BaseEntity,
        Column,
        Entity,
        PrimaryColumn,
        } from "typeorm";

@ObjectType()
@Entity()
export class Cupon extends BaseEntity
{
    @Field(type => ID)
    @PrimaryColumn()
    codigo_cupon!: string;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 4, 
        scale: 2,
    })
    porc_descuento!: number;

    @Field()
    @Column({
        default: false
    })
    utilizado!: boolean;
}
