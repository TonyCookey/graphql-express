const path = require('path')
const express = require('express')

const { ApolloServer } = require('apollo-server-express')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

async function startApolloServer() {
    const app = express()
    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray,
    })
    const server = new ApolloServer({
        schema,
    })
    // start Apollo server
    await server.start()

    // add express server to Apollo server
    server.applyMiddleware({ app })

    app.listen(3000, () => {
        console.log(`GraphQL Server is running on PORT 3000....`);
    })

}

startApolloServer()


