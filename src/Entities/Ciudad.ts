import { Field, ID, ObjectType } from "type-graphql";
import {BaseEntity, 
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne,
        PrimaryGeneratedColumn, 
         } from "typeorm";
import { Provincia } from "./Provincia";


@ObjectType()
@Entity()
export class Ciudad extends BaseEntity
{
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    cp!: number;

    @Field()
    @Column()
    nombre!: string;

    @Field(type => Provincia, {nullable: true})
    @ManyToOne((type) => Provincia, (provincia) => provincia.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_provincia'})
    provincia!: Provincia;
}
