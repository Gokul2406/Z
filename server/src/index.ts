import "reflect-metadata";
import {createConnection} from "typeorm";
import { ApolloServer } from "apollo-server-express"
import PostResolver from "./resolvers/PostResolver";
import { buildSchema } from "type-graphql"
import express from "express";
import UserResolver from "./resolvers/UserResolver";
import { MyContext } from "./types"
import cookieSession from "cookie-session"

const main = () => {
	const app = express()

    app.set('trust proxy', 1)
    app.use(cookieSession({
        name: 'quid',
        //TODO add .env file
        secret: "afsdadflsdhflsgjsjgpsg",
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10
    }))

createConnection().then(async() => {
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [PostResolver, UserResolver],
		}),
        context: ({ req, res }): MyContext => ({
            req,
            res
        })
	})
	apolloServer.applyMiddleware({app})
	app.get('/', (_, res) => {
		res.send('Hello')
	})

	app.listen(4000, () => console.log("Server started at port 4000"))

}).catch(error => console.log(error));
}

main()
