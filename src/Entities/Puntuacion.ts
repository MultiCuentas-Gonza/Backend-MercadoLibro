
import { Field, Float, Int, ObjectType } from "type-graphql";
import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne,
        PrimaryColumn } from "typeorm"
import { Libro } from "./Libro"
import { Usuario } from "./Usuario"

@ObjectType()
@Entity()
export class Puntuacion extends BaseEntity
{
    @PrimaryColumn()
    usuario_libro: string;
    
    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 3,
        scale: 2,
    })
    puntuacion!: number;

    @Field(type => Usuario, {nullable: true})
    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    @ManyToOne((type) => Libro, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    libro!: Libro;
}