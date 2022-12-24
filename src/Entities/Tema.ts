import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity,
        Column, 
        Entity, 
        PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Tema extends BaseEntity
{
    @Field(type => ID, {nullable: true})
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({nullable: true})
    @Column({
        unique: true
    })
    nombre!: string;

    @Field({nullable: true})
    @Column()
    url_imagen: string;
}
