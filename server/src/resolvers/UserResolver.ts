import {Resolver, Query, Mutation, InputType, Field, Arg, ObjectType} from "type-graphql";
import User from "../entity/User"
import argon2 from "argon2"

@InputType()
class UserInput {
    @Field()
    username: string;

    @Field()
    password: string;
}

@ObjectType()
class Error {
    @Field()
    field: string;

    @Field()
    message: string;
}


@ObjectType()
class UserResponse {
    @Field(() => [Error], {nullable: true})
    errors?: Error[];

    @Field(() => User, {nullable: true})
    user?: User
}


@Resolver()
export default class UserResolver {
    @Query(() => [User])
    async getAllUsers(): Promise<User[]> {
        return await User.find()
    }

    @Mutation(() => User)
    async addUser(
        @Arg('options') options: UserInput
    ): Promise<User> {
       const hashedPassword = await argon2.hash(options.password);
       const user = User.create({username: options.username, password: hashedPassword}).save(); 
       return user
    }
    @Mutation(() => UserResponse)
    async login(
    @Arg('options') options: UserInput
    ): Promise<UserResponse> {
        const user = await User.findOne({username: options.username})
        if (!user) {
            return {
                errors: [{
                    field: "username",
                    message: "No user with that username"
                }]           
            }
        }
        const valid = await argon2.verify(user.password, options.password)
        if (!valid) {
            return {
                errors: [
        {
            field: "password",
            message: "password is incorrect"
        }
                ]
            }
        }
        return {
            user
        }
        
    }
    }


