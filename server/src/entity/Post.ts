import { Field, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn} from "typeorm";

@ObjectType()
@Entity()
export class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    content: string;


    @Column()
    @Field()
    title: string

    @CreateDateColumn()
    @Field()
    createdAt: Date

}
