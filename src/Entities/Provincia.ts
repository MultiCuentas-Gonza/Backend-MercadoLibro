import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryGeneratedColumn } from "typeorm";
import { Pais } from "./Pais";

@ObjectType()
@Entity()
export class Provincia extends BaseEntity
{
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({nullable: true})
    @Column()
    nombre!: string;
    
    @Field(type => Pais, {nullable: true})
    @ManyToOne((type) => Pais, (pais) => pais.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_pais'})
    pais!: Pais;
}
