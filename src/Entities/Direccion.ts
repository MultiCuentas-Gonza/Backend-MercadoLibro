import { Field, ID, Int, ObjectType } from "type-graphql";

import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne,
        OneToOne,
        PrimaryGeneratedColumn} from "typeorm";

import { Ciudad } from "./Ciudad";
import { Usuario } from "./Usuario";

@ObjectType()
@Entity()
export class Direccion extends BaseEntity
{
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({nullable: true})
    @Column({nullable: true})
    nombre: string;

    @Field()
    @Column()
    direccion!: string;

    @Field()
    @Column({
        nullable: true
    })
    infoAdicional: string;

    @Field(type => Int)
    @Column({type: 'bigint'})
    dni!: number;

    @Field({
        nullable: true
    })
    @Column({
        nullable: true
    })
    telefono: string;

    @OneToOne((type) => Usuario, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_usuario'})
    usuario: Usuario;
    
    @Field(type => Ciudad)
    @ManyToOne((type) => Ciudad, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'cp'})
    ciudad!: Ciudad;
}
