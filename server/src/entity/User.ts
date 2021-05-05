import { ObjectType, Field } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"


@ObjectType()
@Entity("users")
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id: number

    @Column({unique: true})
    @Field()
    username: string

    @Column()
    password: string
    
}
