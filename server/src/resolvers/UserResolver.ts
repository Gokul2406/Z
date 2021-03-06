import {
  Ctx,
  Resolver,
  Query,
  Mutation,
  InputType,
  Field,
  Arg,
  ObjectType,
} from "type-graphql";
import User from "../entity/User";
import argon2 from "argon2";
import { MyContext } from "../types";

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
  @Field(() => [Error], { nullable: true })
  errors?: Error[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return await User.find();
  }

  @Mutation(() => UserResponse)
  async register(@Arg("options") options: UserInput): Promise<UserResponse> {
    const hashedPassword = await argon2.hash(options.password);
    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "The username is very short",
          },
        ],
      };
    }
    if (options.password.length <= 8) {
      return {
        errors: [
          {
            field: "password",
            message: "The password is too short",
          },
        ],
      };
    }
    const user = await User.create({
      username: options.username,
      password: hashedPassword,
    }).save();
    return {
      user,
    };
  }
  @Mutation(() => UserResponse)
  async login(
    @Ctx() { req }: MyContext,
    @Arg("options") options: UserInput
  ): Promise<UserResponse> {
    const user = await User.findOne({ username: options.username });
    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "No user with that username",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "password is incorrect",
          },
        ],
      };
    }
    req.session!.userId = user.id
    return {
      user,
    };
  }
}
