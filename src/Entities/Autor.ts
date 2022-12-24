import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity,
        Column, 
        Entity,
        PrimaryGeneratedColumn} from "typeorm";


@ObjectType()
@Entity()
export class Autor extends BaseEntity
{

    @Field(type => ID, {nullable: true})
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({nullable: true})
    @Column({
        unique: true
    })
    nombre!: string;
}
