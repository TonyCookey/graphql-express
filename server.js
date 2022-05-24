const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`)

const root = {
    description: 'Red Slides',
    price: 45.21
}

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root
}))

app.listen(3000, () => {
    console.log(`GraphQL Server is running on PORT 3000....`);
})
