import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity,
        Column, 
        Entity, 
        PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Idioma extends BaseEntity
{
    
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({
        unique: true
    })
    nombre!: string;
}
