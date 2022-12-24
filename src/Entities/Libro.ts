import { Field, Float, ID, Int, ObjectType } from "type-graphql";

import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        JoinTable, 
        ManyToMany, 
        ManyToOne, 
        OneToMany,
        PrimaryColumn } from "typeorm";
import { Autor } from "./Autor";
    
import { Editorial } from "./Editorial";
import { Idioma } from "./Idioma";
import { Opinion } from "./Opinion";
import { Orden_detalle } from "./Orden_detalle";
import { Puntuacion } from "./Puntuacion";
import { Tema } from "./Tema";

@ObjectType()
@Entity()
export class Libro extends BaseEntity
{
    
    @Field(type => ID, {nullable: true})
    @PrimaryColumn()
    isbn!: string;

    @Field({nullable: true})
    @Column('text')
    url_imagen!: string;

    @Field({nullable: true})
    @Column()
    titulo!: string;

    @Field({nullable: true})
    @Column()
    fecha_edicion!: string;

    @Field(type => Float, {nullable: true})
    @Column({
        type: 'decimal',
        precision: 10, 
        scale: 2,
    })
    precio!: number;

    @Field(type => Int, {nullable: true})
    @Column()
    stock!: number;

    @Field({nullable: true})
    @Column()
    descripcion!: string;

    @Field(type => String, {nullable: true})
    @Column({nullable: true})
    fecha_ingreso: String;

    @Field(type => Float, {nullable: true})
    @Column({
        type: 'decimal',
        precision: 4, 
        scale: 2,
        nullable: true,
    })
    descuento: number;

    @Field(type => Editorial, {nullable: true})
    @ManyToOne(() => Editorial, (editorial) => editorial.id,
    {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({
        name: 'id_editorial'
    })
    editorial!: Editorial;

    @Field(type => Idioma, {nullable: true})
    @ManyToOne(() => Idioma, (idioma) => idioma.id,
        {
            onUpdate: 'CASCADE',
        })
    @JoinColumn({
        name: 'id_idioma',
    })
    idioma!: Idioma;

    @Field(type => [Tema], {nullable: true})
    @ManyToMany((type) => Tema, {
        onUpdate: 'CASCADE',
    })
    @JoinTable({
        name: "asignar_tema",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_tema'
        }
    })
    tema!: Tema[];

    @Field(type => [Autor], {nullable: true})
    @ManyToMany((type) => Autor, {
        onUpdate: 'CASCADE',
    })
    @JoinTable({
        name: "escrito_por",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_autor',
        }
    })
    @JoinColumn({
        name: 'id_autor',
    })
    autor!: Autor[];
    
    @Field(type => [Opinion], {nullable: true})
    @OneToMany((type) => Opinion, opinion => opinion.libro, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public opinion?: Opinion[];

    @Field(type => [Puntuacion], {nullable: true})
    @OneToMany((type) => Puntuacion, puntuacion => puntuacion.libro, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    puntuacion?: Puntuacion[];

    @OneToMany((type) => Orden_detalle, orden_detalle => orden_detalle.libro,{
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public orden_detalle: Orden_detalle[];

    @Field(type => Float)
    puntuacion_media: number = 0;
}
