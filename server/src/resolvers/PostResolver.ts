import "reflect-metadata"
import { Resolver, Query, Mutation, Arg, InputType, Field } from "type-graphql";
import { Post } from "../entity/Post"

@InputType()
class PostInput {
    @Field()
    title: string;

    @Field()
    content: string
}

@Resolver()
export default class PostResolver {
    @Query(() => [Post])
    async getAllPosts(): Promise<Post[]> {
        return await Post.find();
    }

    @Mutation(() => Post)
    async createPost(
        @Arg('options') newPost: PostInput
    ): Promise<Post> {
        const todo = Post.create({content: newPost.content, title: newPost.title}).save()
        return todo;
    }

    @Mutation(() => Boolean)
    async deletePost(
        @Arg('title') postToDelete: string
    ): Promise<Boolean> {
        try{
            Post.delete({title: postToDelete});
            return true;
        } catch(err) {
        console.log(err)
        return false
        }
    }
}
