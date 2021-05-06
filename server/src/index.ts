import "reflect-metadata";
import {createConnection} from "typeorm";
import { ApolloServer } from "apollo-server-express"
import PostResolver from "./resolvers/PostResolver";
import { buildSchema } from "type-graphql"
import express from "express";
import UserResolver from "./resolvers/UserResolver";

createConnection().then(async() => {
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [PostResolver, UserResolver],
		})
	})
	const app = express()
	apolloServer.applyMiddleware({app})
	app.get('/', (_, res) => {
		res.send('Hello')
	})

	app.listen(4000, () => console.log("Server started at port 4000"))

}).catch(error => console.log(error));
