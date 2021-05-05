import {Resolver, Query, Mutation, InputType, Field,  Arg} from "type-graphql";
import User from "../entity/User"
import argon2 from "argon2"

@InputType()
class UserInput {
    @Field()
    username: string;

    @Field()
    password: string;
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
}
