const path = require('path')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: {
        Query: {
            products: (parent, _args, _context, _info) => {
                return parent.products
            },
            orders: (parent, _args, _context, _info) => {
                return parent.orders
            }
        }
    }
})
const root = {
    products: require('./products/products.model'),
    orders: require('./orders/orders.model')
};


const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
    console.log(`GraphQL Server is running on PORT 3000....`);
})
